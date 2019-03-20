alert();

$(".sexo").on("change", function() {

  switch ($(".sexo").val()) {

    case "0":
      $(".foto").attr("src", "imagenes/cara.jpg");
      break;

    case "1":
      $(".foto").attr("src", "imagenes/nino.png");
      break;

    case "2":
      $(".foto").attr("src", "imagenes/nina.jpg");
      break;
  }
});
