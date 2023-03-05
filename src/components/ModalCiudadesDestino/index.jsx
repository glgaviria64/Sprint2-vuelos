import { useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import { vuelosApi } from '../../config/axios';

const ModalCiudadesDestino = (props) => {
  const { isModalDestinoOpen, closeModalDestino, formValues, setFormValues } =
    props;

  const [citys, setCitys] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const [inputSearch, setInputSearch] = useState('');

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
  };

  const filteredCitys = citys.filter((city) => {
    return city.nombre.toLowerCase().includes(inputSearch.toLowerCase());
  });

  const saveOriginCity = (selectedCity) => {
    setFormValues({
      ...formValues,
      destino: selectedCity,
    });

    closeModalDestino();
    setInputSearch('');
  };

  useEffect(() => {
    vuelosApi
      .get('/ciudades')
      .then((response) => {
        setisLoading(true);

        const { data } = response;
        setCitys(data);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);

  return (
    <Modal show={isModalDestinoOpen} onHide={closeModalDestino} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>¿A dónde viajas?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {isLoading ? (
          <section className='container'>
            <div className='row'>
              <div className='col'>
                <h1>Cargando...</h1>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className='my-3'>
              <input
                name='inputSearch'
                value={inputSearch}
                onChange={handleInputChange}
                type='text'
                placeholder='Buscar tu ciudad destino'
                className='form-control'
              />
            </div>

            <div className='list-group'>
              {filteredCitys.map((city) => {
                return (
                  <span
                    key={city.id}
                    onClick={() => saveOriginCity(city.nombre)}
                    className='list-group-item list-group-item-action'
                    role='button'
                  >
                    {city.nombre}
                  </span>
                );
              })}
            </div>
          </section>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalCiudadesDestino;
