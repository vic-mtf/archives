import { createBrowserRouter } from "react-router-dom";
import AppTest from "../test/App.test";
import Archives from "../views/Archives";

const router = createBrowserRouter([
    {
        element: <AppTest/>,
        path: '/test',
    },
    {
        element: <Archives/>,
        path: '*',
    },
]);

export default router;