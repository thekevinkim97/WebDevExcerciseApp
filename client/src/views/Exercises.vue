<template>
<div>
    <h1 class="is-size-1">
        This is the Exercise Page
    </h1> 
    
    <table class="table">
        <thead>
            <tr>
            <th><abbr title="Exercise">Exercise</abbr></th>
                <th><abbr title="Sets">Sets</abbr></th>
                <th><abbr title="Reps">Reps</abbr></th>
                <th><abbr title="MaxWeight">Max Weight Recorded</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>
                    <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                        {{p.name}}
                </li>
                </th>
                <td>
                    <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                        {{p.sets}}
                    </li>
                </td>
                <td>
                    <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                        {{p.reps}}
                    </li>
                </td>
                <th>
                    <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                        {{p.max}}
                    </li>
                </th>
            </tr>
            <tr>
                <th>
                    <router-link class="button" to="/addexercises" exact-active-class="active">
                        <strong>Add Exercise</strong>
                    </router-link>
                </th>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { Exercise_Server } from "../models/Profile";
export default {
    data: ()=> ({
        profile: {}
    }), 
    async created() {
        this.profile = await Exercise_Server.Get_State();
    }, 
}
</script>