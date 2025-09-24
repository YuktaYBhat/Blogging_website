
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate'

console.log("Initializing Prisma Client with Accelerate extension");

//Use this function to create a Prisma client with a direct connection string
//datasourceUrl:acceLerate url caLLEd in userRouter.js 
export function getPrisma(datasourceUrl: string) {
  //console.log(datasourceUrl)
  return new PrismaClient({ datasourceUrl }).$extends(withAccelerate());
}
