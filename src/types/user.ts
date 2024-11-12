export interface Iuser{
    _id: string;
    name: string,
    password: string,
    isAdmin?: boolean,
    hasVoted?: boolean,
    votedFor?: string |null,
}
export interface Iuserlogin{
    
    name: string,
    password: string,
    
}