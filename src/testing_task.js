/* eslint-disable no-unreachable */
/* eslint-disable no-console */
function swapHeadAndTail(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const sizeHeadTail = Math.floor(arr.length / 2);
  const head = arr.slice(0, sizeHeadTail);
  const tail = arr.slice(-sizeHeadTail);
  console.log(sizeHeadTail, head, tail);
  arr.splice(0, sizeHeadTail, tail).splice(-sizeHeadTail, sizeHeadTail, head);
  return arr;
}

swapHeadAndTail([1, 2]);
