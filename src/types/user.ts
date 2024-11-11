export interface Iuser{
    _id: string;
    name: string,
    password: string,
    isAdmin?: boolean,
    hasVoted?: boolean,
    votedFor?: string |null,
}
export interface Iuserlogin{
    
    username: string,
    password: string,
    
}