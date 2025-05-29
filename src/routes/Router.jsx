import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
import Create from "../pages/Create";
import Update from '../pages/Update';
import Recipes from "../pages/Recipes";
import SingleRecipe from '../pages/SingleRecipe';
import Favourite from '../pages/Favourite';
import Search from '../pages/Search';

const Router = () => {
  return (
    <div className='mt-9'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/create" element={<Create />} />
      <Route path="/recipes/update" element={<Update />} />
      <Route path="/recipes/singlerecipe" element={<SingleRecipe />} />
      <Route path='/recipes/search' element={<Search/>}/>
      <Route path="/favourite" element={<Favourite />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  
  );
};

export default Router;
