function createBall(id) {
    let ball = document.createElement("div");
    ball.classList = "ball";
    ball.textContent = id;
    document.body.appendChild(ball);
  }
  
  // 1
  // for (let i = 1; i <= 100; i++) {
  //   createBall(i)
  // }
  
  // 2
  // let i = 1;
  // while (i <= 10) {
  //   createBall(i);
  //   i++;
  // }
  
  // 3
  // let i = 1;
  // do {
  //   createBall(i);
  //   i++;
  // } while (i <= 100);
  
  // 4
  // let list = [1, 2, 3, 4, 5, 6];
  // list.forEach(function (item) {
  //   createBall(item);
  // });
  // list.forEach((item) => createBall(item));
  
  // 5
  // for (let item of list) {
  //   createBall(item);
  // }
  
  // 6
  // list.map(function (item) {
  //   createBall(item);
  // });
  // list.map((item) => createBall(item));