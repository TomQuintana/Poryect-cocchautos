import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage'
import HomePage from './Pages/HomePage'
import Turnos from './Pages/Turnos'
import Servicios from './Pages/Servicios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path='contacto' element={<Turnos/>} />
          <Route path='servicios' element={<Servicios/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
