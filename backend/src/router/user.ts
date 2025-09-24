import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import {getPrisma} from '../prismaexports'
export const userRouter = new Hono()
import {signupinput} from  '../../../common/zod'


async function alreadyhaveacc(c:any, next:any){
  const prisma = getPrisma(c.env.ACCELERATE_URL);
  const body= await c.req.json()
     const response=await prisma.userBloger.findUnique({
      where:{
        email:body.email,
       }
     })
     console.log(response)
     if(!response){
        await next()
     }else{
        return   c.json({"msg" :"this email id is already registered"})
        
     }
}

userRouter.post('/signup', alreadyhaveacc,async (c: any) => {
  const body= await c.req.json()
     const success=signupinput.safeParse(body)
     if(!success){
      return c.text("not valid")
     }
      // console.log(body);
       console.log("DB  URL. " + c.env.ACCELERATE_URL);
       const prisma = getPrisma(c.env.ACCELERATE_URL);
  // Use the shared Prisma client with Accelerate extension
  try{
  const user = await prisma.userBloger.create({
    data:{
      email  : body.email,
      name   :body.name,
      password :body.password
    }
  })
      const token=await sign({id : user.id},"abcd")
      await prisma.$disconnect();
      return c.json({'token':token,'user':user.name})
  }catch(e){
       await prisma.$disconnect();
       return c.text('error'+e)
     }
    
})


userRouter.post('/signin',async (c :any) => {
  const prisma =getPrisma(c.env.ACCELERATE_URL)
  try{
     const body= await  c.req.json()
    const user = await prisma.userBloger.findUnique({
     where:{
      email  : body.email,
     password :body.password
     }
    })
    if(!user){
    return c.json({"msg":"user not found"})
    }
    const token=await sign({id :user.id},c.env.SECRET)
     return c.json({'token':token,'user':user.name})
  }catch(e){
             return c.text('error',e)
     }
})