import React from "react";
import { useState } from "react";
export default function SearchBar(){
    const [input, setInput] = useState("");
    const [meme, setMeme] = useState({});
    const[isClick, setIsClick]=useState(false);
  
    function handleChange(event) {
      setInput(event.target.value);
    }
    
    //BUTTON CLICK FUNCTION
    function handleClick(e) {
        e.preventDefault();
        fetch(`https://meme-api.com/gimme/${input}`)
          .then((response) => response.json())
          .then((data) => setMeme(data.url));
      
        if(input!==""){
          document.querySelector('#home').classList.add('hidden')
          document.querySelector('#mainImg').classList.remove('hidden')
        }
    }

    //KEYDOWN EVENT
    function handleKey(e){
      if(e.key==="Enter"){
        e.preventDefault();
        fetch(`https://meme-api.com/gimme/${input}`)
          .then((response) => response.json())
          .then((data) => setMeme(data.url));
        if(input!==""){
          document.querySelector('#home').classList.add('hidden')
          document.querySelector('#mainImg').classList.remove('hidden')
        }
      }
    }



  return(
        <div className="flex flex-col justify-between space-y-20">
           
         { /* ------------------------------- SEARCH BAR ------------------------------- */}

          <div className="absolute top-7 right-8 basis-[20%]">
            <div className="rounded-md w-80 
            bg-gradient-to-r from-[#072c36] to-[#0a1214]
            border-2 border-primary flex 2xl:w-96 mb-10 max-[360px]:w-60"
            tabIndex="0">
                <input  className="p-5 basis-2/3 bg-transparent focus:border-4 focus:border-cyan-400 focus:outline-none caret-cyan-200 text-[#9ca3af]"
                        type="text"
                        placeholder="Search for any Subreddit..."
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleKey}
                />
            
                <button onClick={handleClick}  className="pr-4 basis-1/3">
                    <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="#11d68b" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                </button>
            
            </div>
          </div>
          

          {/* ------------------------------ IMAGE SECTION ----------------------------- */}

          <div id="mainImg" className="flex flex-col rounded-2xl p-2 md:p-10 h-2/3 w-full md:h-2/3
            md:bg-gradient-to-b from-[#072437] via-[#1c1829] to-[#171320]
            border-4 border-primary object-contain max-w-[500px] relative overflow-auto max-h-[80vh] dark:[color-scheme:dark] touch-pinch-zoom hidden">
            
            <img src={meme} alt="4chan" 
            className="w-full h-full rounded-lg relative "/>
            <button className="absolute right-2 md:right-7 h-full md:h-[90%] w-[20%]"
                    onClick={handleClick}> 
                <svg className="backdrop-opacity-20 ml-6 md:ml-9 hover:backdrop-opacity-40" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#040b0c" fillOpacity="0.3" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path></svg>
            </button>
          </div>

         {/* -------------------------------- HOME PAGE ------------------------------- */}
          
          <div className="flex flex-col justify-between items-center" id="home">
            <h1 className="text-4xl text-white font-bold tracking-wide" >
              Reddit Meme Vault
            </h1>
            <h2 className="text-2xl text-secondary font-normal mt-3">
              Minimalistic Reddit Browsing
            </h2>
            <p className="text-slate-300 font-light text-lg #11d68b mt-6 text-center">
              Search for any Subreddit and get random memes. This works best with image based subreddits like 'wholesome', 'greentext' etc...
            </p>
            <p className="text-lg text-center text-slate-600 mt-5">Just search the subreddit name like "dankmemes"<span className="text-red-500 font-bold">  (Case sensitive!)  </span> and click anywhere on the right corner of image to toggle</p>
          </div>
          {/* ------------------------------------ . ----------------------------------- */}

        </div> //main div
    )
}