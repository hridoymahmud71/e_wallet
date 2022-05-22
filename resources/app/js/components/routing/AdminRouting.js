import React from 'react'
import { Route, Routes } from "react-router-dom";

import Dashboard from './../admin/pages/dashboard/Dashboard';
import Nomatch from "../common/pages/Nomatch";

function AdminRouting() {


  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/404" element={<Nomatch />} />
      <Route path="*" element={<Nomatch />} />
    </Routes>
  )
}

export default AdminRouting;