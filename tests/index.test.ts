import { expect, test, describe } from "bun:test";

const path = `localhost:${process.env.PORT || 3000}`

describe("get request", () => {
  test("on path /", async () => {
    let res = await fetch(path);
    expect(res.status).toBe(200)
    expect(await res.json()).toBeArray()
  })

  test("on path /ping", async () => {
    let res = await fetch(`${path}/ping`);
    expect(res.status).toBe(200)
  })
})

describe("post request", () => {
  test("on path /sample_post", async () => {
    let bodyToSend = {
      hello: "world"
    }
    let res = await fetch(`${path}/sample_post`, {
      method: "post",
      body: JSON.stringify(bodyToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await res.json()
    expect(res.status).toBe(200)
    expect(json.body).toStrictEqual(bodyToSend)
  })
})