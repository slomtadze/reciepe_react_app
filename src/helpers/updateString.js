export const updateString = (string, limit = 40) => {
  const temp = [];
  if (string.length > limit) {
    string.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        temp.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${temp.join(" ")} ...`;
  } else {
    return string;
  }
};
