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
      duration:0.5,
      top:60,
      opacity:1,
      background:"whitesmoke",
      // ease:"bounce"
      // background:"black"
    })
   
  }
 }, [menu])
 
 


  return (
    <div className='w-screen flex flex-col box-border items-end'>
      <div className='w-full bg-black flex items-center justify-around lg:pt-36 lg:py-3 px-0 py-4 '>
        <h1 className='text-white lg:text-6xl text-4xl font-bold flex justify-center items-center'><small className='text-orange-600 lg:text-6xl text-4xl font-bold flex justify-center items-center'>F</small>ood <small className='text-orange-500 lg:text-6xl text-4xl'>.</small></h1>
        <div className=''>
         <Navbar />
        </div>
        
        <div className=' flex items-center gap-4'>
          <i onClick={navigateSearch}  className="hover:text-orange-600 font-bold lg:text-3xl ri-search-line text-white flex active:scale-90 text-2xl">
          </i>
          <i className="hover:text-green-600 font-bold text-3xl ri-price-tag-line text-white active:scale-90 md:flex hidden"></i>
          <i className="hover:text-yellow-600 font-bold text-3xl ri-user-3-line text-white active:scale-90 md:flex hidden"></i>
          <div className=''>
          <button onClick={toggleMenu}>{menu? <i className="ri-menu-3-line text-3xl font-bold text-white transition-all duration-100"></i>:<i className=" font-bold text-3xl ri-menu-2-line text-white active:scale-90 md:hidden flex"></i>}</button>

          </div>
        </div> 
      </div>
      {menu&&
          <div ref={menuRef} className='w-1/2 flex flex-col gap-3 px-6 py-6 absolute top-[7.3%] '>
             <Link className='font-[montserrat] text-sm font-light text-black ' to="/">HOME</Link>
             <Link className='font-[montserrat] text-sm font-light text-black' to="/recipes/about">ABOUT</Link>
             <Link className='font-[montserrat] text-sm font-semibold text-red-600 hover:text-white' to="/recipes/create">CREATE</Link>
             <Link className='font-[montserrat] text-sm font-light text-black' to="/favourite">FAVOURITE</Link>
             <Link className='font-[montserrat] text-sm font-light text-black' to="*">PAGE NOT FOUND</Link>
             <Link className='font-[montserrat] text-sm font-light text-black' to="/recipes">RECIPES</Link>
             <Link className='font-[montserrat] text-sm font-light text-black' to="/recipes/update">UPDATE</Link>
          </div>
          }

      <Router/>
        <ToastContainer position='top-center' autoClose={2000}/>
    </div>
  )
}

export default App