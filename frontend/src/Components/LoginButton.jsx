import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
  onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;