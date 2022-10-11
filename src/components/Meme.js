import React, { useEffect, useState } from "react"




export default function Meme(){
    
React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(MemeData=>setMemeimgs(MemeData.data.memes))
},[]
)

    const[meme, setMeme]= React.useState(
        {
        topText:"",
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg"}
        )
    
        function handleChange(event){
            const{name, type, value} = event.target
            
            setMeme(prevState=>{
                return{
                    ...prevState, 
                    [name]:value
                }
            })
        }
        
    const[allMemeImages, setMemeimgs]= React.useState([])
    
   


    function RNDMimage(){ 
        const memeArr=allMemeImages
        const item=memeArr[Math.floor(Math.random()*memeArr.length)]
        let URL = item.url
        //randomIMG(item.url) 
        setMeme(prevMeme =>{
            return{...prevMeme, 
                randomImage: URL
            }
        })
         
    }
    return(
        <div className="Form">
            <input 
                className="TopTextInput" 
                placeholder="Top text"
                type = "text" 
                value={meme.topText}
                name="topText"
                onChange={handleChange}
            />

            <input 
                className="BottomTextInput" 
                placeholder="Bottom text"
                type = "text"
                
                name="bottomText"
                onChange={handleChange}
            />

            <button 
                onClick={RNDMimage} 
                className="MemeButton">Get a new meme image 🖼</button>
            
            <div className="meme">
                <img className= "Memeimage" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text  bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
} 