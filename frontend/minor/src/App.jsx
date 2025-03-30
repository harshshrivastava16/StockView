import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import ViewChart from './components/ViewChart'
import Chartss from './components/Chartss'
import Graph from './components/Graph'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/chart" element={<ViewChart/>}/>
        <Route path="/chartss" element={<Chartss/>}/>
        <Route path="/graphs" element={<Graph/>}/>

      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
