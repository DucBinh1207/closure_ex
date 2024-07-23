// Su dung de quy
function sum(number) {
  let total = 0;

  function sumGenerator() {
    if (number === 0) {
      return total;
    } else {
      console.log("total = " + total + " + " + number);
      total += number--;
    }

    return sumGenerator();
  }

  return sumGenerator();
}

// console.log(sum(10));
// console.log(sum(5));

////////////////////////

function counter() {
  let sum = 0;
  function count() {
    console.log("Đã gọi hàm " + ++sum + " lần");
  }
  return count;
}

const countFunction = counter();
// countFunction();
// countFunction();
// countFunction();

// //EM LÀM SAI Ở ĐÂU VỚI CÁCH DƯỚI Ạ

// function counter() {
//   let sum = 0;
//   function count() {
//     console.log("Đã gọi hàm " + ++sum + " lần");
//   }
//   return count();
// }

// const countFunction = counter;
// countFunction();
// countFunction();
// countFunction();

////////////////////////

function createSecurityCode() {
  let securityCode;
  return {
    setCode(code) {
      securityCode = code;
    },
    getCode() {
      console.log(securityCode);
    },
  };
}

const newCode = createSecurityCode();
newCode.setCode(100);
newCode.getCode();
