import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import whatsapp96 from '../assets/img/whatsapp96.png'
import instagram from '../assets/img/instagram96.png'

const MainPage = () => {
  return (
     <>
      <main className='md:w-full h-12 md:h-32'>
        <div className="bg-gray-100 shadow rounded-2xl mt-2">
          <div className="flex justify-center">
            <div>
              <h1 className="uppercase font-semibold text-3xl md:text-8xl text-center">
                cocch autos
              </h1>  
              <p
                className="text-center font-mono text-xl md:text-3xl"
              >Car Deltailing</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div 
            className="md:mt-6 p-2 flex justify-start hover:border-gray-300 md:text-lg"
          >
            <a 
              className='mr-2 '
              href="https://api.whatsapp.com/send?phone=1157824382">
              <img 
                className="rounded hover:bg-gray-200 w-10 h-10"
                src={ whatsapp96 } 
                alt="Github"/>
            </a>
            <a 
              className='mr-2 '
              href="https://instagram.com/cocchautos.ok?igshid=MzRlODBiNWFlZA==">
              <img 
                className="rounded hover:bg-gray-200 w-10 h-10"
                src={ instagram } 
                alt="Github"/>
            </a>
          </div>
          <div className="flex justify-end md:gap-1 md:mt-3 font-bold hover:border-gray-300 text-sm md:text-lg">
            <Link 
              className="block text-center my-5 ml-2 text-gray-500 md:px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
              to="/">Home Page
            </Link>  
            <Link 
              className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
              to="/servicios">Servicios
            </Link>  
          </div>  
        </div>
        <Outlet />
      </main>
    </>
  )
}

export default MainPage
