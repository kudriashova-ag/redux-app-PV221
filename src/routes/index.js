
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/register',
                    element: 'Register'
                }
            ]
        }
    ])

export default router;