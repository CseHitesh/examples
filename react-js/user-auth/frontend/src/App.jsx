import 'react-toastify/dist/ReactToastify.css';

import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import router from "./routes/router";

function App() {
  return (
    <>

      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
