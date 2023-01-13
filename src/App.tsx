import { RouteObject, useRoutes } from "react-router-dom";

import Home from "./pages/home";
import Credits from "./pages/credits";

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/credits",
      element: <Credits />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ];

  const element = useRoutes(routes);

  return (
    <div>
      {element}
    </div>
  );
}
