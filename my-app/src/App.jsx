import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element={ <RootLayout/>} >
        <Route index element= { <Home /> }/>
        <Route path='projects' element = { <Projects /> } />
        <Route path='about' element = { <About /> } />
        <Route path='contact' element = { <Contact /> } />
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