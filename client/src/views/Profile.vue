<template>
<div>
    <h1 class="is-size-1">
        This is the Profile Page
    </h1> 

    <div class="columns">
        <div class="column is-one-quarter">
            <ul class="panel">
                <p class="panel-heading">
                    User
                </p>
                <li class="panel-block is-active">
                    <span class="panel-icon">
                        <i class="fas fa-user" aria-hidden="true"></i>
                    </span>
                    {{profile.Name}}
                </li>
            </ul>
            <ul class="panel">
                <p class="panel-heading">
                    Your Friends
                </p>
                <li v-for="(p, i) in profile.Friends" :key="i" class="panel-block is-active">
                    {{p.name}}
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
        profile: {}
    }),
    async created() {
        setInterval( async ()=> this.profile = await Exercise_Server.Get_State(), 2000 )
    }, 
    methods: {
        userClicked() {
            this.Profile.User_Photo_Show = Exercise_Server.Get_User_Photo();
        }
    }
}
</script>

<style>
    .is-clickable {
        cursor: pointer;
    }
</style>