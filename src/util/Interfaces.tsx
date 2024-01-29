import { ObjectId } from "mongoose";

export interface ITask {
  _id: string;
  title: string;
  date: string;
  action: string;
  periodicity: number;
}
