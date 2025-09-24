import { Hono } from 'hono'
import { userRouter } from './router/user'
import { blogRouter } from './router/bloggs'
import { cors } from 'hono/cors'



const app = new Hono()
app.use(cors())
/*
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));*/

app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)
export default app
