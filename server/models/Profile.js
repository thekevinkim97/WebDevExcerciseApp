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
    Join(name){
        if(this.Friends.find(x=> x.name == name )){
            throw new CustomError(409, 'Another user is already using that name.');
        }
        this.Friends.push({ name, score: 0 });
        return this.Friends.length - 1;
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