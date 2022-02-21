import axios from "axios";
import { GIT_USER } from "../constants/GitUser";

export function getGitUser(gitName){
    return{
        type:GIT_USER.GET_GIT_USER,
        payload:axios.get(`https://api.github.com/users/${gitName}`, {})
    }
}
