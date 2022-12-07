export const getRndmNumbers = (maxNum = 10, count = 3) => {
  const tempArray = [];
  for (let i = 0; i < count; i++) {
    const rndmNum = Math.floor(Math.random() * maxNum);
    console.log(rndmNum);
    const numExists = tempArray.find((num) => num === rndmNum);
    console.log(numExists);
    numExists ? tempArray.push(rndmNum + 1) : tempArray.push(rndmNum);
  }
  return tempArray;
};
