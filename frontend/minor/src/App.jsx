import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import ViewChart from './components/ViewChart'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/chart" element={<ViewChart/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
