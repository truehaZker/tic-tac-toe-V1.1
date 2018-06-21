
// Global vars
var turn = 0;
var a,b,c,d,e,f,g,h,i;
a=b=c=d=e=f=g=h=i=null;
var cell = [a, b, c, d, e, f, g, h, i];

$(document).ready(function() {

  // ASSIGNMENT OF THE STAUS
  $('.cell').click(function() {

    // Check if cell is assigned and who's the turn
    if ( cell[this.id] === null && turn == 0) {
      $(this).append("<div class='x'></div>");
      turn = 1;
      cell[this.id] = 0;
    }
    else if ( cell[this.id] === null && turn == 1) {
      $(this).append("<div class='o'></div>");
      turn = 0;
      cell[this.id] = 0;
    }
    else {
      $(this).children().animate({scale: 1.1}, 100).animate({scale: 1}, 100);
    }
  });
});
