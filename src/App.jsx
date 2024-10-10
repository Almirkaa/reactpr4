import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Header} from './component/Header/Header'

import { Route, Routes } from 'react-router-dom'
import { HomePage } from './component/HomePage/HomePage'

function App() {
  return(
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/catalog' element={<HomePage/>}></Route>
      <Route path='/where' element={<HomePage/>}></Route>
    </Routes>
    </>
  )
}

export default App
