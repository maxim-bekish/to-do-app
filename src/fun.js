
export default function xxx(arr) {
  const x = [];
  arr.split("").forEach((element) => {
    if (Number(element)) {
      x.push(element);
    }
  });
  console.log("result: " + Number(x.join("")));
  return Number(x.join(""));
}
