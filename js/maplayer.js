$(document).ready(run);

function run() {

  $("iframe").before('<div id="mapLayer">');

  $('#mapLayer').css({
    "position" : "absolute",
    "width" : "100%",
    "height" : $("iframe").attr("height"),
    "z-index" : "10000"
  });

  $('#mapLayer').click(mapLayerHide);
  
  function mapLayerHide() {
    $(this).hide();
  }

}
