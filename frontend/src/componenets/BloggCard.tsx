interface BloggCardin{
    profile?:string | undefined
      authname:string
      content:string
      publishedDate:string
      title:string
      BloggImg?:string | undefined
}
export const BloggCard=({BloggImg,profile,authname,content,publishedDate,title}:BloggCardin)=>{
          return(   
    <div className="border-solid shadow-xl shadow-white-500 bg-white-100 pl-5 pt-5 mb-5">
            <div className="flex items-center gap-3 ">
           <Avtar prof={profile} authname={authname}/>
            {authname}  <span className="flex w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>{publishedDate}
             </div>
        <div className="flex justify-center items-center">
                <div>
                  {title}
                <br></br>
                {content.slice(0,400)}....                
                 <div>
                {Math.floor(content.length/100) + " minutes"}
                  </div>
                 </div>
                 <div className="flex flex-col  items-end invisible sm:visible ml-7 p-5 p-1 block ml-auto w-64">
               <img  src={BloggImg} alt="" width="150px"  height="300px"/>
                 </div>
             </div>
    </div>)
}
export function Avtar({prof,authname}:any){
    if(prof ==undefined || prof=="" || prof==null){
        return(<div>
         <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{authname[0]}</span>
</div>
    </div>)
    }else{
    return(<div>
        <img src={prof} width="25px"/>
    </div>)
    }
           
}

// src/components/Avtar.tsx
/*
export function Avtar({ prof, authname }: any) {
    //Add this check! If authname is not a string, or is empty, provide a fallback.
    console.log(authname)
    const displayChar = (typeof authname === 'string' && authname.length > 0) ? authname[0] : 'A';
    if (prof == undefined) {
        return (
            <div>
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                        {displayChar}
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <img src={prof} width="25px" />
            </div>
        );
    }
}*/