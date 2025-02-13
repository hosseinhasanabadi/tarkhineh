import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home"
const routes=[
    {path: '/', element:<Home/>},
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]
export default routes