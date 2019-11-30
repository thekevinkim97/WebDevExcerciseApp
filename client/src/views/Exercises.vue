<template>
<div>
    <h1 class="is-size-1">
        This is the Exercise Page
    </h1> 
    <div class="columns">
        <div class="column is-one-quarter">
            <ul class="panel">
                <p class="panel-heading">
                    List
                </p>
                <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                    {{p.name}}
                </li>
            </ul>
        </div>
    </div>
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
                <td>38</td>
                <td>23</td>
                <th>1000</th>
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