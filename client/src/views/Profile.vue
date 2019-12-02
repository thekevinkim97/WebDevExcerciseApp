<template>
<div>
    <h1 class="is-size-1">
        User Profile
    </h1> 

    <div class="columns">
        <div class="column is-one-third">
            <ul class="panel">
                <p class="panel-heading">
                    User
                </p>
                <li v-for="(p, i) in profile.User" :key="i" class="panel-block is-active">
                    <span class="panel-icon">
                        <i class="fas fa-user" aria-hidden="true"></i>
                    </span>
                    {{p.name}}
                </li>
            </ul>
            <ul class="panel">
                <p class="panel-heading">
                    Your Friends
                </p>
                <li v-for="(p, index) in profile.Friends" :key="index" class="panel-block is-active">
                    {{p.name}}
                </li>
                <router-link class="button" to="/addfriend" exact-active-class="active">
                    <strong>Add Friend</strong>
                </router-link>
                <a class="button" exact-active-class="active" @click.prevent="removeFriend">
                    <strong>Remove Recent Friend</strong>
                </a>
            </ul>
        </div>
       <div class="column is-one-third">
            <ul class="panel">
                <p class="panel-heading">
                    User Stats:
                </p>
                <li class="panel-block is-active">
                    <li v-for="(p, y) in profile.Height" :key="y" class="panel-block is-active">
                    {{p.inch}} inches tall
                </li>
                <li class="panel-block is-active">
                    <li v-for="(p, s) in profile.Weight" :key="s" class="panel-block is-active">
                    {{p.lbs}} pounds
                </li>
                
                <router-link class="button" to="/changetheweight" exact-active-class="active">
                    <strong>Change Weight</strong>
                </router-link>
                <router-link class="button" to="/changetheheight" exact-active-class="active">
                    <strong>Change Height</strong>
                </router-link>
            </ul>
        </div>
       
    </div>

</div>
</template>

<script>
import { Exercise_Server } from "../models/Profile";
export default {
    data: ()=> ({
        profile: {},
    }),
    async created() {
        setInterval( async ()=> this.profile = await Exercise_Server.Get_State(), 2000 )
    }, 
    methods: {
        userClicked() {
            this.Profile.User_Photo_Show = Exercise_Server.Get_User_Photo();
        },
        removeFriend(){
            Exercise_Server.unlinkFriend()
            .then(x=> this.$router.push( { } ) )
                .catch(err=> {
                    console.error(err);
                    this.error = err.message;
                });
        },
    }
}
</script>

<style>
    .is-clickable {
        cursor: pointer;
    }
</style>