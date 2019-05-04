// drawOOB() {
//   let { oX, oY } = this.origin;
//
//   let height = floor.level.length * 50;
//   let width = floor.level[0].length * 50;
//
//   if (oX < 0) {
//     // fill('brown');
//     // rect(width - (0 - oX), 0, 0 - oX, 500);
//
//     for (var i = width - (0 - oX); i <= (0 - oX); i += 50) {
//       push()
//       translate(i, 0);
//       for (var j = 0; j < 500; j += 50) {
//         push();
//         translate(0, j);
//         image(snow_tile, 0, 0, 50, 50);
//         pop();
//       }
//       pop();
//     }
//   }
//   if (oX > 0) {
//     fill('brown');
//     rect(0, 0, oX, 500);
//   }
//   if (oY < 0) {
//     fill('brown');
//     rect(0, height - (0 - oY), 500, 0 - oY);
//   }
//   if (oY > 0) {
//     fill('brown');
//     rect(0, 0, 500, oY);
//   }
// }
