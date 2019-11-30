import { api } from "./my-fetch";

export const Exercise_Server = {
    Get_State() {
        return api('')
    },
    joinFriend(name) {
        return api('addfriends', { name });
    },
    joinExercise(name) {
        return api('addexercises', { name });
    },
    unlinkFriend(name) {
        return api('delfriends', { name });
    },
    unlinkExercise(name) {
        return api('delexercises', { name });
    },
}