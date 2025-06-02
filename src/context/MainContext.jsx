import React, { createContext, useEffect, useState } from 'react'


export const RecipeContext= createContext()
const MainContext = ({children}) => {
  const [info, setinfo] = useState([])
  const [editId, seteditId] = useState(null)
  const [selectRecipe, setselectRecipe] = useState(null)
  const [search, setsearch] = useState("")
  const [fav, setfav] = useState([])

  useEffect(() => {
  const saved= JSON.parse(localStorage.getItem("favourite"))
   setfav(saved)
  }, [])
  
  useEffect(() => {
  localStorage.setItem("favourite", JSON.stringify(fav));
  }, [fav]);

 
  const filters= info.filter(rec=>(
    [rec.title, rec.chefname, rec.catagory, rec.description, rec.instructions, rec.ingradients].some(field=> field.toLowerCase().includes(search.toLowerCase()))
  //  filter? rec.title.toLowerCase().includes(filter.title.toLowerCase()):false)
  ))
  

  

  return (
    <div>
      <RecipeContext.Provider value={{info,setinfo,editId,seteditId,selectRecipe, setselectRecipe,filters, search, setsearch,fav,setfav}}>
         {children}
      </RecipeContext.Provider>
    </div>
  )
}

export default MainContext