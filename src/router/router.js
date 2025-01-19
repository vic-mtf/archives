import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const PUBLIC_URL = import.meta.env.BASE_URL;

const router = createBrowserRouter(routes, { basename: PUBLIC_URL });

export default router;
