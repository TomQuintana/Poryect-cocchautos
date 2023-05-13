import { Outlet } from "react-router-dom"

const MainPage = () => {
  return (
     <>
      <main className=''>
        <h1 className=" font-mono text-6xl pt-2 "
        >
          Cocchautos
        </h1>

        <Outlet />
      </main>
      </>
  )
}

export default MainPage
