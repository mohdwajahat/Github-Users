import { Dashboard, Login, PrivateRoute } from "./pages/";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
