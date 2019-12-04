<template>
<div>
    <h1 class="is-size-1">
        Here are all your workouts!
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
                    <li>
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
                    </li>
                </th>
                <td>
                    <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                        {{p.sets}}
                    </li>
                    <li>
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
                    </li>
                </td>
                <td>
                    <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                        {{p.reps}}
                    </li>
                    <li>
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
                    </li>
                </td>
                <th>
                    <li v-for="(p, i) in profile.Exercises" :key="i" class="panel-block is-active">
                        {{p.max}}
                    </li>
                    <li>
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
                    </li>
                </th>
                <td>
                    <li v-for="(p, index) in profile.Exercises" :key="index" class="panel-block is-active">
                        <button @click="deleteExercise(index)">
                            delete
                        </button>
                    </li>
                </td>
            </tr>
            <tr>
                <th>
                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control">
                                <a class="button is-info" @click="submit">
                                Add Exercise
                                </a>
                            </div>
                        </div>
                        <p class="help is-danger">{{error}}</p>
                    </div>
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
        profile: {},
        name: "",
        sets: 0,
        reps: 0,
        max: 0,
        error: "",
    }), 
    async created() {
        setInterval( async ()=> this.profile = await Exercise_Server.Get_State(), 2000 )
    }, 
    methods: {
        deleteExercise(index){
            Exercise_Server.unlinkExercise(index)
        },
        submit(){
            Exercise_Server.joinExercise(this.name, this.sets, this.reps, this.max)
                .catch(err=> {
                    console.error(err);
                    this.error = err.message;
                });
        }
    }
}
</script>