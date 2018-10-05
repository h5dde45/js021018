document.getElementById("calc").onclick=function () {
  let flat =
      parseInt(document.getElementById("flat").value);

  if(flat>0 && flat<20) {
      document.getElementById("out").innerHTML = "#1";
  }else  if(flat>20 && flat<60) {
      document.getElementById("out").innerHTML = "#2";
  }else  if(flat>60 && flat<70) {
      document.getElementById("out").innerHTML = "#3";
  }else {
      document.getElementById("out").innerHTML = "err";
  }
};