import { api, User } from "./my-fetch";
import $router from "../router/index";

export const Exercise_Server = {
    Get_State() {
        return api('')
    },
    async JoinUser(name) {
        const { current_id } = await api('user', { name });
        User.User_Id = current_id;
        $router.push( { name: 'profile' } );
    },
   async RemoveUser() {
        const { current_id } = await api('signout', { name });
        User.User_Id = current_id;
        $router.push( { name: 'profile' } );
    },
    joinFriend(name) {
        return api('addfriends', { name });
    },
    joinExercise(name, sets, reps, max) {
        return api('addexercises', { name, sets, reps, max });
    },
    unlinkFriend(name) {
        return api('delfriends', { name });
    },
    unlinkExercise(name) {
        return api('delexercises', { name });
    },
}