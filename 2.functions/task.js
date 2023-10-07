function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0;
  let sum = null;

  for (let i = 0; i<arr.length; i++){
    if(max<arr[i]){
      max = arr[i];
    }
    if(min>arr[i]){
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }

  let sum = null;

  for (let i = 0; i<arr.length; i++){
    sum = sum + arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let total = max - min;

  return total;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }

  let sumEvenElement = null;
  let sumOddElement = null;
  let total = 0;

  for (let i = 0; i<arr.length; i++){
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    }
    else{
      sumOddElement += arr[i];
    }
  }

  total = sumEvenElement - sumOddElement;
  return total;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }

  let sumEvenElement = null;
  let countEvenElement = 0;
  let avg = 0;

  for (let i = 0; i<arr.length; i++){
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  avg = sumEvenElement/countEvenElement;
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++){
    let getFunc = func(...arrOfArr[i]);
    if (maxWorkerResult < getFunc){
      maxWorkerResult = getFunc;
    }
  }

  return maxWorkerResult;
}
