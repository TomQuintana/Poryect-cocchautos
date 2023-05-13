import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

const MainPage = () => {
  return (
     <>
      <main className='bg-indigo-600 w-full h-24'>
        <div>
          <h1 className=" font-mono text-6xl pt-2 text-white text-center"
          >
            Cocchautos
          </h1>  
        </div>
        <div className="flex justify-end gap-1 mt-3 font-bold hover:border-gray-300 md:text-lg">
          <Link 
            className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
            to="/">Home Page
          </Link>  
          <Link 
            className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
            to="/"> Contacto
          </Link>  
          <Link 
            className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
            to="/">Servicio
          </Link>  
        </div>
        <Outlet />
      </main>
    </>
  )
}

export default MainPage
