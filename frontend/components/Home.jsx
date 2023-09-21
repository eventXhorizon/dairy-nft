import FormData from 'form-data';
import {useEffect, useState} from "react";
import dotenv from 'dotenv'
import axios from "axios";
import {json} from "stream/consumers";

dotenv.config()

function Home({diaryNFT, currentAccountId}) {

    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const [buttonText, setButtonText] = useState("Mint Your Dairy");
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const get_date = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const date = `${year}-${month}-${day}`;
        setDate(date);
    }
    useEffect(() => {
        get_date();
    }, [])

    const generateImg = () => {
        return new Promise((resolve) => {
            setButtonText("Minting...");
            setButtonDisabled(true);

            const form = new FormData()

            const prefix = process.env.DEFAULT_STYLE;
            const prompt = prefix + content;
            console.log(prompt);

            localStorage.removeItem("myData")

            form.append('prompt', prompt)
            axios.post(process.env.GENERATE_IMG, form, {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                },
                responseType: 'arraybuffer'
            })
                .then(response => response.data)
                .then((data) => {
                    const blob = new Blob([data]);
                    const imgUrl = URL.createObjectURL(blob);
                    const img = new Image();
                    img.src = imgUrl;
                    img.onload = function () {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;

                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);

                        const base64 = canvas.toDataURL('image/png');

                        // 将base64保存到localStorage
                        localStorage.setItem('myData', base64);

                        setContent("");
                        console.log("数据保存完成");
                        resolve();
                    }
                })
                .catch(error => console.error(error));
        });
    }

    const upload = () => {
        const form = new FormData()
        form.append('uid', process.env.PIC_UPLOAD_UID)
        form.append('token', process.env.PIC_UPLOAD_TOKEN)

        const imageBase64 = localStorage.getItem('myData');

        const blob = base64ToBlob(imageBase64);
        const file = new File([blob], 'image.png', {type: 'image/png'});

        form.append('file', file);

        axios.post(process.env.UPLOAD_IMG, form, {
            responseType: 'json'
        })
            .then(response => response.data.data)
            .then(ori_data => {
                console.log("data: ", ori_data);
                console.log(ori_data.url);
                const placeholder_img = document.getElementById("placeholder_img")
                placeholder_img.src = ori_data.url;

                setButtonText("Mint Your Dairy");
                setButtonDisabled(false);

                buildNFT(ori_data.url, content);
            })
            .then(res => console.log(res))
    }

    function base64ToBlob(base64) {
        // 去掉 url 的头信息
        base64 = base64.split(',')[1];

        // base64 解码
        const bytes = atob(base64);

        // 将解码后的数组转换为Buffer
        const buffer = new Uint8Array(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
            buffer[i] = bytes.charCodeAt(i);
        }

        // 使用数组缓冲区创建Blob对象
        const blob = new Blob([buffer], {type: 'image/png'});

        return blob;
    }

    async function generateAndUpload() {
        await generateImg();
        // upload_test();
        upload();
    }

    function buildNFT(media, description) {
        // console.log("Home currentAccountId: ", currentAccountId);
        diaryNFT.mintNFT(media, description, currentAccountId)
    }

    return (
        <>
            <div className="flex justify-around p-3">

                <div className="rounded overflow-hidden shadow-md w-80 h-180 " style={{background: '#f5f5f5'}}>
                    <div className="flex items-center justify-center m-4">
                        {`Welcome back ${currentAccountId}`}
                    </div>
                    <img src="./loading.webp" alt="" className="w-50 h-50" id="placeholder_img"/>
                    {/*<img src="https://s3.bmp.ovh/imgs/2023/08/16/5005571f76ed050b.png" alt="" className="w-50 h-50" id="placeholder_img"/>*/}

                    <div className="p-2" style={{background: '#f5f5f5'}}>
                        {/*<textarea className="text-gray-500 text-sm px-2 py-2 w-full"*/}
                        {/*    value={content} onChange={(e) => setContent(e.target.value)} */}
                        {/*/>*/}

                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2.5">Your
                            dairy: </label>
                        <textarea id="message" rows="4"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Write your thoughts here..."
                                  value={content} onChange={(e) => setContent(e.target.value)}
                        ></textarea>

                    </div>
                    <button className="rounded-full bg-sky-600 text-white px-8 py-3 mx-auto block"
                            onClick={generateAndUpload}
                            disabled={buttonDisabled}
                    >
                        {buttonText}
                    </button>
                    <div className="p-2  border-gray-200 " style={{background: '#f5f5f5'}}>
                        <div className="flex justify-end text-xs text-gray-900 font-medium">Mint Date: {date}</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;