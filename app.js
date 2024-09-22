let command = prompt("What would you like to do?")
const list = [];

while(command !== "quit" && command !== "q"){
if(command === "new"){
    let task = prompt("Enter new task")
    list.push(task);
    console.log(`${task} added to the list`)
}
else if(command === "list"){
    console.log("********");
    for(let i=0 ; i<list.length ; i++){
        console.log(`${i}: ${list[i]}`);
    }
    console.log("********");
}
else if(command === "delete"){
    const index = parseInt(prompt("Enter the index number of the item you want to delete."));
    if(!Number.isNaN(index)){
        const deleted = list.splice(index,1);
        console.log(`Deleted ${deleted[0]}`)
    }
    else{ 
        console.log("Unknown index") 
    }
}
else{
    console.log("Enter a valid Input!")
}
    command = prompt("What would you like to do?")
}
console.log("QUITING THE APP.")