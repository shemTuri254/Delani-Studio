$(document).ready(function() {

    $("#design").click(function(){
      $("#design-revealed").toggle();
      $(".hide-design-image").toggle();
    })

    $("#development").click(function(){
        $("#development-revealed").toggle();
        $(".hide-development-image").toggle();
      })

      $("#product-management").click(function(){
        $("#product-management-revealed").toggle();
        $(".hide-product-management-image").toggle();
      })

      $(".Hover").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      })
    $('.submit').click(function () {
            var Name = $('#mce-FNAME').val();
            var Email = $('#mce-EMAIL').val();
            var Message = $('#mce-MESSAGE');
            var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
            if (Name == '' || Email == '' || Message == '') {
                alert('Please make sure you have filled in the form correctly!');
            } else {
                alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
            }
      });

      
})