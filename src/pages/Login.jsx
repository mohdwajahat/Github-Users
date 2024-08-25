import loginImg from "../images/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="w-full min-h-screen">
      <div className="pt-5 w-1/2 h-screen flex flex-col  items-center gap-10 mx-auto">
        <img src={loginImg} alt="login-img" />
        <h3 className="font-medium text-6xl">Github User</h3>
        <button
          onClick={loginWithRedirect}
          className="text-white bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-400 hover:text-black"
        >
          LOG IN / SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;
