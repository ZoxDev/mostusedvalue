const number = Array.from({ length: 500 }, () => Math.floor(Math.random() * 10));

const getMostUsedItem = <T>(array: Array<T>) => {
  const counts = array.map((item) => {
    const numberOfOccurence = array.filter((el) => el === item);
    const count = numberOfOccurence.reduce((acc) => acc + 1, 0);

    return count;
  });

  const mostUsedItem = counts.reduce((acc, cur) => {
    if (acc < cur) {
      acc = cur;
    }
    return acc;
  });

  console.log(mostUsedItem);
  return mostUsedItem;
};

getMostUsedItem(number);
