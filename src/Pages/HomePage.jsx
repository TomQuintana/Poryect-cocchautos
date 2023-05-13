import ReactPlayer from 'react-player'
import product from '../assets/img/videoProducto.17.10.mp4'
import antes from '../assets/img/antes.jpeg'
import despues from '../assets/img/despues.jpeg'


const HomePage = () => {
  return (
    <>
      <div className='mb-8'>
        <h1
          className='text-center font-mono text-xl'
        >Algunos Trabajos Realizados</h1>
      </div>
      <div className="mt-10 flex justify-center md:w-full">
        <div className=' flex justify-center w-3/6'>
          <div className='shadow rounded-xl'>
            <ReactPlayer
              url={product}
              controls
              loop
            />
          </div>
        </div>
      </div>
      <div className='md:container mx-auto items-center flex justify-center gap-28 mt-10 '>
        <div className='md:w-80 shadow rounded-xl'>
          <h1 className='text-center font-mono text-2xl'>Antes</h1>
          <img src={ antes } alt="" />
        </div>
        <div className='w-80 shadow rounded-xl font-mono text-2xl'>
          <h1 className='text-center'>Despues</h1>
          <img src={ despues  }alt="" />
        </div>
      </div>
    </>
  )
}

export default HomePage
