import conf from "../conf/conf";
import { Client,Account,ID } from "appwrite";

export  class AuthService {
    Client = new Client()
    account;
    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setEndpoint(conf.appwriteProjectId)
        this.account = new Account(this.Client)
    }
    async createAccount({Email,Password,Name}){
        try {
          const useracount =  await this.account.createAccount(ID.unique(),Email,Password,Name)
        
        if (useracount) {
           return this.Login({Email,Password})
        } else {
            return useracount
        }
        } catch (error) {
            throw error
        }

    }
    async Login({Email,Password}){
        try {
            
           return  await this.account.createEmailSession(Email,Password)
        } catch (error) {
           throw error 
        }
    }
    async getAccount (){
        try {
         return   await this.account.get()
        } catch (error) {
           throw error 
        }
    }
    async Logout(){
        try {
            await this.deleteSessions()
        } catch (error) {
            
            throw error
        }
    }
}

const authService = new AuthService()
export default authService