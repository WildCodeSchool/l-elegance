import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import UserContextProvider from "./context/UserContext";
import Resultats from "./pages/Resultats";
// import Contact from "./pages/Contact";
import Inscription from "./pages/InscriptionPage";
import Contact from "./pages/Contact";
import InscriptionPage from "./pages/InscriptionPage";
import Formulaire from "./components/Formulaire";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page1",
        element: <Resultats />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/inscription",
        element: <InscriptionPage />,
      },
      {
        path: "/formulaire",
        element: <Formulaire />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
