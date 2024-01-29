import { ObjectId } from "mongoose";

export interface ITask {
  title: string;
  date: string;
  action: string;
  periodicity: number;
}
