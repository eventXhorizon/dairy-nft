import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';

import SignIn from './components/SignIn';
import Home from "./components/Home";

const App = ({ isSignedIn, diaryNFT, wallet }) => {


  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }

  return (
    <main className="bg-gray-100 h-screen w-screen">
      <div className="flex items-center justify-center m-4 p-4 text-xl">
          <div className="m-8"><h1> 🎊 NEAR Diary NFT 🗺 </h1></div>
          <div className="fixed top-0 right-0 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            { isSignedIn
                ? <button className="text-black bg-black-500" onClick={signOut}>Log out</button>
                : <button onClick={signIn}>Log in</button>
            }</div>
      </div>

      { isSignedIn
        ? <Home diaryNFT={diaryNFT} currentAccountId={wallet.accountId} />
        : <SignIn/>
      }

    </main>
  );
};

export default App;