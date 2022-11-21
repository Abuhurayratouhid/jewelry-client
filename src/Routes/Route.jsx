import Checkout from "../Others/Checkout/Checkout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: About } = require("../Pages/About/About");
const { default: Contact } = require("../Pages/Contact/Contact");
const { default: Home } = require("../Pages/Home/Home");
const { default: Login } = require("../Pages/Login/Login");
const { default: SignUp } = require("../Pages/SignUp/SignUp");

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader:({params}) => fetch(`http://localhost:5000/jewelry/${params.id}`)
            }
        ]
    }
])

export default router;