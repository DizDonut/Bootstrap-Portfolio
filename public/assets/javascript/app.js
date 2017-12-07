function addPrevClass (e) {
  var target = e.target;
    if(target.getAttribute('src')) { // check if it is img
      var li = target.parentNode.parentNode;
      var prevLi = li.previousElementSibling;
      if(prevLi) {
        prevLi.className = 'prev';
      }

      target.addEventListener('mouseout', function() {
        prevLi.removeAttribute('class');
      }, false);
  }
}

if (window.addEventListener) {
  document.getElementById("dock").addEventListener('mouseover', addPrevClass, false);
}

//https://css-tricks.com/snippets/css/typewriter-effect/

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Hi - I'm Mike.",
                   "In June 2016 I started a journey.",
                   "A journey to transition my career into the beautiful world of development.",
                   "It hasn't been easy.",
                   "2 bootcamps, several paperbacks, hours and hours of online tutorials.  Late nights, long weekends.  All while working.",
                   "Did I mention we had our first son in March 2017 as well?  To say it's been stressful would be an understatment.",
                   "Charlotte, NC.",
                   "Cheers!"
                 ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h3
     document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 75);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback === 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }

  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] === 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i <= dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
