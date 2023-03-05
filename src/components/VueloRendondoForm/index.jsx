import { useContext, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';

import useModalState from '../../hooks/useModalState';
import ModalCiudadesDestino from '../ModalCiudadesDestino';
import ModalCiudadesOrigen from '../ModalCiudadesOrigen';

import { vuelosApi } from '../../config/axios';
import { useNavigate } from 'react-router-dom';
import { showErrorAlert, showSuccessAlert } from '../../utils/alerts';

import AppContext from '../../globalState/AppContext';

const initialForm = {
  origen: null,
  destino: null,
  fechaSalida: null,
  fechaRegreso: null,
  pasajeros: 1,
};

const VueloRedondoForm = () => {
  const navigate = useNavigate();
  const { establacerDatosVuelosRedondo } = useContext(AppContext);

  const fechaSalidaRef = useRef(null);
  const fechaRegresoRef = useRef(null);

  const [formValues, setFormValues] = useState(initialForm);

  const [isModalOrigenOpen, openModalOrigen, closeModalOrigen] =
    useModalState();

  const [isModalDestinoOpen, openModalDestino, closeModalDestino] =
    useModalState();

  const setOneFormValue = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const clearFormValues = () => {
    setFormValues(initialForm);
    fechaSalidaRef.current.value = '';
    fechaRegresoRef.current.value = '';

    showSuccessAlert('Campos limpiados');
  };

  const buscarVuelo = () => {
    const { origen, destino, fechaSalida, fechaRegreso } = formValues;

    if (!origen || !destino || !fechaSalida || !fechaRegreso) {
      showErrorAlert('Error', 'Debes llenar los campos primero');
      return;
    }

    // http://localhost:3004/vuelosRedondos?datosDeIda.origen=Cartagena&?datosDeIda.destino=Cartagena&?datosDeIda.fecha=2023-03-16&?datosDeVuelta.fecha=2023-03-16&pasajeros=2
    const uriBase = '/vuelosRedondos';
    const cityParam1 = `?datosDeIda.origen=${formValues.origen}`;
    const cityParam2 = `&?datosDeIda.destino=${formValues.destino}`;
    const dateParam1 = `&?datosDeIda.fecha=${formValues.fechaSalida}`;
    const dateParam2 = `&?datosDeVuelta.fecha=${formValues.fechaRegreso}`;
    const pasajerosParam = `&pasajeros=${Number(formValues.pasajeros)}`;

    const query = `${uriBase}${cityParam1}${cityParam2}${dateParam1}${dateParam2}${pasajerosParam}`;

    vuelosApi.get(query).then((response) => {
      const { data } = response;

      if (data.length > 0) {
        const vuelo = data[0];
        establacerDatosVuelosRedondo(vuelo);
        navigate('/vuelos');
      } else {
        showErrorAlert('Lo siento', 'No hay vuelos para ti');
      }
    });
  };

  return (
    <>
      <form className='container p-3' onSubmit={buscarVuelo}>
        <div className='container my-3'>
          <div className='row align-items-start'>
            <div className='col col-lg-6'>
              <button
                onClick={openModalOrigen}
                type='button'
                className='btn btn-light w-100'
              >
                {formValues.origen ? (
                  <div>
                    <span>Origen:</span> <strong>{formValues.origen}</strong>
                  </div>
                ) : (
                  'Seleccione su origen'
                )}
              </button>
            </div>

            <div className='col col-log-6'>
              <button
                type='button'
                className='btn btn-light w-100'
                onClick={openModalDestino}
              >
                {formValues.destino ? (
                  <div>
                    <span>Destino:</span> <strong>{formValues.destino}</strong>
                  </div>
                ) : (
                  ' Seleccione un destino'
                )}
              </button>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col '>
            <label htmlFor='salida'>Salida</label>
            <Form.Control
              type='date'
              name='fechaSalida'
              role='button'
              ref={fechaSalidaRef}
              onChange={(e) => {
                setOneFormValue(e.target.name, fechaSalidaRef.current.value);
              }}
            />
          </div>

          <div className='col'>
            <label className='text_content1' htmlFor='regreso'>
              Regreso
            </label>
            <Form.Control
              type='date'
              role='button'
              name='fechaRegreso'
              ref={fechaRegresoRef}
              onChange={(e) => {
                setOneFormValue(e.target.name, fechaRegresoRef.current.value);
              }}
            />
          </div>
        </div>

        <div className='container my-3 '>
          <div className='row '>
            <div className='col'>
              <label htmlFor='floatingInputValue'>Pasajeros</label>
              <select
                className='form-select'
                aria-label='Default select example'
                name='pasajeros'
                value={formValues.pasajeros}
                onChange={(e) => {
                  setOneFormValue(e.target.name, Number(e.target.value));
                }}
              >
                <option value='1'>1</option>
                <option value='2'>2 </option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </div>

            <div className='col'></div>
          </div>
        </div>

        <div className='container my-3'>
          <div className='row align-items-start'>
            <div className='col col-lg-6'>
              <button
                type='button'
                className='btn btn-primary w-100'
                onClick={buscarVuelo}
              >
                <span className='btn-label'>
                  <i className='fa fa-check'></i>
                </span>
                Buscar vuelos
              </button>
            </div>

            <div className='col col-log-6'>
              <button
                type='button'
                className='btn btn-danger w-100'
                onClick={clearFormValues}
              >
                Limpiar campos
              </button>
            </div>
          </div>
        </div>
      </form>

      <ModalCiudadesOrigen
        isModalOrigenOpen={isModalOrigenOpen}
        closeModalOrigen={closeModalOrigen}
        formValues={formValues}
        setFormValues={setFormValues}
      />

      <ModalCiudadesDestino
        isModalDestinoOpen={isModalDestinoOpen}
        openModalDestino={openModalDestino}
        closeModalDestino={closeModalDestino}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </>
  );
};

export default VueloRedondoForm;
