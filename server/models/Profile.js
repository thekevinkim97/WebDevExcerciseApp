const { CustomError } = require('./CustomError');

module.exports.Profile = {
    User: [
        { name: null }
    ],
    Weight: [{ lbs: 150 }],
    Height: [{ inch: 63 }],
    Friends:[
        { name: "Chloe Ong" }, 
        { name: "Johnathan Kwan" }, 
        { name: "Vivian Chen" }, 
    ],
    Exercises:[
        { name: "Bench Press", sets: 3, reps: 5, max: 155},
        { name: "Bicep Curl", sets: 3, reps: 10, max: 35},
        { name: "Barbell Lunges", sets: 4, reps: 12, max: 120},
    ],
    Meals:[
        { name: "French Fries", calories: 300, servings: 2},
        { name: "Chicken Tenders", calories: 600, servings: 1},
    ],

    RemoveUser() {
        if(this.User.find(x=> x.name == null)){
            throw new CustomError(409, 'You are already signed out!');
        } else {
            this.User.pop();
            return this.User.length - 1;
        }
    },
    JoinUser(name){
        if(this.User.find(x=> x.name != null)){
            throw new CustomError(409, 'You are already logged in');
        } else {
            this.User.pop();
            this.User.push({ name });
            return this.User.length - 1;
        }
    },
    JoinFriend(name){
        if(this.Friends.find(x=> x.name == name )){
            throw new CustomError(409, 'You already have a friend with that name');
        }
        this.Friends.push({ name });
        return this.Friends.length - 1;
    },
    JoinExercise(name, sets, reps, max){
        if(this.Exercises.find(x=> x.name == name )){
            throw new CustomError(409, 'You already have this exercise');
        }
        this.Exercises.push({ name, sets, reps, max });
        return this.Exercises.length - 1;
    },
    JoinFood(name, calories, servings){
        if(this.Meals.find(x=> x.name == name )){
            throw new CustomError(409, 'You already have this food item');
        }
        this.Meals.push({ name, calories, servings});
        return this.Meals.length - 1;
    },

    UnlinkFriend(index){
        this.Friends.splice(index, 1);
        return this.Friends.length - 1;
    },
    UnlinkExercise(index){
        this.Exercises.splice(index, 1);
        return this.Exercises.length - 1;
    },
    UnlinkFood(index) {
        this.Meals.splice(index, 1);
        return this.Meals.length-1;
    },

    JoinWeight(lbs){
        this.Weight.pop();
        this.Weight.push({lbs});
        return this.Weight.length - 1;
        
    },
    JoinHeight(inch){
        this.Height.pop();
        this.Height.push({inch});
        return this.Height.length - 1;
        
    },

    Get_State() {
        return {
            User: this.User,
            Weight: this.Weight,
            Height: this.Height,
            Friends: this.Friends,
            Exercises: this.Exercises,
            Meals: this.Meals,
        }
    },
}