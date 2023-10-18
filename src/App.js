import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import { Edit } from './Edit'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='edit' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    )
}
