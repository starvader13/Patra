import { Home, Create, Cards, Login, Signup } from "../pages"

type AllRoutes = {
    path: string,
    element: React.LazyExoticComponent<() => JSX.Element>
}[]

const allRoutes: AllRoutes= [
    {
        path: "/",
        element: Home
    },{
        path: "create-card",
        element: Create
    },{
        path: "cards",
        element: Cards
    },{
        path: "login",
        element: Login
    }, {
        path: "signup",
        element: Signup
    }
]

export default allRoutes;