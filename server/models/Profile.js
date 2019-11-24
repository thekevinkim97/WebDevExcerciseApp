const Friends_List = require('./Friends');
const Exercise_List = require('./Exercises');

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