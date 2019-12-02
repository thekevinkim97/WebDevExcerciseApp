<template>
<div>
    <div class="columns">
        <div class="column is-one-third is-offset-one-third">

            <ul class="panel">
                <p class="panel-heading">
                    Are you sure?
                </p>
                <div class="panel-block">

                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control">
                                <a class="button is-info" @click.prevent="join">
                                Yes!
                                </a>
                            </div>
                        </div>
                        <p class="help is-danger">{{error}}</p>
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
        error: ""
    }),
    methods: {
        join(){
            Exercise_Server.RemoveUser()
                .catch(err=> {
                    console.error(err);
                    this.error = err.message;
                });
        }
    }
}
</script>