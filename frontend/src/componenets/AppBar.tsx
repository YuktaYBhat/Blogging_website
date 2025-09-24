import { Avtar } from "./BloggCard"

interface AppCard{
    profile?:string | undefined
      authname:string
}
export const AppBar=({profile,authname}:AppCard)=>{
    return(<div className="bg-green-600 p-2 m-2">
        <div className="flex justify-between">
          Medium Blogg
         <Avtar prof={profile} authname={authname}/>
        </div>
       </div>)
}




















// export const AppBar=({profile,username}:any)=>{
//     return(<div className="bg-green-600 p-3">
//         <div>
//        Medium Blogg
//         </div>
//          <Avtar prof={profile} authname={username}/>
//     </div>)
    
// }

