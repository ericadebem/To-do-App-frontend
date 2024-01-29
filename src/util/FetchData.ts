import axios from "axios";

export const FetchData =async (endpoint: string) => {
    try{
        const response = await axios.get(`http://localhost:6060/app/${endpoint}`);
        const data = response.data;
        return data
    }catch(error){
        console.error(error);
        throw new Error(error);
    }
};
