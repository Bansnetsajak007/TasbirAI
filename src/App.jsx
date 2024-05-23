import  { useState } from 'react'

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt , setPromt] = useState("");


  const generateImage = async()=> {
    // let url = "https://i.ibb.co/p1DfjGj/meme74.jpg";
    // setImageUrl(url);
    console.log("Button Clicked!!!!");
    console.log(prompt);
    try {
      const options = {
        method: 'POST',
        headers: {
          'x-rapidapi-key': '71d2e5926bmsh6f68f198a07cda5p162612jsne71114d195e3',
          'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: {
          inputs: 'Cool goat wearing glasses and programming'
        }
      };
      const response = await fetch('https://ai-text-to-image-generator-api.p.rapidapi.com/realistic', options);
      const result = await response.json();
      setImageUrl(result.url); // Adjust this based on the actual API response structure
    } catch (error) {
      console.log(error);
    }
    }



  return (
    <>
      <h1>TasbirAI</h1>
      <div>
        <img 
        height={"400px"}
        width={"300px"}
        src={imageUrl} alt="Genereted Image" />
      </div>
        <br />
        <input
        onChange={(e) => setPromt(e.target.value)}
        type="text" name="prompt" id="prompt" />

        <button onClick={generateImage}>Generate</button>
    </>
  )
}

export default App