import fs from 'fs';
import { NearAccount, Worker } from 'near-workspaces';

const wasm_path = './target/wasm32-unknown-unknown/release/diary_nft.wasm';

export interface Context {
    worker: Worker;
    root: NearAccount;
    contract: NearAccount;
    alice: NearAccount;
}

export async function initContext(): Promise<Context> {
    const worker = await Worker.init({
        network: 'sandbox',
        rm: true, // 关闭 sandbox 后删除测试缓存文件, 节约硬盘空间
    });

    // 默认根账户名为 `test.near`
    const root = worker.rootAccount;

    // `hello_test.test.near`
    const contract = await root.createSubAccount('hello_test');

    // `alice.test.near`
    const alice = await root.createSubAccount('alice');

    const code = fs.readFileSync(wasm_path);

    // 部署并初始化合约
    await contract
        .batch(contract.accountId)
        // Deploy Action
        .deployContract(code)
        // FunctionCall Action
        .functionCall('init', {
            owner_id: alice.accountId,
        })
        // 执行交易
        .transact();

    return { worker, root, contract, alice };
}