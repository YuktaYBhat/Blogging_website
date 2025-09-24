import { ChangeEvent, useState } from "react"
import { SignUpType} from '../../../common/zod'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { PRO_URL } from "./URL"

export const Auth=({type}:{type:"signup"| "signin"})=>{
  const navigate=useNavigate()
    const [postinput,setpostinput]=useState<SignUpType>({
        email: "",
       name:"",
      password: "",
    })

    async function sendsign(){
      try{
     const response=await axios.post(`${PRO_URL}/api/v1/user/${type=="signup"? "signup" : "signin"}`,postinput)
    const tok=   await response.data.token
     const res2=    await response.data.msg
       const username=    await response.data.user
      console.log("token : "+tok+"  msg : " + res2 + " iii " +username)
       if(tok == undefined){
       return alert(res2)
      }else{
    
          localStorage.setItem('username',username)
          localStorage.setItem('token', tok)
          alert("successfully loged in")
          navigate('/Blogg')
      }
    }catch(e :any){
         alert('error in signing ')
      }
    }
    
       return(<div>
         {type=="signup" ? <LabelInput  label="name"  placeholder="abcd" onChange={(e)=>{
                    setpostinput({
                      ...postinput,
                     name:e.target.value
                    })
           }}></LabelInput> :null}
      <LabelInput  label="email" placeholder="abcd@gmail.com" onChange={(e)=>{
               setpostinput({
                 ...postinput,
                email:e.target.value
               })
      }}></LabelInput>
  <LabelInput  label="password"  placeholder="abcd245425" onChange={(e)=>{
               setpostinput({
                 ...postinput,
                password:e.target.value
               })
      }}></LabelInput>
       <button onClick={sendsign} type="submit" className="bg-white mt-9 w-42 ">{type}</button>
   
    </div>)
    }


interface Inputtype{
    label:string;
     placeholder:string;
     onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
}

function LabelInput({label,placeholder, onChange}:Inputtype){
  return(<div>
    <label>{label}</label>
    <div>
    <input className="bg-white "type="text" name="a" id="a" placeholder={placeholder} onChange={onChange} />
    </div>
     </div>)
}