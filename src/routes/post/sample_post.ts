import { Handler } from "elysia"

const handler: Handler = function({ body }) {
    console.log(`POST request with body`, body)
    return {
        message: "Your POST request was successful",
        body
    }
}

export default handler