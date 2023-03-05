import { Outlet, useNavigate } from 'react-router-dom';

import './styles.css';

import avionImg from '../../assets/images/avion.jpg';
import PagoSeguro from '../../components/PagoSeguro';
import ServiciosDisponibles from '../../components/ServiciosDisponibles';

const Home = () => {
  const navigate = useNavigate();

  const cambiarTipoDeVuelo = (route) => {
    navigate(route);
  };

  return (
    <section style={{ minHeight: '100vh', paddingBottom: '70px' }}>
      <div className='container mt-5'>
        <div className='vuelos'>
          <div className='vuelo-form rounded py-3'>
            <div className='container'>
              <h1 className='h2'>
                Busca un nuevo destino y comienza una aventura.
              </h1>
              <p>
                Descubre vuelos al mejor precio y perfectos para cualquier
                viaje.
              </p>
            </div>

            <div className='planeBackComponents'>
              <div className='btn-group'>
                <input
                  type='radio'
                  className='btn-check'
                  name='btnradio'
                  id='btnradio1'
                ></input>
                <label
                  onClick={() => cambiarTipoDeVuelo('/buscar-viaje-redondo')}
                  className='btn btn-outline-primary'
                  htmlFor='btnradio1'
                >
                  Viaje redondo
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  name='btnradio'
                  id='btnradio2'
                ></input>
                <label
                  onClick={() => cambiarTipoDeVuelo('/buscar-viaje-sencillo')}
                  className='btn btn-outline-primary'
                  htmlFor='btnradio2'
                >
                  Viaje sencillo
                </label>
              </div>
            </div>

            <Outlet />
          </div>

          <div className='vuelo-img'>
            <img src={avionImg} alt='' className='rounded img-fluid' />
          </div>
        </div>
      </div>

      <PagoSeguro />
      <ServiciosDisponibles />
    </section>
  );
};

export default Home;
