import React, { useState } from 'react';
import axios from 'axios';
const App = () => { 
  const [images, setImages] = useState([]); 
  const [category, setCategory] = useState('');
  const fetchImages = async (category) => { 
    try { 
      const response = await axios.get(`https://api.unsplash.com/search/photos`, 
      {
        params: { query: category, per_page: 30 }, 
        headers: { Authorization: 'Client-ID 4bj2_t9XCaKnZFja-lnYHxxfkK5lkpjGnYU-v1G32iw', }, }); 
      setImages(response.data.results); 
      setCategory(category); 
    } 
    catch (error) { 
      console.error('Error fetching images from Unsplash:', error); 
    } 
    }; 
  return ( 
    <> 
      <div id="title-box" className="bg-gray-700 px-5 py-5 mx-auto mt-36 mb-16 w-2/5 text-center rounded-2xl shadow-lg shadow-pink-500"> 
        <h1 id="title" className="text-pink-500 font-mono text-6xl font-bold">Image Generator</h1> 
      </div> 
      <div id="select-cate" className='bg-gray-700 px-5 py-3 rounded-lg mx-auto my-10 w-64 text-center shadow-lg shadow-cyan-400'>
        <h1 className='text-2xl text-cyan-400 font-mono'> Select Category </h1>
      </div>
      <div id="category-container" className="flex justify-around items-center px-3 py-3 flex-wrap font-mono text-2xl"> 
        <button onClick={() => fetchImages('nature')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-green-300 shadow-sm shadow-green-300"> Nature </button> 
        <button onClick={() => fetchImages('technology')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-purple-300 shadow-sm shadow-purple-300">Technology</button> 
        <button onClick={() => fetchImages('agriculture')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-amber-600 shadow-sm shadow-amber-600">Agriculture</button> 
        <button onClick={() => fetchImages('food')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-red-500 shadow-sm shadow-red-500">Food</button> 
        <button onClick={() => fetchImages('fashion')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-pink-400 shadow-sm shadow-pink-400">Fashion</button> 
        <button onClick={() => fetchImages('sports')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-blue-500 shadow-sm shadow-blue-500">Sports</button> 
        <button onClick={() => fetchImages('animals')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-orange-500 shadow-sm shadow-orange-500">Animals</button> 
        <button onClick={() => fetchImages('fitness')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-gray-300 shadow-sm shadow-gray-300">Fitness</button> 
        <button onClick={() => fetchImages('business')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-green-500 shadow-sm shadow-green-500"> Business </button> 
        <button onClick={() => fetchImages('art')} className="bg-gray-700 px-5 py-3 rounded active:scale-90 text-yellow-400 shadow-sm shadow-yellow-400"> Art </button> 
      </div> 
        <div className="images-container flex justify-around items-center flex-wrap my-5"> 
          {images.map((image) => ( <div key={image.id} className="image bg-gray-600 p-1 rounded-lg my-3 mx-3"> 
            <img src={image.urls.small} alt={image.alt_description} className="w-60 h-52 object-cover rounded" /> 
        </div> ))} 
        </div> 
    </> 
  ); 
}; 

export default App;
