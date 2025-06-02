import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { RecipeContext } from '../context/MainContext'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'

const Create = () => {
  const navigate= useNavigate()
 const {info, setinfo,editId, seteditId}= useContext(RecipeContext)
 const{register, handleSubmit, formState:{errors}, reset}= useForm()

 const formSubmitHandler=(data)=>{
   data.id= nanoid()
  setinfo([...info, data])
  seteditId(data.id)
  toast.success("Recipe Created")
  navigate("/recipes")
  reset()
  console.log(data);
 }
  //  GXGG2zes4lVrvUPcECOSCA==RpWlIkNrLP5K3k0D

   useEffect(() => {
     const retriveRecipies= JSON.parse(localStorage.getItem("info"))
     setinfo(retriveRecipies)
    }, [setinfo])
  
    useEffect(() => {
      localStorage.setItem("info",JSON.stringify(info))
    }, [info])


  return (
    <div className='w-screen flex justify-cente p-9 bg-slate-50'>
      <form action="" className=' p-7 text-black flex flex-col justify-center items-center gap-2 rounded-xl w-screen' onSubmit={handleSubmit(formSubmitHandler)}>
        <input className='p-3 border-b-2 w-1/3  border-black rounded' {...register("image",{required:true})} type="url"  placeholder='Image'/> { errors.image? <p className='text-red-600 mb-2  text-md font-serif'>Enter Image URL</p>:""}
        <input className='p-3 border-b-2  w-[400px] w- border-black rounded' {...register("title", {required:true})}type="text" placeholder='Title' /> { errors.title? <p className='text-red-600 mb-2 text-md font-serif'>Fill title</p>:""}
        <input className='p-3 border-b-2  w-[400px] w- border-black rounded' {...register("chefname", {required:true})}type="text" placeholder='Chef Name' /> { errors.chefname? <p className='text-red-600 mb-2 text-md font-serif'>Fill Chef Name</p>:""}
        <textarea className='p-3 rounded border-b-2 border-black w-1/3' {...register("description")}  placeholder='Enter description'></textarea>
        <textarea className='p-3 rounded border-b-2 border-black w-1/3' {...register("instructions")}  placeholder='Enter instructions'></textarea>
        <textarea className='p-3 rounded border-b-2 border-black w-1/3' {...register("ingradients")} placeholder='Enter ingradients'></textarea>
        <select className='text-black font-[poppins] text-sm bg-gray-100 p-3 rounded border-b-2 border-black w-1/3' name="" id="" {...register("catagory", {required:true})}>
          <option value="">Select your catagory</option>
          <option className='bg-white text-gray-500' value="Indian"> Indian</option>
          <option className='bg-white text-gray-500' value="Foreign"> Foreign</option>
          <option className='bg-white text-gray-500' value="Rural/ Domestic"> Rural/ Domestic</option>
        </select> { errors.catagory? <p className='text-red-600 mb-2 text-md font-serif'>Select Catagory</p>:""}
        <button className='bg-black rounded w-fit text-white m-auto px-3 py-2 active:scale-90 w-fit'>Register Recipe</button>
      
      </form>
    </div>
  )
}

export default Create