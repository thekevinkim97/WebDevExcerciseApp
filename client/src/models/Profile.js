import { api } from "./my-fetch";

export const Exercise_Server = {
    Get_State() {
        return api('')
    },
    joinFriend(name) {
        return api('friends', { name });
    },
    joinExercise(name) {
        return api('exercises', { name });
    }
}