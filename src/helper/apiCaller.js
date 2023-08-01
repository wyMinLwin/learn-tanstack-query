import axios from "axios";

const getPeopleData = async () => {  
    const res = await axios.get(`http://localhost:4000/people`);
    return res.data;
}
const addPeople = async (body) => {
   
    const res = await axios.post(`http://localhost:4000/people`,body);
    return res
}
const getFriends = async () => {  
    const res = await axios.get(`http://localhost:4000/friends`);
    return res.data;
}
const getMods = async (page=1) => {  
    const res = await axios.get(`http://localhost:4000/mods?_limit=2&_page=${page}`);
    return res.data;
}
const getPersonById = async (id) => {  
    const res = await axios.get(`http://localhost:4000/people/${id}`);
    return res.data;
}

const getFriendsById = async (id) => {  
    const res = await axios.get(`http://localhost:4000/friends?friendId=${id}`);
    return res.data;
}

export {getPeopleData,getPersonById,getFriends,getFriendsById,getMods,addPeople}