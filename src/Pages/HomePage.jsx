import ReactPlayer from 'react-player'
import product from '../assets/img/videoProducto.17.10.mp4'
import antes from '../assets/img/antes.jpeg'
import despues from '../assets/img/despues.jpeg'
import { Link } from "react-router-dom"
import whatsapp from '../assets/img/whatsapp.png'
import instagram from '../assets/img/instagram96.png'

const HomePage = () => {
  return (
    <>
      <div className='md:flex md:justify-center'>
        <div className='md:mx-auto shadow rounded-xl w-3/6 pb-4 pt-4'>
          <h1
            className='font-mono text-3xl text-center'
          >Expertos en Detailing</h1>
          <br/>
          <p
            className='font-mono md:text-center md:text-xl'
          >Todo lo que estas buscando
            para mejorar la estética de tu vehículo.</p>
        </div>
      </div>
      <br/>
      <div className='mt-10 md:flex md:justify-center gap-2'>
        <div className='mt-1 '>
          <h1
            className='text-center text-xl font-mono'
          >Para ver nuestros trabrajos previos ve a {''}
          </h1> 
        </div>
        <div>
          <a 
            className=''
            href="https://instagram.com/cocchautos.ok?igshid=MzRlODBiNWFlZA==">
            <img 
              className="rounded hover:bg-gray-200 h-10 w-10"
              src={ instagram } 
              alt="Github"/>
          </a>
        </div>
      </div>
      <br/>
      <br/>
      <div>
        <h1
          className='text-center font-mono text-2xl'
        >Contamos con los siguientes servicios entre otros</h1>
        <div className='mt-5 md:flex md:justify-between md:container md:mx-auto'>
          <div className='w-96 h-60 shadow rounded-xl p-5'>
            <h1
              className='font-mono'
            >Tratamientos acrílicos, cerámicos y de vidrio líquido</h1>
            <img 
              className='w-40'
              alt="null" src="https://russcar.com/wp-content/uploads/2021/01/003-automobile-red.svg"/>
          </div>
          <div className='w-96 h-60 shadow rounded-xl p-5'>
            <h1
              className='font-mono'
            >Tratamiento de interiores de vehículos (tapizados)</h1>
            <img 
              className='w-40'
              alt="null" src="https://russcar.com/wp-content/uploads/2021/01/009-car-1-red.svg"/>
          </div>
          <div className='w-96 h-60 shadow rounded-xl p-5'>
            <h1
              className='font-mono'
            >Pulido de Opticas</h1>
            <img 
              className='w-40'
              alt="null" src="https://russcar.com/wp-content/uploads/2021/01/022-protection-red.svg"/>
          </div>
        </div>
        <div className='mt-10 flex justify-center gap-2'>
          <div>
            <h1
              className='text-center text-xl font-mono'
            >Para mas informacion puedes ponerte en contacto con nosotros {''}
            </h1> 
          </div>
          <div>
            <a 
              className='mr-2 '
              href="https://api.whatsapp.com/send?phone=1168386465">
              <img 
                className="rounded hover:bg-gray-200"
                src={ whatsapp } 
                alt="Github"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
