import { useContext } from 'react';

import VueloEncontradoRedondo from '../../components/VueloEncontradoRedondo';
import VueloEncontradoSencillo from '../../components/VueloEncontradoSencillo';

import AppContext from '../../globalState/AppContext';

const Vuelos = () => {
  const { globalState } = useContext(AppContext);
  const { tipoDeVuelo } = globalState;

  return (
    <section
      style={{ minHeight: '100vh', backgroundColor: 'rgb(243 243 243)' }}
    >
      {tipoDeVuelo === 'Redondo' ? (
        <VueloEncontradoRedondo />
      ) : (
        <VueloEncontradoSencillo />
      )}
    </section>
  );
};

export default Vuelos;
