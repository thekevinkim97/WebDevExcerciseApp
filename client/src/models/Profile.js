export const Exercise_Server = {
    User: [],
    User_Photo: [
        "https://i.pinimg.com/originals/69/c7/b2/69c7b2d06ce57c340fcae4857cc4f1de.jpg",
    ],
    Weight: [],
    Height: [],
    Friends: [],
    Exercises: [],
    Get_Weight() {
        return this.Weight
    },
    Get_Height() {
        return this.Height
    },
    Get_User_Photo() {
        return User_Photo;
    }
}

export const Exercise_Client = {
    User: [
        { name: "Kevin"},
    ],
    Weight: [
        { weight: 160 },
    ],
    Height: [
        { height: 63 },
    ],
    Friends: [
        { name: "Bernie"},
        { name: "Donald"},
        { name: "Andrew"},
    ],
    Exercises: [
        { name: "Bicep Curls"},
        { name: "Bench Press"},
    ]
}

export class User {
    name;
}