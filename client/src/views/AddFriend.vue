<template>
<div>
    <h1 class="is-size-1">
        Add Friend
    </h1> 

    <div class="columns">
        <div class="column is-one-third is-offset-one-third">

            <ul class="panel">
                <p class="panel-heading">
                    Add Friend
                </p>
                <div class="panel-block">

                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input v-model="name" class="input" type="text" placeholder="Friend Name">
                        </div>
                        <div class="control">
                            <a class="button is-info" @click.prevent="join">
                            Add Friend
                            </a>
                        </div>
                    </div>

                </div>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import { Exercise_Server } from "../models/Profile";
export default {
    data: ()=>({
        name: ""
    }),
    methods: {
        join(){
            Exercise_Server.Join(this.name)
        }
    }
}
</script>

<style>
</style>