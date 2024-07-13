import { Home, Create, Card, Login, Signup, ViewCard } from "../pages"

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
        element: Card
    },{
        path: "login",
        element: Login
    }, {
        path: "signup",
        element: Signup
    }, {
        path: "view-card",
        element: ViewCard
    }
]

export default allRoutes;