// let promise = new Promise((myResolve, myReject) => {
//     let req = new XMLHttpRequest();
//     req.open(
//       "Get",
//       "https://api.opencagedata.com/geocode/v1/json?q=${12.9147928}+${77.5865094}&key=40f25cef362f4f6590c517d5a721927e"
//     );
//     req.onload = () => {
//       if (req.status == 200) {
//         myResolve("Data get method is successful");
//       } else {
//         myReject("Data get method is not successful");
//       }
//     };
//     req.send();
//   });

//   promise.then(
//     (result) => {
//       console.log("The result of the promise is : " + result);
//     },
//     (error) => {
//       console.log("The result of the promise is : " + error);
//     }
//   );

let myPromise = new Promise((resolve, reject) => {
  let a = [1, 2, 3, 4, 5];
  if (a.includes(1)) {
    resolve("1 is present in the array");
  } else {
    reject("1 is not present in the array");
  }
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
