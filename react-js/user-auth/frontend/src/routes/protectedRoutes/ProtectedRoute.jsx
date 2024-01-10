// import { useCookies } from "react-cookie";

import { redirects } from "./redirect";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {

  const uid = useSelector(state => state?.auth?.user.uid)


  const isAuthenticated = false // if token then make it true but now i'm only taking true it when we have uid 

  if (isAuthenticated || uid) {
    return children;
  }

  return (window.location.href = redirects);
};

export default ProtectedRoute;
