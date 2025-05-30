import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RecipeContext } from '../context/MainContext'
import { useNavigate } from 'react-router-dom'
import SingleRecipe from './SingleRecipe'

const Update = () => {
   const{register, handleSubmit, formState:{errors}, reset}= useForm()
  const {editId, seteditId,info,setinfo,selectRecipe, setselectRecipe}= useContext(RecipeContext)
  const navigate=useNavigate()


   useEffect(() => {
    if (selectRecipe) {
      reset(selectRecipe); // prefill form
    }
  }, [selectRecipe, reset]);
  

  
   const formSubmitHandler=(data)=>{
    const updatedRecipes = info.map(rec =>
      rec.id === data.id ? { ...data } : rec
    );
    setinfo(updatedRecipes)
    localStorage.setItem("info", JSON.stringify(updatedRecipes))
    setselectRecipe(null);
    navigate(-1);
   }
  

  return (
    <div className='w-full h-full flex justify-center outline rounded-xl'>
      <form className='w-full bg-black p-6 text-black flex flex-col items-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pBfRZ13crt-3-nwUd6HcglcsMSBWSWXiaw&s)] bg-center bg-cover bg-no-repeat  gap-5 rounded-xl' onSubmit={handleSubmit(formSubmitHandler)}>
        <label htmlFor="" className='text-white flex gap-3 items-center font-semibold'>
         Image: 
         <input className=' bg-yellow-100 text-black p-3 border w-[400px] w- border-black rounded' {...register("image")} type="url"  placeholder='Image'/>
         </label>

         <label htmlFor="" className='text-white flex items-center gap-3 font-semibold'>
          Title:
          <input className='bg-yellow-100 text-black p-3 border  w-[400px] w- border-black rounded' {...register("title")}type="text" placeholder='Title' />
         </label>

         <label htmlFor="" className='text-white flex items-center gap-3 font-semibold'>
            Chef Name:
           <input className='bg-yellow-100 text-black p-3 border w-[400px] w- border-black rounded' {...register("chefname")}type="text" placeholder='Chef Name' />
         </label>

          <label htmlFor="" className='text-white flex items-center gap-3 w-full font-semibold'>
            Title:
            <textarea className='bg-yellow-200 text-black p-3 rounded w-full border border-black' {...register("description")} placeholder='Enter description'></textarea>
          </label>

           <label htmlFor="" className='text-white flex items-center gap-3 w-full font-semibold'>
           Title:
           <textarea className='bg-yellow-200 w-full text-black p-3 rounded border border-black' {...register("instructions")} placeholder='Enter instructions'></textarea>
           </label>

            <label htmlFor="" className='text-white flex items-center gap-3 w-full font-semibold '>
              Title:
              <textarea className='w-full bg-yellow-200 text-black p-3 rounded border border-black' {...register("ingradients")} placeholder='Enter ingradients'></textarea>
            </label>

            <label htmlFor="" className='w-full text-white flex  items-center gap-3 font-semibold'>
              Catagory:
              <select className='text-white font-[poppins] font-light bg-gray-500 p-3 rounded w-full' name="" id="" {...register("catagory")}>
              <option value="">Select your catagory</option>
              <option className='bg-black text-white' value="cat-1"> Catagory-1</option>
              <option className='bg-black text-white' value="cat-2"> Catagory-2</option>
              <option className='bg-black text-white' value="cat-3"> Catagory-3</option>
              </select>
            </label>
        
          <button className='bg-purple-600 rounded w-fit text-white m-auto p-3 active:scale-90'>Update Recipe</button>
      </form>
    </div>
  )
}

export default Update