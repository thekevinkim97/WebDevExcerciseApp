<template>
<div>
    <h1 class="is-size-1">
        This is the Profile Page
    </h1> 

    <div class="columns">
        <div class="column is-one-quarter">
            <div class= "box is-clickable" @click="$event.target.classList.toggle('Photo')">
            <ul class="panel">
                <p class="panel-heading">
                    User
                </p>
                <li v-for="(p, i) in Profile.User " :key="i" class="panel-block is-active">
                    <span class="panel-icon">
                    <i class="fas fa-user" aria-hidden="true"></i>
                    </span>
                    {{p.name}}
                </li>
            </ul>
            </div>
            <ul class="panel">
                <p class="panel-heading">
                    User Friends
                </p>
                <li v-for="(p, i) in Profile.Friends " :key="i" class="panel-block is-active">
                    {{p.name}}
                </li>
            </ul>
        </div>
        <div class="Column" id="Photo">
            <img alt="Current Picture" class="image is-fullwidth" :src="Profile.User_Photo_Show"/>
        </div>
    </div>

</div>
</template>

<script>
import {Exercise_Client, Exercise_Server} from "../models/Profile";
export default {
    data: ()=> ({
        Profile: Exercise_Client
    }), 
    methods: {
        userClicked() {
            this.Profile.User_Photo_Show = Exercise_Server.Get_User_Photo();
        }
    },
    seen: true
}
</script>

<style>
    .is-clickable {
        cursor: pointer;
    }
</style>