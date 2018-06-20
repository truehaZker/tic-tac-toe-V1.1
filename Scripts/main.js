
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

    }
    else if ( cell[this.id] === null && turn == 1) {

    }
    else {
      alert("placed!")
    }
  });

});
