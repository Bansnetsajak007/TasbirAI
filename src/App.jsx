import  { useState } from 'react';
import axios from 'axios';

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt , setPromt] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);


  const generateImage = async () => {
    const options = {
      method: 'POST',
      url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '96ba5830admshf8455fc87fe91fcp1cffe6jsne6739aead237',
        'X-RapidAPI-Host': 'ai-text-to-image-generator-api.p.rapidapi.com'
      },
      data: {
        inputs: prompt
      }
    };

    try {
      const response = await axios.request(options);
      setImageUrl(response.data.url);
      console.log(response);
    } catch (error) {
      setErrors(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <h1>TasbirAI</h1>
      <div>
        {
          loading && <h3>Image will generate here!</h3>
        }
        {
          imageUrl &&
        <img 
        height={"400px"}
        width={"300px"}
        src={imageUrl} alt="Genereted Image" />
        }
        {
          errors && <h3>Error Generating an Image</h3>
        }
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