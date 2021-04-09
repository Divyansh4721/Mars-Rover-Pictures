$('#getimage').click(function () {
  var date= $("#dateentered").val();
  let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
  $.get(url,function(coding){
    for (var i = 0; i < 15; i++) {
      $('body').append('<img src="'+coding.photos[i].img_src+'" id="image1">')
      console.log(coding.photos[i].img_src);
    }
  });
});
