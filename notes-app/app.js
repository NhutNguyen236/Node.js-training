const yargs = require("yargs")
const notes = require("./notes")

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
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
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

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})


console.log('Yargs talking: ', yargs.argv)