import axios from "axios";

const END_POINT_URL = "http://localhost:3000"
const api = axios.create({
    baseURL: END_POINT_URL
})

export const API_SERVICE ={
    getUsers: ({email})=> api.get("/users",{params:{email}}),
    createUser: ({email,password, fullname})=>api.post("/users",{email,password, fullname}),
    login: ({email,password})=> api.get("/users",{params: {email,password}})
}