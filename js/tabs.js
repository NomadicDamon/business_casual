function openTab(evt, tabName, tabBtn) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tabbuttons = document.getElementsByClassName("tablinks");
  //.classList.add('active');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('active');
    tabbuttons[i].classList.remove('active');
  }
  document.getElementById(tabName).classList.add('active');
  document.getElementById(tabBtn).classList.add('active');
} 