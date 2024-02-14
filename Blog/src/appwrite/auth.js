import conf from "../conf/conf";
import {Client ,Account ,ID} from 'appwrite';

export class AuthService {
Client= new Client();
account ; 
constructor(){
    this.Client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.account= new Account(this.Client)
}
async createAccount({email,password,name}){
    try {
      const useraccount =  await this.account.create(ID.unique(),email,password,name)
      if (useraccount) {
        //call anothermethod
        return this.login({email,password})
      } else {
        return useraccount;
      }
    } catch (error) {
        throw error;
    }
}
async login({email,password}){
    try {
     const loginac =   await this.account.createEmailSession(email,password);
     return loginac
    } catch (error) {
        throw error
    }
}
async getCurrentUser(){
    try {
         return await this.account.get()
        
    } catch (error) {
     throw error   
    }
    return null;
    
}
async logout(){
    try {
        await this.account.deleteSessions()
    } catch (error) {
        console.log("Appwrite  error",error);
    }
}
}

const authService = new AuthService()
export default authService