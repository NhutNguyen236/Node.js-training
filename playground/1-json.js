const fs = require('fs')

const pig_house = {
    name: 'The pig house',
    quantity: 100,
    color: 'black'
}

// stringify a json object
const pig_house_str = JSON.stringify(pig_house)
console.log(pig_house)
console.log(pig_house_str)

// parse the stringified json object back to json obj
const pig_house_parsed = JSON.parse(pig_house_str)
console.log(pig_house_parsed.name)

// read json obj from 1-json.json
const dataBuffer = fs.readFileSync('1-json.json')
const dataStr = dataBuffer.toString()
