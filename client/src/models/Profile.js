import { api } from "./my-fetch";

export const Exercise_Server = {
    Get_Profile() {
        return api('profile')
    },
    Get_State() {
        return api('')
    }
}