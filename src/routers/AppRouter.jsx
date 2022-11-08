import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const AppRouter = () => {
        return (
          <BrowserRouter>
            <Routes>
      
              <Route path='/' exact element={<LandingPage/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
      
            </Routes>
          </BrowserRouter>
        )
      }