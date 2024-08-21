import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
