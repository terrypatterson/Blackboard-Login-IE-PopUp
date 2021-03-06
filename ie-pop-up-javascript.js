//Start Javascript of the Modal Pop-up code
var dialogOpen = false, lastFocus, dialog, okbutton, pagebackground;

function showDialog(el) {
  lastFocus = el || document.activeElement;
  toggleDialog('show');
}
function hideDialog(el) {
  toggleDialog('hide');
}

function toggleDialog(sh) {
  dialog = document.getElementById("box");
  okbutton = document.getElementById("btn-close");
  pagebackground = document.getElementById("bg");
//overlay = document.getElementId("popup-dialog-overlay");

  if (sh == "show") {
      dialogOpen = true;

  // darken the background
  //overlay.style.display = 'block';

      // show the dialog 
      dialog.style.display = 'block';

      // after displaying the dialog, focus an element inside it
      okbutton.focus();
      
      // only hide the background *after* you've moved focus out of the content that will be "hidden"
      pagebackground.setAttribute("aria-hidden","true");
      
  } else {
      dialogOpen = false;
      //overlay.style.display = 'none';
  dialog.style.display = 'none';
      pagebackground.setAttribute("aria-hidden","false");
      lastFocus.focus(); 
  }
}


document.addEventListener("focus", function(event) {

    var d = document.getElementById("popup-dialog");

    if (dialogOpen && !d.contains(event.target)) {
        event.stopPropagation();
        d.focus();
    }

}, true);


document.addEventListener("keydown", function(event) {
    if (dialogOpen && event.keyCode == 27) {
        toggleDialog('hide');
    }
}, true);

document.addEventListener('DOMContentLoaded', function() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    
    if (msie > 0) {
        document.getElementById('btn-open').click()
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        document.getElementById('btn-open').click()
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        document.getElementById('btn-open').click()
    }
    // Commented out, this if statement is used for testing...
    //if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        //Dialog(navDialogEl, dialogOverlay);
        //document.getElementById('btn-open').click();
        //window.alert(5 + 6);
    //}
    // User uses other browser
    return ('Not IE');
});

//End Javascript to embed into the login page
    