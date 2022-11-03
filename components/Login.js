import { signIn } from "next-auth/react";
import Image from "next/image";

function Login(providers){
    return ( <>  
        <div className="text-white">
               {/* { Object.values(providers).map((res) =>  }  */}
            <Image src="http://sguru.org/wp-content/uploads/2018/02/search-png-white-twitter-logo-transparent-white.png"
            width={150 }
            height={150}
            objectFit="contain"
            />
            <div className="text-white"> 
                {
                     Object.values(providers).map( (provider) => 
                              (  <div key={provider[Object.keys(provider)].name}> 
                                 <button onClick={()=> signIn(provider[Object.keys(provider)].id, {callbackUrl:"/"})} href="#_" className="relative inline-block text-lg group">
                                   <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                   <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                   <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                   <span className="relative">signIn with {provider[Object.keys(provider)].name } </span>
                                   </span>
                                   <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                 </button>
                                  </div>
                             )
                      )  
                }
                
            </div>
        </div> 
        </>
    )
}

export default Login;