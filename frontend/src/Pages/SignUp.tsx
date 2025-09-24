import { Auth } from "../componenets/Auth"
import { Quote } from "./Quote"

export const SignUp=()=>{
    return(<div className="grid grid-cols-2  items-center">
        <div  className="cols-span-1 h-screen flex justify-center bg-green-900 items-center">
           <div className=" flex justify-center items-center">
              <Auth type={"signup"}/>
           </div>
        </div>
        <div className="cols-span-1  flex justify-center h-screen bg-red-400 items-center">
        <Quote/>
        </div>
         </div>)
}
