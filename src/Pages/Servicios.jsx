import asiento from '../assets/img/asiento100.png'
import servicioDerecha from '../assets/img/servicioCoche96.png'
import limpiezaOpticas from '../assets/img/limpiezaAutos64.png'
import limpiezaBrillantado from '../assets/img/limpiezaAutos100.png'
import limpiezaAuto from '../assets/img/servicioCoche100.png'
import pulido from '../assets/img/polisher.png'

const Servicios = () => {
  return (
    <>
      <h1
        className='text-center font-mono text-xl md:text-2xl'
      >Contamos con los siguientes servicios</h1>
      <div className='mt-5 md:flex md:justify-between container mx-auto'>
        <div className='flex justify-center mb-6'>
          <div className=' w-96 md:h-60 shadow rounded-xl p-5'>
            <h1
              className='font-mono'
            >Tratamientos acrílicos, cerámicos y de vidrio líquido</h1>
            <div className='flex justify-center'>
              <img 
                className='md:w-32'
                alt="null" src={servicioDerecha}/>  
            </div>
          </div>  
        </div>
        <div className='flex justify-center mb-6'>
          <div className='w-96 md:h-60 shadow rounded-xl p-5 items-center'>
            <h1
              className='font-mono'
            >Tratamiento de interiores de vehículos (tapizados)</h1>
            <div className='flex justify-center'>
              <img 
                className='md:w-32'
                alt="null" src={asiento}/>  
            </div>
          </div>  
        </div>
        <div className='flex justify-center'>
          <div className='w-96 md:h-60 shadow rounded-xl p-5 mb-6'>
            <h1
              className='font-mono text-center'
            >Pulido de Opticas</h1>
            <div className='flex justify-center'>
              <img 
                className='w-24 '
                alt="null" src={limpiezaOpticas}/>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 md:flex md:justify-between container mx-auto mb-5'>
        <div className='flex justify-center mb-6'>
          <div className='w-96 md:h-60 shadow rounded-xl p-5'>
            <h1
              className='font-mono text-center'
            >Pulido en tres Pasos</h1>
            <div className='flex justify-center'>
              <img 
                className='w-28'
                alt="null" src={pulido}/>  
            </div>
          </div>  
        </div>
        <div className='flex justify-center mb-6'>
          <div className='w-96 md:h-60 shadow rounded-xl p-5'>
            <h1
              className='font-mono text-center'
            >Abrillantado</h1>
            <div className='flex justify-center'>
              <img 
                className='w-32 mt-6'
                alt="null" src={limpiezaBrillantado}/>
            </div>
          </div>
        </div>
        <div className='flex justify-center mb-6'>
          <div className='w-96 md:h-60 shadow rounded-xl p-5'>
            <h1
              className='font-mono'
            >Restauración y pintura llantas 
            </h1>
            <div className='flex justify-center'>
              <img 
                className='w-32'
                alt="null" src={limpiezaAuto}/>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Servicios
