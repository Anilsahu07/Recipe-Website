import React, { useContext, useEffect, useState } from 'react'
import { RecipeContext } from '../context/MainContext'
import { useParams } from 'react-router-dom'


const About = () => {
   const {info}= useContext(RecipeContext)
    const {id}=useParams()
   const [value, setvalue] = useState(null)

    const about= info.find(rec=>rec.id ===id)
   
    if (!about) {
     return <h1>Nothing to Show</h1>
    }
  return (
    <div className='w-full h-96 flex justify-center items-center'>
        <h1 className='font-mono font-semibold text-3xl'>Sorry Guys!! No Data Found 😂</h1>
    </div>
  )
}

export default About