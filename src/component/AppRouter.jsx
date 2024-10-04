import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PublicRoutes} from "../routes/routes";

const AppRouter = () => {
    return (
        <Routes>
            {
                PublicRoutes.map(route => (
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                ))
            }
        </Routes>
    );
};

export default AppRouter;