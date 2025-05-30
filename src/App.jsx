import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Router from './routes/Router'
import { RecipeContext } from './context/MainContext'
import { useNavigate } from 'react-router-dom'
// import RecipeTemplate from './components/RecipeTemplate'


const App = () => {
//  const {editId, seteditId, info,setinfo, search, setsearch}= useContext(RecipeContext)
  const navigate= useNavigate()

 const navigateSearch=()=>{
  navigate("/recipes/search")
 }


  return (
    <div className=' md:h-full md:w-full flex flex-col items-center box-border'>
      <div className='w-full h-fit bg-black flex justify-evenly items-center pt-40 py-3 '>
        <h1 className='text-white text-6xl font-bold'>Food <small className='text-orange-500 text-6xl'>.</small></h1>
        <Navbar/>
        <div className=' flex items-center gap-4'>
          <i onClick={navigateSearch}  className="hover:text-slate-600 font-bold text-2xl ri-search-line text-white flex">
          </i>
          <i class="hover:text-slate-600 font-bold text-2xl ri-price-tag-line text-white"></i>
          <i class="hover:text-slate-600 font-bold text-2xl ri-user-3-line text-white"></i>
        </div>
      </div>
      <Router/>
    </div>
  )
}

export default App