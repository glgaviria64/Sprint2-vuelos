import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../globalState/AppContext';

import { DateTime } from 'luxon';

const VueloEncontradoRedondo = () => {
  const { globalState } = useContext(AppContext);
  const { datosVueloRedondo } = globalState;

  const { datosDeIda, datosDeVuelta } = datosVueloRedondo;

  return (
    <>
      <div className='container pt-4'>
        <div className='row'>
          <div className='col col-md-6'>
            <Link to='/' className='btn btn-primary' role='button'>
              Regresar
            </Link>
          </div>
        </div>
      </div>

      <div className='container py-5 p-3'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-8  '>
            <section className='mb-3 bg-light rounded p-4 shadow-sm'>
              <div className='mb-3'>
                <h1 className='h1'>Vuelo de salida</h1>
                <span>
                  {DateTime.fromISO(datosDeIda.fecha)
                    .setLocale('es')
                    .toFormat("d 'de' MMMM 'de' y")}
                </span>
                <span className='d-block mt-1'>
                  De {datosDeIda.origen} a {datosDeIda.destino}
                </span>
              </div>

              <div className='mt-4'>
                <h3>Información del vuelo</h3>

                <div>
                  <span>{datosDeIda.horaArranque}</span>
                  <span className='mx-4'>
                    <span>{datosDeIda.duracion}</span>
                    {' -------- '}
                    <span>
                      {datosDeIda.hayEscala ? 'Hay escalas' : 'Sin escalas'}
                    </span>
                  </span>
                  <span>{datosDeIda.horaLlegada}</span>
                </div>
              </div>
            </section>

            <section className='bg-light rounded p-4 shadow-sm'>
              <div className='mb-3'>
                <h1 className='h1'>Vuelo de regreso</h1>
                <span>
                  {DateTime.fromISO(datosDeVuelta.fecha)
                    .setLocale('es')
                    .toFormat("d 'de' MMMM 'de' y")}
                </span>
                <span className='d-block mt-1'>
                  De {datosDeVuelta.origen} a {datosDeVuelta.destino}
                </span>
              </div>

              <div className='mt-4'>
                <h3>Información del vuelo</h3>

                <div>
                  <span>{datosDeVuelta.horaArranque}</span>
                  <span className='mx-4'>
                    <span>{datosDeVuelta.duracion}</span>
                    {' -------- '}
                    <span>
                      {datosDeVuelta.hayEscala ? 'Hay escalas' : 'Sin escalas'}
                    </span>
                  </span>
                  <span>{datosDeVuelta.horaLlegada}</span>
                </div>
              </div>
            </section>
          </div>

          <div className='col-12 mt-2 mt-sm-0 col-md-6 col-lg-4'>
            <section className='bg-light rounded  shadow-sm p-4'>
              <div className='d-flex justify-content-start'>
                <h5 className='h4'>Pasajeros</h5>
                <span className='d-inline-block ms-2  fw-bold h4'>
                  {datosVueloRedondo.pasajeros}
                </span>
              </div>

              <div className='mt-3 d-flex justify-content-start  '>
                <span className='d-inline-block text-uppercase '>
                  De{' '}
                  <span className='text-uppercase fw-bold'>
                    {datosDeVuelta.origen}
                  </span>{' '}
                  a
                </span>

                <span className='d-inline-block ms-2 text-uppercase fw-bold'>
                  {datosDeVuelta.destino}
                </span>
              </div>

              <div className='mt-3 mb-1'>
                <span>
                  <strong>Vuelo de ida:</strong>{' '}
                  {DateTime.fromISO(datosDeIda.fecha)
                    .setLocale('es')
                    .toFormat("d 'de' MMMM 'de' y")}
                </span>
              </div>

              <div className='mb-2'>
                <span>
                  <strong>Vuelo de regreso:</strong>{' '}
                  {DateTime.fromISO(datosDeVuelta.fecha)
                    .setLocale('es')
                    .toFormat("d 'de' MMMM 'de' y")}
                </span>
              </div>

              <div className='mt-4'>
                <span className='h4 fw-bold'>Costo del vuelo:</span>
                <span className='fw-bold  ms-2 h4'>
                  {datosVueloRedondo.precioTotal}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default VueloEncontradoRedondo;
