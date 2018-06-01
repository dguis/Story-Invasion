function B () {
  DM = document.getElementById('DM');
  DM.style = "display: inline; position: absolute;";
  DM.style.left = document.getElementById('1').getBoundingClientRect().left+10 + 'px';
  DMulti = document.getElementById('1');
  DMulti.style = "color: #005CFA;";
}
function BA () {
  DM = document.getElementById('DM');
  DM.style = "display: none;";
  DMulti = document.getElementById('1');
  DMulti.style = "color: #008CFF;";
}
