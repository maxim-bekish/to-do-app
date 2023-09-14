
export default function convertFromStringToNumber(arr) {
  const x = [];
  arr.split("").forEach((element) => {
    if (Number(element)) {
      x.push(element);
    }
  });
 
  return Number(x.join(""));
}
