
import { redirects } from "./redirect";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {

  const user = useSelector(state => state?.auth?.user?._id)


  const isAuthenticated = user ? true : false // if token then make it true but now i'm only taking true it when we have uid 

  if (isAuthenticated) {
    return children;
  }

  return (window.location.href = redirects);
};

export default ProtectedRoute;
