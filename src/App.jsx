import React from 'react';
import Sidebar from './components/Sidebar'
import './App.css'
import DashboardMainContent from "./components/DashboardMainContent"


function App() {

  return (
      <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        {/* <Header/> */}
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
