import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import whatsapp from '../assets/img/whatsapp.png'

const MainPage = () => {
  return (
     <>
      <main className='bg-indigo-600 w-full h-32'>
        <div>
          <h1 className="font-bold text-8xl pt-2 text-white text-center"
          >
            Cocchautos
          </h1>  
        </div>
        <div className="flex justify-between">
          <div 
            className="mt-6 p-2 flex justify-start hover:border-gray-300 md:text-lg"
          >
            <a 
              className='mr-2 '
              href="https://api.whatsapp.com/send?phone=1168386465">
              <img 
                className="rounded hover:bg-gray-200"
                src={ whatsapp } 
                alt="Github"/>
            </a>
          </div>
          <div className="flex justify-end gap-1 mt-3 font-bold hover:border-gray-300 md:text-lg">
            <Link 
              className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
              to="/">Home Page
            </Link>  
            <Link 
              className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
              to="/contacto">Reserva tu Turno 
            </Link>  
            <Link 
              className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
              to="/servicios">Servicio
            </Link>  
          </div>  
        </div>
        <Outlet />
      </main>
    </>
  )
}

export default MainPage
