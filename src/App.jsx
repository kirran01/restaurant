import './App.css'
import Home from './pages/home'
import Events from './pages/events'
import Menu from './pages/menu'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav';

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
