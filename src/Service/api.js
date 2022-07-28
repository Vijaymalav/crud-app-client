import axios from 'axios';

// const usersUrl = 'http://localhost:8000';
const usersUrl = process.env.REACT_APP_API_KEY || 'http://localhost:8000';

export const getUsers = async () => {
    try{
        return await axios.get(`${usersUrl}/all`);
    }
    catch(error){
        console.log("somthing went wrong",error);
    }
    
}
export const getUser = async (id) => {
    try{
        return await axios.get(`${usersUrl}/${id}`);
    }
    catch(error){
        console.log("somthing went wrong id nhi mili",error);
    }
    
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}