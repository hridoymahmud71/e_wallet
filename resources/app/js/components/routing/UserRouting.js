import React from 'react'
import { Route, Routes } from "react-router-dom";
import Transfer from '../user/pages/Transfer';
import Settings from '../user/pages/Settings';
import Home from './../user/pages/home/Home';
import Nomatch from "../common/pages/Nomatch";
function UserRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/transfer" element={<Transfer/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/404" element={<Nomatch />} />
      <Route path="*" element={<Nomatch />} />
    </Routes>
  )
}

export default UserRouting;