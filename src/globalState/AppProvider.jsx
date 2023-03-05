import { useState } from 'react';
import AppContext from './AppContext';

const intialGlobalState = {
  tipoDeVuelo: '',
  datosVueloRedondo: {
    tickekId: null,
    datosDeIda: {
      fecha: null,
      origen: null,
      destino: null,
      hayEscala: false,
      horaArranque: null,
      horaLlegada: null,
      duracion: null,
    },
    datosDeVuelta: {
      fecha: null,
      origen: null,
      destino: null,
      hayEscala: false,
      horaArranque: null,
      horaLlegada: null,
      duracion: null,
    },
    precioTotal: null,
    pasajeros: 2,
  },
  datosVueloSencillo: {
    tickekId: null,
    descripcion: {
      origen: null,
      destino: null,
      hayEscala: false,
      horaArranque: null,
      horaLlegada: null,
      duracion: null,
    },
    precioTotal: null,
  },
};

const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(intialGlobalState);

  const establacerDatosVuelosRedondo = (datosDelVuelo) => {
    setGlobalState({
      ...globalState,
      datosVueloRedondo: datosDelVuelo,
      tipoDeVuelo: 'Redondo',
    });
  };

  const establacerDatosVuelosSencillo = (datosDelVuelo) => {
    setGlobalState({
      ...globalState,
      datosVueloSencillo: datosDelVuelo,
      tipoDeVuelo: 'Sencillo',
    });
  };

  const resetearEstadoGlobal = () => {
    setGlobalState(intialGlobalState);
  };

  return (
    <AppContext.Provider
      value={{
        globalState,
        establacerDatosVuelosRedondo,
        establacerDatosVuelosSencillo,
        resetearEstadoGlobal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
