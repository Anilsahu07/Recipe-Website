import React, { useContext, useEffect, useState } from 'react'
import { RecipeContext } from '../context/MainContext'


const Favourite = () => {
  const [show, setshow] = useState(false)
 const {fav,setfav,info,setselectRecipe}= useContext(RecipeContext)



  const deleteCards=(id)=>{
    const recipe= fav.filter(rec=>rec.id !== id)
    setfav(recipe)
  }
  
  if (fav.length<1) {
    return <div className='w-screen h-52 p-5 flex items-center'><h1 className='text-xl text-center font-semibold text-green-600 font-[poppins]'>No Recipe Added to Favourite !! 😔</h1></div>
  }
  
 
  return (
    <div className='justify-center flex p-5 flex-wrap gap-3 items-center'>
        {fav.map((rec,i)=>(
        <ul key={i} className="w-full lg:w-fit duration-200 hover:scale-90 hover:bg-orange-100 font-[montserrat] p-3 rounded-xl flex flex-col text-center items-center gap-2 h-fit outline-blue-300 outline">
         
            <img className='w-44 h-44 rounded-full border object-cover hover:outline' src={rec.image} alt="error404" />       
            <h3 className=' font-bold text-4xl mt-2'><strong className='text-xl text-gray-400'></strong> {rec.title.toUpperCase()}</h3>
            <p className=' text-3xl '> <strong className='underline'></strong> {rec.chefname}</p>
            <p className=' font-serif font-semibold text-2xl'><strong className='underline'></strong> {rec.catagory}</p>
           
           {
            show && (
              <>
               <p className='text-lg font-[montserrat]'> <strong className='underline'></strong> {rec.description}</p>
                <hr className='border outline-4 w-full' />
                <p className='text-lg font-[montserrat]'><strong className='underline'></strong> {rec.instructions}</p>
                <hr className='border outline-4 w-full' />
                <p className=' text-lg font-[montserrat]'><strong className='underline'></strong> {rec.ingradients}</p>
                <hr className='border outline-4 w-full' />
                 <div className='flex justify-center gap-4 w-full'>
                <button onClick={()=>deleteCards(rec.id)} className='bg-green-500 active:bg-red-700 rounded px-2 py-2 hover:bg-orange-900 text-white font-semibold'>Delete</button>
            </div>
              </>
            )
           }
             <button className=' text-blue-500 text-xl font-semibold' onClick={()=>setshow(!show)}>
            {show?"Less...":"More..."}
             </button>
      </ul>
        ))}

    </div>
  )
}

export default Favourite