import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import UserContextProvider from "./context/UserContext";
import Stepper from "./pages/Stepper";
import QuestionContextProvider from "./context/QuestionContext";
import Resultats from "./pages/Resultats";
import InscriptionPage from "./pages/InscriptionPage";
import Connexion from "./pages/Connexion";

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
        path: "/results",

        element: (
          <QuestionContextProvider>
            <Resultats />
          </QuestionContextProvider>
        ),
      },
      {
        path: "/inscription",
        element: <InscriptionPage />,
      },
      { path: "/connexion", element: <Connexion /> },
      {
        path: "/le-questionnaire",
        element: (
          <QuestionContextProvider>
            <Stepper />
          </QuestionContextProvider>
        ),
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/inscription",
        element: <InscriptionPage />,
      },
      {
        path: "/resultats",
        element: (
          <QuestionContextProvider>
            <Resultats />
          </QuestionContextProvider>
        ),
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
