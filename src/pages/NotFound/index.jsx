import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col text-center'>
          <h1>La página que buscas no existe</h1>

          <Link className='btn btn-primary' to='/' role='button'>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
