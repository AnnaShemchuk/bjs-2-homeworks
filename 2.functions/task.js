function getArrayParams(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let avg = sum / arr.length;
  console.log({ min: min, max: max, avg: +avg.toFixed(2) })
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);

  return maxValue - minValue
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let arr = [];

  for (let i= 0; i < arrOfArr.length; i++) {
    arr.push(func(...arrOfArr[i]));
  }
  return Math.max(...arr);
}
