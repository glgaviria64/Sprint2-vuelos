const PagoSeguro = () => {
  return (
    <section className='container mt-5 p-4'>
      <h3 className='mb-3'>Pago seguro</h3>

      <section className='row '>
        <article className='col-12 col-md-5  p-4 shadow rounded'>
          <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>

          <div className='d-flex flex-wrap justify-content-between'>
            <img
              className='m-2'
              width='70'
              src='https://img.icons8.com/color/512/amex.png'
              alt='Logo amex'
              style={{
                objectFit: 'contain',
              }}
            />

            <img
              className='m-2'
              width='70'
              src='https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0033/7299/Como_retirar_dinero_de_PayPal_en_Colombia.png?1555502328'
              alt='Logo paypal'
              style={{
                objectFit: 'contain',
              }}
            />

            <img
              className='m-2'
              width='70'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Logo_de_Invex.svg/2560px-Logo_de_Invex.svg.png'
              alt='Logo invex'
              style={{
                objectFit: 'contain',
              }}
            />

            <img
              className='m-2'
              width='70'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png'
              alt='Logo mastercard'
              style={{
                objectFit: 'contain',
              }}
            />

            <img
              className='m-2'
              width='70'
              src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
              alt='Logo visa'
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </article>

        <article className='col-12 col-md-5 mt-4 mt-md-0 ms-md-4 p-4 shadow rounded'>
          <p>Efectivo en cualquiera de las sucursales participantes</p>

          <div className='d-flex flex-wrap justify-content-between'>
            <img
              className='m-2'
              width='70'
              src='https://iconape.com/wp-content/png_logo_vector/oxxo-logo.png'
              alt='Logo oxxo'
              style={{
                objectFit: 'contain',
              }}
            />

            <img
              className='m-2'
              width='70'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png'
              alt='Logo walmart'
              style={{
                objectFit: 'contain',
              }}
            />

            <img
              className='m-2'
              width='70'
              src='https://iconape.com/wp-content/png_logo_vector/oxxo-logo.png'
              alt='Logo oxxo'
              style={{
                objectFit: 'contain',
              }}
            />

            <img
              className='m-2'
              width='70'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png'
              alt='Logo walmart'
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </article>
      </section>
    </section>
  );
};

export default PagoSeguro;
