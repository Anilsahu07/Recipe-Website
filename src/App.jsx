import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Router from './routes/Router'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
// import RecipeTemplate from './components/RecipeTemplate'


const App = () => {
  const [menu, setmenu] = useState(false)
  const navigate= useNavigate()
  const menuRef = useRef(null)

 const navigateSearch=()=>{
  navigate("/recipes/search")
 }


 const toggleMenu=()=>{
  setmenu(!menu)
 }


 useEffect(() => {
  if (menu) {
     gsap.to(menuRef.current,{
      y:10,
      duration:0.5,
      background:"black"
      // background:"black"
    })
   
  }
 }, [menu])
 
 


  return (
    <div className=' flex flex-col items-end box-border'>
      <div className=' w-full h-fit bg-black flex items-center justify-around pt-36 py-3'>
        <h1 className='text-white text-6xl font-bold flex justify-center items-center'>Food <small className='text-orange-500 text-6xl'>.</small></h1>
        <div className=''>
         <Navbar />
        </div>
        
        <div className=' flex items-center gap-4'>
          <i onClick={navigateSearch}  className="hover:text-orange-600 font-bold text-3xl ri-search-line text-white flex active:scale-90">
          </i>
          <i className="hover:text-green-600 font-bold text-3xl ri-price-tag-line text-white active:scale-90 md:flex hidden"></i>
          <i className="hover:text-yellow-600 font-bold text-3xl ri-user-3-line text-white active:scale-90 md:flex hidden"></i>
          <div className=''>
          <button onClick={toggleMenu}>{menu? <i className="ri-menu-3-line text-3xl font-bold text-white transition-all duration-100"></i>:<i className=" font-bold text-3xl ri-menu-2-line text-white active:scale-90 md:hidden flex"></i>}</button>

          </div>
        </div> 
      </div>
      {menu&&
          <div ref={menuRef} className='flex flex-col gap-2 px-6 py-6  w-fit items-center'>
             <Link className='font-[montserrat] font-semibold text-white' to="/">HOME</Link>
             <Link className='font-[montserrat] font-semibold text-white' to="/recipes/about">ABOUT</Link>
             <Link className='font-[montserrat] font-semibold text-red-600 hover:text-white' to="/recipes/create">CREATE</Link>
             <Link className='font-[montserrat] font-semibold text-white' to="/favourite">FAVOURITE</Link>
             <Link className='font-[montserrat] font-semibold text-white' to="*">PAGE NOT FOUND</Link>
             <Link className='font-[montserrat] font-semibold text-white' to="/recipes">RECIPES</Link>
             <Link className='font-[montserrat] font-semibold text-white' to="/recipes/update">UPDATE</Link>
          </div>
          }

      <Router/>
        <ToastContainer position='top-center' autoClose={2000}/>
    </div>
  )
}

export default App