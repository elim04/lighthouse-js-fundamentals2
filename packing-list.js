const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"]

console.log("Kitchen stuff to pack: ");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

// to access only one item, we can look at the specific index number
packingList[3];