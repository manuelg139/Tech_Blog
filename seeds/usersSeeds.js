const { Users } = require('../models');

const userData = [
    {
        name: "Michael Scott",
        username: "michael_angelo",
        github: "michaelTheAngel",
        email: "michaelTheAngel@me.com",
        password: "michaelTheAngel"
    },
    {
        name: "Jim Halper",
        username: "BigTuna",
        github: "BigTuna90",
        email: "BigTuna90@me.com",
        password: "BigTuna90"
    },
    {
        name: "Dwight Schrute",
        username: "DangerSchruteMan",
        github: "DangerSchruteMan25",
        email: "DangerSchruteMan25@me.com",
        password: "DangerSchruteMan25"
    },
    {
        name: "Pam Beesly",
        username: "PamaLamaDingDong",
        github: "PamaLamaDingDong458",
        email: "PamaLamaDingDong458@me.com",
        password: "PamaLamaDingDong458"
    },
    {
        name: "Angela Martin",
        username: "sentorWife12",
        github: "sentorWife12",
        email: "sentorWife12@me.com",
        password: "sentorWife12"
    },
    {
        name: "Kelly Kappor",
        username: "helloKittyQueen",
        github: "helloKittyQueen78",
        email: "helloKittyQueen78@me.com",
        password: "helloKittyQueen78"
    },
   
   
]

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;