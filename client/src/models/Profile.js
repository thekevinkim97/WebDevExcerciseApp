import { api } from "./my-fetch";

export const Exercise_Server = {
    Get_State() {
        return api('')
    },
    join(name) {
        return api('friends', { name });
    }
}