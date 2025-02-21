import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute.jsx";
import PublicRoute from "@/routes/PublicRoute.jsx";

// layouts & pages
import DefaultTemplate from "@/components/templates/DefaultTemplate.jsx";
import Login from "@/components/pages/Login.jsx";
import Home from "@/components/pages/Home.jsx";
import Register from "@/components/pages/Register.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultTemplate/>,
        children: [
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "",
                        element: <Home/>
                    }
                ]

            },
            {
                element: <PublicRoute/>,
                children: [
                    {
                        path: "login",
                        element: <Login/>
                    },
                    {
                        path: "register",
                        element: <Register/>
                    }
                ]
            }
        ]
    }
]);

const App = () => <RouterProvider router={router}/>

export default App;