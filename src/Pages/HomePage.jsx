import ReactPlayer from 'react-player'
import product from '../assets/img/videoProducto.17.10.mp4'

const HomePage = () => {
  return (
    <div className="mt-10 md:w-full">
      <div className='mb-8'>
        <h1
          className='text-center font-mono text-xl'
        >Algunos Trabajos Realizados</h1>
      </div>
            <div className='flex justify-center'>
        <ReactPlayer
          url={product}
          controls
          loop
        /> 
      </div>

    </div>
  )
}

export default HomePage
