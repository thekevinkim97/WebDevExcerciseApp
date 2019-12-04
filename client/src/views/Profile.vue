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
                    <button @click="deleteFriend(index)">
                        delete
                    </button>
                </li>
                
                <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="name" class="input" type="text" placeholder="Name">

                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>
                        <p class="help is-danger">{{error}}</p>
                </div>


                <div class="control">
                    <a class="button is-info" @click.prevent="join">
                            Add Friend
                    </a>
                </div>

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

                    <router-link class="button" to="/changetheheight" exact-active-class="active">
                        Change Height
                    </router-link>
                </li>
                <li class="panel-block is-active">
                    <li v-for="(p, s) in profile.Weight" :key="s" class="panel-block is-active">
                    {{p.lbs}} pounds
                    
                    <router-link class="button" to="/changetheweight" exact-active-class="active">
                        Change Weight
                    </router-link>
                </li>
                
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
        friend: "",
        error: ""
    }),
    async created() {
        setInterval( async ()=> this.profile = await Exercise_Server.Get_State(), 2000 )
    }, 
    methods: {
        deleteFriend(index) {
            Exercise_Server.unlinkFriend(index)
            //Friends.splice(index, 1);
        },
        join(){
            Exercise_Server.joinFriend(this.name)
                .catch(err=> {
                    console.error(err);
                    this.error = err.message;
                });
        }
    }
}
</script>

<style>
    .is-clickable {
        cursor: pointer;
    }
</style>