import React, { useContext, useEffect } from 'react'
import {Link } from 'react-router-dom'
import { RecipeContext } from '../context/MainContext'
import RecipeTemplate from '../components/RecipeTemplate'

const Recipes = () => {
  const {info, setinfo,filters}= useContext(RecipeContext)

  
  const recipeRender= filters.map(rec=> (
    <RecipeTemplate key={rec.id} recipe={rec}/>
))

 useEffect(() => {
   const retriveRecipies= JSON.parse(localStorage.getItem("info"))
   if (retriveRecipies) {
     setinfo(retriveRecipies)
   }
  }, [setinfo])


  useEffect(() => {
    localStorage.setItem("info",JSON.stringify(info))
  }, [info])


  return (
    <div className=' h-full flex flex-col items-center p-5'>
       <Link className=' bg-red-600 text-white px-3 py-2 rounded w-fit hover:scale-105 hover:text-gray-100' to="/recipes/create">Create Recipe</Link>
       <hr  className='mt-3 w-full'/>
      <div className='w-full flex flex-wrap gap-5 mt-2 px-2 justify-center'>
        {info.length>0? recipeRender:<h className='font-bold font-serif text-2xl shadow-black shadow p-1'>Recipe not found</h>}
        {/* {recipeRender} */}
       </div>
    </div>
  )
}

export default Recipes