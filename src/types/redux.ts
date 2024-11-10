import { Icandidate } from "./candidate";
import { Iuser } from "./user";

export enum DataStatus {
    PENDING,
    LOADING,
    SUCCESS,
    FAILED,
    ERROR,
    IDLE
}
export interface userState {
    err:string | null;
    status :DataStatus
    user :null | Iuser
}
export interface candidateState {
    err:string | null;
    status :DataStatus
    candidate : Icandidate[]
}