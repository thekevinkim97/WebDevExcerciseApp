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
        return api('addexercises', { name }, { sets }, { reps }, { max } );
    },
    unlinkFriend(index) {
        return api('delfriends', { index });
    },
    unlinkExercise(name) {
        return api('delexercises', { name });
    },

    joinWeight(lbs) {
        return api('weighty', { lbs });
    },
    joinHeight(inch) {
        return api('heighty', { inch });
    },
}