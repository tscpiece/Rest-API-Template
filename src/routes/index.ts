import { Handler } from "elysia";
import ping from "./get/ping";
import sample_post from "./post/sample_post"

const routes: {
    path: string,
    method: string,
    handler: Handler
}[] = [
    {
        path: "/",
        method: "get",
        handler: function() {
            return routes.map(route => {
                return `${route.method.toUpperCase()} ${route.path}`
            })
        }
    },
    {
        path: "/ping",
        method: "get",
        handler: ping
    },
    {
        path: "/sample_post",
        method: "post",
        handler: sample_post
    }
];

export default routes;