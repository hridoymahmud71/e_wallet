import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './../user/pages/home/Home';
function UserRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default UserRouting;