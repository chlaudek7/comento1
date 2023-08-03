import axios  from "axios";


export async function getLogin(id){
    try{
        const response = await axios.get(`http://localhost:8080/user/${id}`)
        return response
    }   
    catch(error){
        const response = []
        return response
    }
}