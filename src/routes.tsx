import { BrowserRouter, Route, Routes } from 'react-router'
import { RoutesUrl } from './routes-url'


export function RouteProvider() {
    const routes = [
        {
            path: '*',
            element: <h1>error</h1>
        },
        {
            path: RoutesUrl.BASE_URL,
            element: <h1>base</h1>
        },
        {
            path: RoutesUrl.USER_LIST,
            element: <h1>List</h1>
        },
        {
            path: RoutesUrl.USER_DETAILS,
            element: <h1>details</h1>
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