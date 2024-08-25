import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import loadingImg from "../images/preloader.gif";
const PrivateRoute = ({ children }) => {
  const { user,isAuthenticated ,isLoading} = useAuth0();
  const isUser =  isAuthenticated && user;
  console.log("isAuthenticated",isAuthenticated , "user",user,"isUser",isUser)
  

  // This loading state is quite important, if it is not present, the user will be redirected to login page even if he is already logged in because while the user is loading the page, the auth0 state is not yet updated 

  if (isLoading) {
    return <div className="w-full h-screen flex justify-center items-center">
      <img src={loadingImg}  alt="loading" />
    </div>; 
  }

  if (!isUser) {
    console.log("redirecting to login")
    return <Navigate to='/login' />;
  }
  return children
}

export default PrivateRoute