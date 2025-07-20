import { BrowserRouter, Route, Routes } from 'react-router'
import { RoutesUrl } from './routes-url'
import UserList from './pages/user-list'
import UserDetails from './pages/user-details'


export function RouteProvider() {
    const routes = [
        {
            path: '*',
            element: <h1>error</h1>
        },
        {
            path: RoutesUrl.BASE_URL,
            element: <UserList />
        },
        {
            path: `${RoutesUrl.USER_DETAILS}:id`,
            element: <UserDetails />
        },
    ]

    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}