import axios from "axios";
import { ITask } from "./Interfaces";

export const FetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:10000/app/${endpoint}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
export const SendData = async (endpoint: string, data: ITask) => {
  try {
    await axios.post(`http://localhost:10000/app/${endpoint}`, data);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const DeleteData = async (endpoint: string, id: string) => {
  try{
    await axios.delete(`http://localhost:10000/app/${endpoint}/${id}`);
  }catch (error) {
    console.error(error);
    throw new Error(error);
  }
} 