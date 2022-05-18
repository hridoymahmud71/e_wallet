import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../common/pages/Login';
import Nomatch from '../common/pages/Nomatch';

function CommonRouting() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/404" element={<Nomatch/>} />
      <Route path="*" element={<Nomatch/>} />
    </Routes>
  )
}

export default CommonRouting;