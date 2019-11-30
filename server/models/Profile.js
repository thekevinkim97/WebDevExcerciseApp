const { CustomError } = require('./CustomError');

module.exports.Profile = {
    Name: "Kevin Kim",
    Weight: 150,
    Height: 63,
    Friends:[
        { name: "Chloe Ong" }, 
        { name: "Johnathan Kwan" }, 
        { name: "Vivian Chen" }, 
    ],
    Exercises:[
        { name: "Bench Press", sets: 3, reps: 5},
        { name: "Bicep Curl", sets: 3, reps: 10}
    ],
    JoinFriend(name){
        if(this.Friends.find(x=> x.name == name )){
            throw new CustomError(409, 'You already have a friend with that name');
        }
        this.Friends.push({ name, score: 0 });
        return this.Friends.length - 1;
    },
    JoinExercise(name){
        if(this.Exercises.find(x=> x.name == name )){
            throw new CustomError(409, 'You already have this exercise');
        }
        this.Exercises.push({ name, score: 0 });
        return this.Exercises.length - 1;
    },
    UnlinkFriend(name){
        if(this.Friends.find(x=> x.name == name )){
            this.Friends.pop({ name, score: 0 });
            return this.Friends.length - 1;
        }
        throw new CustomError(409, 'You do not have a friend with that name');
    },
    UnlinkExercise(name){
        if(this.Exercises.find(x=> x.name == name )){
            this.Exercises.pop({ name, score: 0 });
            return this.Exercises.length - 1;
        }
        throw new CustomError(409, 'You do not have this exercise');
    },
    Get_State() {
        return {
            Name: this.Name,
            Weight: this.Weight,
            Height: this.Height,
            Friends: this.Friends,
            Exercises: this.Exercises,
        }
    }
}