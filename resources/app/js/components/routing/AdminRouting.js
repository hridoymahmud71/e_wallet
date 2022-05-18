import React from 'react'
import { Route, Routes } from "react-router-dom";

import Dashboard from './../admin/pages/dashboard/Dashboard';
function AdminRouting() {

  const admin_prefix = '/admin';

  return (
    <Routes>
      <Route path={`${admin_prefix}/dashboard`} element={<Dashboard/>} />
    </Routes>
  )
}

export default AdminRouting;