alert();

$(".sexo").on("change", function() {

switch($.sexo.val()) {

  case "0":
    $(".foto").attr("src", "cara.jpg");
    break;

  case "1":
    $(".foto").attr("src", "niño.png");
    break;

  case "2":
    $(".foto").attr("src", "niña.jpg");
    break;


}
  });
