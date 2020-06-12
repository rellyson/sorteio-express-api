const EntitySchema = require("typeorm").EntitySchema;
const {BaseEntity} = require("typeorm");

class Raffle extends BaseEntity{
    id
    winner
    number
}

const Schema = new EntitySchema({
    name: "raffle",
    target: Raffle,
    columns:{
        id: {
            primary: true,
            type: "int",
            generated:true
        },
        winner: {
            type: "text"
        },
        number: {
            type: "float"
        }
    }
});

module.exports ={
    Raffle,
    Schema
}