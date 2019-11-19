$(document).ready(function () {
  $("#configBTN1").click(function () {
      $("#RME").css("display", "block");
      $("#Extmem").css("display", "none");
      $("#Shmem").css("display", "none");
  });
  $("#configBTN2").click(function () {
      $("#RME").css("display", "none");
      $("#Extmem").css("display", "block");
      $("#Shmem").css("display", "none");
  });
  $("#configBTN3").click(function () {
      $("#RME").css("display", "none");
      $("#Extmem").css("display", "none");
      $("#Shmem").css("display", "block");
  });
});