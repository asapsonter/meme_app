import React from 'react';
import MemeData from "./MemeData";


    
export default function Meme() {
//const [memeImage, setMemeImage] = React.useState("");
const [meme, setMeme] = React.useState({
  toptext: "",
  bottomtext: "",
  randomImage: "https://i.imgflip.com/1bij.jpg",
});
const [allMemeImages, setAllMemeImages] = React.useState(MemeData);




    function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length)
    
        const url = memeArray[randomIndex].url
        setMeme(preMeme =>({
            ...preMeme,
            randomImage: url
        }))
      
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
            <img className="meme-template" alt="Meme" src={meme.randomImage} />
        </main>
    );

} 