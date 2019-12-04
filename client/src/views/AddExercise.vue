<template>
<div>
    <h1 class="is-size-1">
        Add Exercise
    </h1> 

    <div class="columns">
        <div class="column is-one-third is-offset-one-third">

            <ul class="panel">
                <p class="panel-heading">
                    Add Exercise
                </p>
                <div class="panel-block">

                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model = "name" class="input" type="text" placeholder="Exercise Name">

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
                </div>

                <div class="panel-block">
                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model.number ="sets" class="input" type="number" placeholder="Number of Sets">

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
                </div>

                <div class="panel-block">
                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model.number="reps" class="input" type="number" placeholder="Number of Reps">

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
                </div>

                <div class="panel-block">
                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model.number="max" class="input" type="number" placeholder="Max Amount of Weight">

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
                </div>

                <div class="panel-block">
                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control">
                                <a class="button is-info" @click="submit">
                                Submit
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
        name: "",
        sets: 0,
        reps: 0,
        max: 0,
        error: ""
    }),
    methods: {
        submit(){
            Exercise_Server.joinExercise(this.name, this.sets, this.reps, this.max)
            .then(x=> this.$router.push( {name: 'exercises' } ) )
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