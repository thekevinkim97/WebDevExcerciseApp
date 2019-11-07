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
                <li v-for="(p, i) in Profile.Exercises" :key="i" class="panel-block is-active">
                    {{p.name}}
                </li>
            </ul>
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
}
</script>