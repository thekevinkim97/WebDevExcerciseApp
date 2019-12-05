<template>
<div>
    <h1 class="is-size-1">
        Record your meals for the day here.
    </h1> 
    

    <table class="table">
        <thead>
            <tr>
            <th><abbr title="FoodItem">Food Item</abbr></th>
                <th><abbr title="Calories">Calories</abbr></th>
                <th><abbr title="Servings">Servings</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>
                    <li v-for="(p, i) in profile.Meals" :key="i" class="panel-block is-active">
                        {{p.name}}
                    </li>
                    <li>
                        <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model = "name" class="input" type="text" placeholder="Food Name">

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
                    <li v-for="(p, i) in profile.Meals" :key="i" class="panel-block is-active">
                        {{p.calories}}
                    </li>
                    <li>
                        <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model.number ="calories" class="input" type="number" placeholder="Calories">

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
                    <li v-for="(p, i) in profile.Meals" :key="i" class="panel-block is-active">
                        {{p.servings}}
                    </li>
                    <li>
                        <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model.number="servings" class="input" type="number" placeholder="Number of Servings">

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
                    <li v-for="(p, index) in profile.Meals" :key="index" class="panel-block is-active">
                        <button @click="deleteFood(index)">
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
                                Add Food
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
        calories: 0,
        servings: 0,
        max: 0,
        error: "",
    }), 
    async created() {
        setInterval( async ()=> this.profile = await Exercise_Server.Get_State(), 2000 )
    }, 
    methods: {
        deleteFood(index){
            Exercise_Server.unlinkFood(index)
        },
        submit(){
            Exercise_Server.joinFood(this.name, this.calories, this.servings)
                .catch(err=> {
                    console.error(err);
                    this.error = err.message;
                });
        },
    }
}
</script>