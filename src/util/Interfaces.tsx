import { ObjectId } from "mongoose";

export interface ITask {
  _id: ObjectId;
  title: string;
  date: string;
  action: string;
  periodicity: number;
}
