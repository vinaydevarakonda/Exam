
function today() {
 var date = document.getElementById("date");
  var month = document.getElementById("month");
  var year = document.getElementById("year");
  var hour = document.getElementById("hour");
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
  var curdate = new Date();
  date.innerText = curdate.getDate();
  month.innerText = curdate.getMonth();
  year.innerText = curdate.getUTCFullYear();
  hour.innerText = curdate.getUTCHours();
  min.innerText = curdate.getMinutes();
  sec.innerText = curdate.getSeconds();
  setTimeout(() => today(), 500);
}