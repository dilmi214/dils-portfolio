import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Projects from './pages/Projects'
import BeyondCode from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/Pg404'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element={ <RootLayout/>} >
        <Route index element= { <Home /> }/>
        <Route path='projects' element = { <Projects /> } />
        <Route path='beyond-code' element = { <BeyondCode /> } />
        <Route path='contact' element = { <Contact /> } />
        <Route path="*" element={ <PageNotFound />} /> 
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={ router } />
    </div>

  )
}

export default App