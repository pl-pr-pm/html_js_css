const arr = [1,2,3,4,5];

const loop_callback = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const callback = (target) => {
  console.log(target);
}

loop_callback(arr, callback)