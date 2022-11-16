const yargs = require("yargs")

console.log(process.argv[2])

const command = process.argv[2]

if(command === "add"){
    console.log('Note added!')
}
else if(command === 'remove'){
    console.log('Note deleted')
}

// try out yargs

// create note using yargs
yargs.command({
    command: 'add',
    describe: 'adding a note',
    builder:{
        title:{
            describe:'Note Title'
        }
    },
    handler: function(){
        console.log('note added')
    }
})

// delete note using yargs
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler: function(){
        console.log('note removed')
    }
})


console.log('Yargs talking: ', yargs.argv)