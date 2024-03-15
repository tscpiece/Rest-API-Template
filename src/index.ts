import { Elysia } from "elysia";
import routes from "./routes";

const PORT = process.env.PORT || "3000";

const app = new Elysia();

routes.forEach(route => {
    app.route(route.method.toUpperCase(), route.path, route.handler)
})

app.listen(PORT);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);