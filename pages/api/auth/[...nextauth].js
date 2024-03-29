import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google" 

export default NextAuth({
providers:[
GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
}) 
],

callbacks : {
    async session({session,token}){
        session.user.tag = session.user.name.split(" ").join("").toLocaleLowerCase();
        session.user.uid = token.sub;
        console.log("sss", session);
        return session;
    }
}


})
