import Swal from 'sweetalert2';

const showSuccessAlert = (title) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title,
    showConfirmButton: true,
  });
};

const showErrorAlert = (title, message) => {
  Swal.fire(title, message, 'error');
};

export { showSuccessAlert, showErrorAlert };
