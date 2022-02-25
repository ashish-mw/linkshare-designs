function myFunction() {
  var x = document.getElementById('theme-checkbox');
  if (x.checked == true) {
    document.body.classList.add = 'dark';
  } else {
    document.body.classList.remove = 'dark';
  }
}
