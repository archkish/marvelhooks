
import img from './error.gif';

const ErrorMessage = () => {
  return (
    // if in folder public
    // <img src={process.env.PUBLIC_URL + '/error.gif'}/> 
    <img style={{display: 'block', width: '250px', height: "250px", objectFit: 'contain', margin: "0 auto"}} src={img} alt="error"/>
  )
}

export default ErrorMessage;