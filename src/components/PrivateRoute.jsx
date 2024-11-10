import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="mx-auto my-20 text-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;