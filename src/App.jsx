import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register';
import Terms from './components/termsAndConditions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/policies' element={<Terms />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
