function the_min(cost,lengths){ //cost  = list ; n = length of the list of the stairs
    let method = []; // make a empty list

    if (lengths == 1) {
        return cost[0]; //only pay 1 jump of the stair
        // return cost = 0 //return 0 if you can skip the stair
    }

    method.push(cost[0]); //append index1 of the list to the empty list
    method.push(cost[1]); //append index2 of the list to the empty list

    for (let i = 2; i < lengths; i++){ //looping from the index3 of the empty list that is not empty no more ; stop untill i = amount of the stairs - 1 
     method[i] = Math.min(method[i - 1], method[i - 2]) + cost[i]; //find the lowest number between index1 and index2 and plust it with the index3 of the stair price
    }

    return Math.min(method[lengths - 2], method[lengths - 1]); //choosing either the first method is the lowest cost or the other one
}

const prompt = require ('prompt-sync')();
let stairs = prompt("Enter the number of the stairs = ")

no = 0
the_cost = []
for(let a = 0; a<stairs ; a++){
    no += 1
    let cost = parseInt(prompt("The number "+  no + " stair price: "));
    the_cost.push(cost);
}

min = the_min(the_cost, stairs);
console.log(min)

//Sorry for alot of commands