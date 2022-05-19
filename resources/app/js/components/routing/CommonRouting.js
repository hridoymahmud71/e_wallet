import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../common/pages/Login';
import Nomatch from '../common/pages/Nomatch';
import AdminRouting from './AdminRouting';
import UserRouting from './UserRouting';

function CommonRouting() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/user/*" element={<UserRouting/>} />
      <Route path="/admin/*" element={<AdminRouting/>} />
      <Route path="/404" element={<Nomatch/>} />
      <Route path="*" element={<Nomatch/>} />
    </Routes>
  )
}

export default CommonRouting;