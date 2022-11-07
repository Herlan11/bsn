// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blogs from './components/Blogs';
import CreateNewBlog from './components/NewBlog';
import EditBlog from './components/EditBlog';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Blogs/>} path="/blogs/"/>"
          <Route element={<CreateNewBlog/>} path="/newblogs/"/>"
          <Route element={<EditBlog/>} path="/editblogs/:id"/>"
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
