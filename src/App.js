import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import PageNotFound from './page/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;