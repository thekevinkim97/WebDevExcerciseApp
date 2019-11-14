const Friends_List = require('./Friends');

module.exports.Profile = {
    Name: "Kevin Kim",
    Weight: 150,
    Height: 63,
    Friends:[
        this.Friends_List
    ],
    Get_State() {
        return {
            Name: this.Name,
            Weight: this.Weight,
            Height: this.Height,
            Friends: this.Friends,
        }
    }
}