import React, { useContext } from 'react'
import { RecipeContext } from '../context/MainContext'

const Search = () => {
  const{search, setsearch,filters}=  useContext(RecipeContext)
  return (
    <div className='h-full w-screen flex justify-center flex-col items-center gap-3 p-3'>
            <h1 className='text-2xl text-wrap font-bold font-[montserrat] flex gap-4 justify-center items-center'>Search <h1 className='text-red-600 text-xl'>youR</h1> Recipe</h1>
            <input placeholder='Search here ...' value={search}  name='title' onChange={(e)=>setsearch(e.target.value)} type="text" className='border border-black rounded font-normal text-lg text-black p-1 w-full bg-gray-100' />

            <div className=' h-full flex gap-5 mt-2 p-1 justify-center flex-wrap w-full '>
                  { search? filters.map((e,i)=>(
                    <ul key={i} className='outline outline-blue-700 w-fit h-fit p-5 rounded-xl hover:scale-95 flex flex-col items-center justify-center text-center gap-1 hover:bg-slate-200 transition-all duration-100'>
                        <img className='hover:outline-double w-44 h-44 rounded-full' src={e.image} alt="" />
                        <p className='text-lg font-serif font-semibold'><strong className='text-2xl'>Title-</strong> {e.title.toUpperCase()}</p>
                        <p className='text-lg font-serif'><strong className='text-xl'>Chef Name-</strong> {e.chefname}</p>
                        <p className='text-lg font-serif'><strong className='text-xl'>Description-</strong> {e.description}</p>
                        <hr className='border outline-4 w-full' />
                        <p className='text-lg font-serif'><strong className='text-xl'>Ingradients-</strong> {e.ingradients}</p>
                        <hr className='border outline-4 w-full' />
                        <p className='text-lg font-serif'><strong className='text-xl'>Instructions-</strong> {e.instructions}</p>
                        <hr className='border outline-4 w-full' />
                        <p className='text-lg font-serif'><strong className='text-xl'>Catagory-</strong> {e.catagory}</p>
                    </ul>
                  )): ""}
            </div>
    </div>
  )
}

export default Search