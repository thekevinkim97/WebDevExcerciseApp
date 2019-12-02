<template>
<div>
    <section class="hero is-medium is-dark is-bold">
    <div class="hero-body">
    <div class="columns">
        <div class="column is-half is-offset-one-third">

            <ul class="panel">
                <p class="panel-heading">
                    Login
                </p>
                <div class="panel-block">

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
                            <div class="control">
                                <a class="button is-info" @click.prevent="join">
                                Your Name
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
    </section>
</div>

</template>

<script>
import { Exercise_Server } from "../models/Profile";
export default {
    data: ()=>({
        name: "",
        error: ""
    }),
    methods: {
        join(){
            Exercise_Server.JoinUser(this.name)
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