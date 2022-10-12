import { Navigate } from 'react-router-dom';

const RouteAuth = function ({ component, destination }) {
    const auth = localStorage.getItem('token');
    if (destination === 'home') {
          return (auth ? <Navigate to={'/todo'} /> : component) 
    } else {
        return (auth ? component : <Navigate to={'/'}/>)
    }
};

export default RouteAuth;
