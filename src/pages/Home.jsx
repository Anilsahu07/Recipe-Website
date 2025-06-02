import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()
  const navigateRecipe=()=>{
    navigate("/recipes")
  }
  return (
    <div className=' h-full p-2 w-full'>
      {/* <h1 className='font-bold font-serif text-2xl  text-center'>Welcome to the Recipe World</h1> */}
      {/* <img className='w-full h-[650px]' src={food} alt="" /> */}
      <div className='h-[600px] bg-cover bg-center flex justify-center items-start p-9 flex-col gap-5 rounded-s-3xl' style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2022/03/19/12/33/side-dish-7078451_1280.jpg')"}}>
      <h1 style={{textShadow:"9px 3px 9px rgba(1,2,3,1)"}} className='font-[poppins] text-gray-200 font-bold text-5xl'>Explore your <br /> favourite Dishes here...</h1>
      <button onClick={navigateRecipe} className='bg-blue-600 text-white rounded px-4 py-3 hover:scale-90 hover:text-[whitesmoke] hover:font-semibold font-semibold'>SEE THEM ALL</button>
      </div>
    </div>
  )
}

export default Home