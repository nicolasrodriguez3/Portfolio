import HomeView from "../views/HomeView"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectView from "../views/ProjectView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "projects/:id",
    element: <ProjectView />,
  }
]);

export default function Router() {
  return (
    <RouterProvider router={router} />
  );
}
