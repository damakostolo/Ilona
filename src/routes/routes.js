import EventsPage from "../pages/EventsPage";
import RegisterPage from "../pages/RegisterPage";
import UserPage from "../pages/EventUserPage";
import EventRegisterPage from "../pages/EventRegisterPage";

export const PublicRoutes = [
    { path: '/*', element: <EventsPage />},
    { path: '/add', element: <EventRegisterPage /> },
    { path: '/register/:id', element: <RegisterPage /> },
    { path: '/view/:id', element: <UserPage /> }
]