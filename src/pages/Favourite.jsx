import React, { useContext, useEffect } from 'react'
import { RecipeContext } from '../context/MainContext'


const Favourite = () => {
 const {fav,setfav,info,setselectRecipe}= useContext(RecipeContext)

  const deleteCards=(id)=>{
    const recipe= fav.filter(rec=>rec.id !== id)
    setfav(recipe)
  }
  
  if (fav.length<1) {
    return <div className='w-screen h-full flex justify-center items-center p-8'><h1 className='text-2xl font-semibold text-green-600 font-[poppins]'>No Recipe Added to Favourite !! 😔</h1></div>
  }
  
 
  return (
    <div className=' flex-wrap justify-center flex p-5 gap-3'>
        {fav.map((rec,i)=>(
        <ul key={i} className='border h-fit border-blue-600  max-w-fit p-5 rounded-xl hover:scale-95 flex flex-col items-center justify-center gap-2.5 hover:bg-slate-200 transition-all duration-100 font-[montserrat] text-center'>
         
            <img className='w-40 h-40 rounded-full border object-cover hover:outline' src={rec.image} alt="error404" />       
            <h3 className=' font-bold text-5xl mt-2'><strong className='text-xl text-gray-400'></strong> {rec.title.toUpperCase()}</h3>
            <p className=' font-serif text-3xl '> <strong className='underline'></strong> {rec.chefname}</p>
            <p className=' font-serif text-2xl'><strong className='underline'></strong> {rec.catagory}</p>
            <p className=' font-serif text-lg'> <strong className='underline'></strong> {rec.description}</p>
            <hr className='border outline-4 w-full' />
            <p className=' font-serif  text-lg'><strong className='underline'></strong> {rec.instructions}</p>
            <hr className='border outline-4 w-full' />
            <p className=' font-serif  text-lg'><strong className='underline'></strong> {rec.ingradients}</p>
            <hr className='border outline-4 w-full' />
             <div className='flex justify-center gap-4 w-full'>
            <button onClick={()=>deleteCards(rec.id)} className='bg-green-500 active:bg-red-700 rounded px-2 py-2 hover:bg-orange-900 text-white font-semibold'>Delete</button>
            </div>
      </ul>
        ))}

    </div>
  )
}

export default Favourite