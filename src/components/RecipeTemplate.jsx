import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RecipeContext } from '../context/MainContext'


const RecipeTemplate = (props) => {
  const navigate= useNavigate()
  const {info, setinfo,selectRecipe, setselectRecipe}= useContext(RecipeContext)
  var {title,chefname, image,description, instructions, ingradients, catagory,id}= props.recipe
  
  const deleteCard=(id)=>{
    const recipe= info.filter(rec=>rec.id !== id)
    setinfo(recipe)
  }

  const editCard=(id)=>{
    const selected= info.find(rec=>rec.id ===id)
    setselectRecipe(selected)
    navigate("/recipes/update") 
    console.log(selected);
  //  setinfo(info)
  }
  


  return (
    <div className='w-full flex flex-col items-center gap-1.5 h-full'>
      <Link className="w-fit h-fit duration-200 hover:scale-95 font-[montserrat] p-5 rounded-xl flex flex-col text-center items-center bg-black text-white"
       to={`/recipes/details:${id}`}>
        <img className='w-44 h-44 rounded-full' src={image} alt="error404" />
        <h3 className='p-1 font-serif '><strong className='text-xl text-gray-400'>TITLE:</strong> {title}</h3>
        <p className='p-1 font-serif text-sm '> <strong className='underline'>CHEF NAME: </strong> {chefname}</p>
        <p className='p-1 font-serif text-sm'> <strong className='underline'>DESCRIPTION:</strong> {description}</p>
        <p className='p-1 font-serif  text-sm'><strong className='underline'>INSTRUCTIONS:</strong> {instructions}</p>
        <p className='p-1 font-serif  text-sm'><strong className='underline'>INGRADIENTS: </strong> {ingradients}</p>
        <p className='p-1 font-serif text-sm'><strong className='underline'>CATAGORY:</strong> {catagory}</p>
      </Link>
      <div className='flex justify-around w-full'>
        <button onClick={()=>deleteCard(id)} className='bg-green-600 active:bg-red-700 rounded px-3 py-1 hover:bg-orange-900 text-white font-semibold  w-1/3'>Delete</button>
        
        <button onClick={()=>editCard(id)} className='bg-blue-600 hover:bg-rose-700 active:bg-orange-700 rounded px-3 py-1 text-white font-semibold  w-1/2'>Edit</button>
      </div>
    </div>
  )
}

export default RecipeTemplate