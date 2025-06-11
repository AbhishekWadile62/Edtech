import { useState } from 'react'
import axios from 'axios';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function DocToPdf() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        responseType: 'blob' // Important to handle the file download
      });

      // Create a URL for the file blob and trigger download
      console.log(response)
      if(response.status === 200){
        alert("File Uploaded Successfully...!")
      }

      // Clean up the URL
      // window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error uploading or downloading the file', error);
    }
  };


  return (
    <>
      <div className='flex justify-center items-center flex-col w-[100%] h-[20vh] '>
        <div className="flex justify-around items-center  w-[70%] h-[80vh] ">
          <input type="file" onChange={handleFileChange} className=' bg-[#111111] rounded-full file:bg-[#111111] file:border-none flex justify-around file:text-white file:h-[8vh] relative -left-6'/>
        </div>
          <button onClick={handleUpload} className='w-[50%] text-black h-[10vh] border-[1px] border-transparent rounded-[10vh] hover:rounded-[10vh] duration-300 hover:border-[1px] hover:border-white hover:shadow-md hover:shadow-[#ffffff]'>Upload PDF File</button>
         
      </div>
    </>
  )
}

export default DocToPdf
