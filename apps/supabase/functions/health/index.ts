import { Hono } from 'jsr:@hono/hono'

const functionName = 'health'
const app = new Hono().basePath(`/${functionName}`)

app.get('/', (c) => c.text('Service is healthy'))

Deno.serve(app.fetch)