import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RecipeContext } from '../context/MainContext'
import { toast } from 'react-toastify'



const RecipeTemplate = (props) => {
  const navigate= useNavigate()
  const {info, setinfo,setselectRecipe,fav,setfav,seteditId}= useContext(RecipeContext)
  const {title,chefname, image,description, instructions, ingradients, catagory,id}= props.recipe
  
  const deleteCard=(id)=>{
    const recipe= info.filter(rec=>rec.id !== id)
    setinfo(recipe)
    toast.success("Recipe Deleted")
  }

  const editCard=(id)=>{
    const selected= info.find(rec=>rec.id ===id)
    setselectRecipe(selected)
    navigate("/recipes/update") 
  //  setinfo(info)
  }

  const favRecipe=()=>{
   const recipe= info.find(r=> r.id ===id)
    setfav([...fav, recipe])
  }
  
  const unFavRecipe=()=>{
    const recipe= fav.filter(r=>r.id !=id)
    setfav(recipe)
   
  }
  
  
  return (
    <div className='flex flex-col items-center gap-1 h-full'>
      <Link className="max-w-fit duration-200 hover:scale-90 hover:bg-orange-100 font-[montserrat] p-5 rounded-xl flex flex-col text-center items-center gap-2 h-fit outline">
        <img className='w-52 h-52 rounded-full border object-cover hover:outline' src={image} alt="error404" />

        {fav.find((e)=>e.id ===id)?(<i onClick={unFavRecipe} className="mt-3 ri-heart-fill text-5xl text-red-500"></i>):(<i onClick={favRecipe}   className="mt-3 ri-heart-3-line text-5xl text-red-500"></i>)}
       
        <h3 className=' font-bold text-4xl'><strong className='text-xl text-gray-400'></strong> {title.toUpperCase()}</h3>
        <p className=' font-[poppins] text-3xl mt-2'> <strong className='underline'></strong> {chefname}</p>
        <p className=' font-serif font-semibold text-2xl'><strong className='underline'></strong> {catagory}</p>
         <hr className='border outline-4 w-full' />
        <p className=' font-[montserrat] text-lg'> <strong className='underline'></strong> {description}</p>
        <hr className='border outline-4 w-full' />
        <p className=' font-[montserrat]  text-md'><strong className='underline'></strong> {instructions}</p>
         <hr className='border outline-4 w-full' />
        <p className=' font-[montserrat]  text-md'><strong className='underline'></strong> {ingradients}</p>
      </Link>
      <div className='flex justify-center gap-3 w-full'>
        <button onClick={()=>deleteCard(id)} className='bg-green-500 active:bg-red-700 rounded px-2 py-2 hover:bg-orange-900 text-white font-semibold'>Delete</button>
        
        <button onClick={()=>editCard(id)} className='bg-blue-500 hover:bg-rose-700 active:bg-orange-700 rounded px-2 py-2 text-white font-semibold'>Edit !!</button>

        <Link to={`/recipes/about/${id}`} className=' active:text-sky-700 rounded px-2 py-2 text-blue-500 font-semibold'>
          <button >More...</button>
        </Link>
      </div>

    </div>
  )
}

export default RecipeTemplate