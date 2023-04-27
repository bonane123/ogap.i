import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Error from "./pages/Error";
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, errorElement: <Error/>, children: [
      { path: '', element: <Home/>}
    ] }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
