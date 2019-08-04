
//call, apply
//both function and obj are in the global context
let laptop = {
    processor: "CORE i5 8th Gen",
    brand: "ThinkPad, Lenovo"
}

function displayItemDetails(owner){
    return `A ${this.brand} was issued to ${owner}. Processor Details: ${this.processor}`;
}
let r=displayItemDetails.apply(laptop,["samer"]);
console.log(r)