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
export async function getNewsApi(keyword){
    try{
        const response = await axios.get(`http://localhost:8080/news/${keyword}`)
        
        return response
    }   
    catch(error){
        const response = []
        return response
    }
}
export async function getStockApi(keyword){
    try{
        const response = await axios.get(`http://localhost:8080/stock/${keyword}`)
        
        return response
    }   
    catch(error){
        const response = []
        return response
    }
}