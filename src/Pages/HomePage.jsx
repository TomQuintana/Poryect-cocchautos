import ReactPlayer from 'react-player'
import product from '../assets/img/videoProducto.17.10.mp4'
import antes from '../assets/img/antes.jpeg'
import despues from '../assets/img/despues.jpeg'
import { Link } from "react-router-dom"
import whatsapp96 from '../assets/img/whatsapp96.png'
import instagram from '../assets/img/instagram96.png'
import servicioDerecha from '../assets/img/servicioCoche96.png'
import limpiezaBrillantado from '../assets/img/limpiezaAutos64.png'
import asiento from '../assets/img/asiento100.png'

const HomePage = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='md:mx-auto shadow rounded-xl w-96 md:w-3/6 pb-4 pt-4'>
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
      <div className='mt-10 md:flex md:justify-center gap-2'>
        <div className='md:mt-1'>
          <h1
            className='text-center text-xl font-mono'
          >Para ver nuestros trabrajos previos ve a {''}
          </h1> 
        </div>
        <div className='flex justify-center'>
          <a 
            className=''
            href="https://instagram.com/cocchautos.ok?igshid=MzRlODBiNWFlZA==">
            <img 
              className="rounded hover:bg-gray-200 h-10 w-10 mt-2"
              src={ instagram } 
              alt="Github"/>
          </a>
        </div>
      </div>
      <br/>
      <div>
        <h1
          className='text-center font-mono text-2xl'
        >Contamos con los siguientes servicios entre otros</h1>
        <div className='mt-5 md:flex md:justify-between md:container md:mx-auto'>
          <div className='flex justify-center'>
            <div className='w-96 md:h-60 shadow rounded-xl p-5 items-center mb-6'>
              <h1
                className='font-mono text-center'
              >Tratamientos acrílicos, cerámicos y de vidrio líquido</h1>
              <div className='flex justify-center'>
                <img 
                  className='h-32 md:w-40 '
                  alt="null" src={servicioDerecha}/>
              </div>
               </div>  
          </div>
          <div className='flex justify-center'>
            <div className='w-96 md:h-60 shadow rounded-xl p-5 items-center mb-6'>
              <h1
                className='font-mono text-center'
              >Pulido de Opticas</h1>
              <div className='flex justify-center'>
                <img 
                  className='w-24 mt-6'
                  alt="null" src={limpiezaBrillantado}/>
              </div>
            </div>  
          </div>
          <div className='flex justify-center'>
            <div className='w-96 h-60 shadow rounded-xl p-5 items-center mb-6'>
              <h1
                className='font-mono text-center'
              >Tratamiento de interiores de vehículos (tapizados)</h1>
              <div className='flex justify-center'>
                <img 
                  className='md:h-28 md:w-28 mt-6 items-center'
                  alt="null" src={asiento}/>
              </div>
            </div>  
          </div>
        </div>
        <div className='mt-4 md:flex md:justify-center gap-2'>
          <div>
            <h1
              className='text-center text-xl font-mono'
            >Para reservar un turno puedes ponerte en contacto con nosotros {''}
            </h1> 
          </div>
          <div className='flex justify-center mt-2 mb-10'>
            <a 
              className='mr-2'
              href="https://api.whatsapp.com/send?phone=1168386465">
              <img 
                className="rounded hover:bg-gray-200 mb-3 h-10 w-10"
                src={ whatsapp96 } 
                alt="Github"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
