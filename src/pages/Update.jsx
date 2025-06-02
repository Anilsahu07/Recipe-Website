import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RecipeContext } from '../context/MainContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Update = () => {
   const{register, handleSubmit, formState:{errors}, reset}= useForm()
  const {info,setinfo,selectRecipe, setselectRecipe}= useContext(RecipeContext)
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

    toast.success("Recipe Updated!!")
     
    setselectRecipe(null);
    navigate(-1);
   }   
  

  return (
    <div className='w-full h-full flex justify-center rounded-xl  p-9'>
      <form action="" className=' p-7 text-black flex flex-col justify-center gap-2 rounded-xl w-fit sm:w-fit' onSubmit={handleSubmit(formSubmitHandler)}>
        <input className='p-3 border-b-2 w-[400px]  border-black rounded md:w-full' {...register("image",{required:true})} type="url"  placeholder='Image'/> { errors.image? <p className='text-red-600 mb-2  text-md font-serif'>Enter Image URL</p>:""}
        <input className='p-3 border-b-2  w-[400px] w- border-black rounded' {...register("title", {required:true})}type="text" placeholder='Title' /> { errors.title? <p className='text-red-600 mb-2 text-md font-serif'>Fill title</p>:""}
        <input className='p-3 border-b-2  w-[400px] w- border-black rounded' {...register("chefname", {required:true})}type="text" placeholder='Chef Name' /> { errors.chefname? <p className='text-red-600 mb-2 text-md font-serif'>Fill Chef Name</p>:""}
        <textarea className='p-3 rounded border-b-2 border-black' {...register("description")}  placeholder='Enter description'></textarea>
        <textarea className='p-3 rounded border-b-2 border-black' {...register("instructions")}  placeholder='Enter instructions'></textarea>
        <textarea className='p-3 rounded border-b-2 border-black' {...register("ingradients")} placeholder='Enter ingradients'></textarea>
        <select className='text-black font-[poppins] text-sm bg-gray-100 p-3 rounded border-b-2 border-black' name="" id="" {...register("catagory", {required:true})}>
          <option value="">Select your catagory</option>
         <option value="">Select your catagory</option>
          <option className='bg-white text-gray-500' value="Indian"> Indian</option>
          <option className='bg-white text-gray-500' value="Foreign"> Foreign</option>
          <option className='bg-white text-gray-500' value="Rural/ Domestic"> Rural/ Domestic</option>
        </select> { errors.catagory? <p className='text-red-600 mb-2 text-md font-serif'>Select Catagory</p>:""}
        <button className='bg-black rounded w-fit text-white m-auto px-3 py-2 active:scale-90'>Update Recipe</button>
      
      </form>
    </div>
  )
}

export default Update