<template>
<div>
    <div class="columns">
        <div class="column is-one-third is-offset-one-third">

            <ul class="panel">
                <p class="panel-heading">
                    Change Height
                </p>
                <div class="panel-block">

                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="inch" class="input" type="text" placeholder="Height">

                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                            <div class="control">
                                <a class="button is-info" @click.prevent="join">
                                New Height
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
        inch: "",
        error: ""
    }),
    methods: {
        join(){
            Exercise_Server.joinHeight(this.inch)
            .then(x=> this.$router.push( { inch: 'profile'} ) )
                .catch(err=> {
                    console.error(err);
                    this.error = err.message;
                });
        }
    }
}
</script>

<style lang="scss">
    .fas.fa-exclamation-triangle {
        display: none;
    }
    .is-danger {
        .fa-exclamation-triangle {
            display: inline;
            color: red;
        }
        .input {
            border-color: red;
        }
    }
</style>