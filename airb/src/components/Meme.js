import React from 'react';
import MemeData from "./MemeData";


    
export default function Meme() {
const [memeImage, setMemeImage] = React.useState("");
console.log(memeImage);



    function getMemeImage(){
        const memeArray = MemeData.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length)
        console.log(randomIndex);
        setMemeImage  (memeArray[randomIndex].url)

   
      
    }
    return (
        <main className="form-box">
            <div className="input-form">
                    <input type="text" className="input-text" placeholder="top text"/>
                    <input type="text" className="input-text" placeholder="bottom text" />

            <button className="input-btn"
            onClick={getMemeImage}>
            Get Meme Image 🏞 </button>
            </div>
            <img className="meme-template" alt="Meme" src={memeImage} />
        </main>
    );

} 