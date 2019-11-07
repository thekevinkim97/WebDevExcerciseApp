export const Exercise_Server = {
    User: [],
    Weight: [],
    Height: [],
    Get_Weight() {
        return this.Weight
    },
    Get_Height() {
        return this.Height
    },
    Friends: [],
    User_Photo: [
        "http://www.dailyhaha.com/_pics/prepared-to-slice-onions.jpg",
    ],
    Exercises: [],
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
    ]
}

export class User {
    name;
}