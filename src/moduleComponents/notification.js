import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const notifications = async (result) => {
    if (result.data.statusCode === 200) {
      await MySwal.fire({
        position: "top-center",
        icon: "success",
        title: `${result.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
      return true;
    }
    if (result.data.statusCode === 400) {
      await MySwal.fire({
        position: "top-center",
        icon: "error",
        title: `${result.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    }
  }

const notificationSocialLogin = async (result) => {
    if (result.data.statusCode === 200) {
      await MySwal.fire({
        position: "top-center",
        icon: "success",
        title: `${result.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
      return true;
    }
    if (result.data.statusCode === 400) {
      await MySwal.fire({
        position: "top-center",
        icon: "error",
        title: `${result.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    }
  }
  
const errorNotification = async (text = '', timer = 3000) => {
    await MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: text ? text : "Something Wrong !!!",
      timer : timer
    });
    
    return;
  }
  
  export { notifications, errorNotification, notificationSocialLogin };