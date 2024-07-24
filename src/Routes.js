import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import NotFound from "./Components/NotFound";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/User/UserDashboard";
import BookedEvent from "./Pages/User/BookedEvent";
import Events from "./Pages/User/Events";
import ManageUser from "./Pages/Admin/MangeUser";
import ManageEvents from "./Pages/Admin/MangeEvents";
import AdmEvents from "./Pages/Admin/AdmEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        // path: "user",
        element: <UserDashboard />,
        children: [
          {
            index: true,
            element: <Navigate to="events" replace />,
          },
          {
            path: "events",
            element: <Events />,
          },
          {
            path: "bookedevent",
            element: <BookedEvent />,
          },
        ],
      },
      {
        // path: "admin",
        element: <AdminDashboard />,
        children: [
          {
            index: true,
            element: <Navigate to="adminevent" replace />,
          },
          {
            path: "adduser",
            element: <ManageUser />,
          },
          {
            path: "adminevent",
            element: <AdmEvents />,
          },
          {
            path: "addevent",
            element: <ManageEvents />,
          },
        ],
      },
    ],
  },
]);
