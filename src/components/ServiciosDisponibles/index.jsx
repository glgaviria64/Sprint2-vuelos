const ServiciosDisponibles = () => {
  return (
    <section className='container mt-4 p-4'>
      <h3 className='mb-3'>Servicios disponibles</h3>

      <section className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4'>
        <div className='col'>
          <article className='px-4 py-5  shadow'>
            <div
              className='text-center'
              style={{
                backgroundColor: 'purple',
                borderRadius: '50%',
                width: '100px',
                height: '40px',
                padding: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}
            >
              <img
                src='https://img.icons8.com/small/512/bus2.png'
                width='50'
                alt='Imagen de un auto'
                className='white'
              />
            </div>

            <div className='card-body text-center'>
              <h5 className='card-title my-3'>Transporte</h5>
              <p className='card-text'>Renta de auto o reserva un shuttle.</p>
            </div>
          </article>
        </div>
        <div className='col'>
          <article className='px-4 py-5  shadow'>
            <div
              className='text-center'
              style={{
                backgroundColor: 'purple',
                borderRadius: '50%',
                width: '100px',
                height: '40px',
                padding: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/3076/3076720.png'
                width='50'
                alt='Imagen de un avión'
              />
            </div>

            <div className='card-body text-center'>
              <h5 className='card-title my-3'>Vuelos + Hoteles</h5>
              <p className='card-text'>
                Encuentra las mejores ofertas para tu viaje.
              </p>
            </div>
          </article>
        </div>
        <div className='col'>
          <article className='px-4 py-5  shadow'>
            <div
              className='text-center'
              style={{
                backgroundColor: 'purple',
                borderRadius: '50%',
                width: '100px',
                height: '40px',
                padding: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/5874/5874704.png'
                width='50'
                alt='Imagen de personas'
              />
            </div>

            <div className='card-body text-center'>
              <h5 className='card-title my-3'>Grupos</h5>
              <p className='card-text'>
                Obtén una cotización para varias personas.
              </p>
            </div>
          </article>
        </div>
        <div className='col'>
          <article className='px-4 py-5  shadow'>
            <div
              className='text-center'
              style={{
                backgroundColor: 'purple',
                borderRadius: '50%',
                width: '100px',
                height: '40px',
                padding: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/2958/2958167.png'
                width='50'
                alt='Imagen de una persona en una cama'
              />
            </div>

            <div className='card-body text-center'>
              <h5 className='card-title my-3'>Hoteles</h5>
              <p className='card-text'>
                Reserva tu habitación desde cualquier lugar.
              </p>
            </div>
          </article>
        </div>
        <div className='col'>
          <article className='px-4 py-5  shadow'>
            <div
              className='text-center'
              style={{
                backgroundColor: 'purple',
                borderRadius: '50%',
                width: '100px',
                height: '40px',
                padding: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/2630/2630085.png'
                width='50'
                alt='Imagen de una caja'
              />
            </div>

            <div className='card-body text-center'>
              <h5 className='card-title my-3'>Carga</h5>
              <p className='card-text'>
                Contamos con servicio de carga y mensajería.
              </p>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default ServiciosDisponibles;
