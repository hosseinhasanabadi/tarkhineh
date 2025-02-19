import Home from "./pages/Home/Home";
import BranchSHo from "./pages/BranchSHo/BranchSHo";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/branchSHo/:BranchName", element: <BranchSHo /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];
export default routes;
