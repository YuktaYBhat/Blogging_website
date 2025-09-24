
import zod from "zod"

export const signupinput=zod.object({
    email:zod.string(),
  name:zod.string().optional(),
  password:zod.string()

})

export type SignUpType= zod.infer<typeof signupinput>