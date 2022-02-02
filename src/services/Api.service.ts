import {UserType} from "../types";

class ApiService {
   private baseUrl: string;
   constructor() {
       this.baseUrl = 'https://jsonplaceholder.typicode.com/users'
   }

   async fetchUsers(){
        const response = await fetch(this.baseUrl)
        const data: UserType[] = await response.json()
        return data
   }
}

export default new ApiService