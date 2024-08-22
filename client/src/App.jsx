import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Terms from './components/termsAndConditions';
import PageNotFound from './components/PageNotFound'
import './styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/policies' element={<Terms />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;