
 /* this is a function of 3 doctors slides move [owl-carousel] */

$(document).ready(function() {
 var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
});	
  });

  //ye function header & footer ki files include karnay ke kiay hai.

  $(function () {
    $('#mainHeader').load('header.html')
    $('#mainFooter').load('footer.html')
     
                  // start sum funtion. This is just for practice.

const sum =  function(a=10,b=20,...rest){
   let total =  a + b  
   console.log(total,'out of loop')
   //start for loop....
   for (let num of rest) {
    total = total + num;
    console.log(total , 'in loop num',num)
  }
  //return = 0; krnay  kay baad jo code bi likhay gay vo nhi chalay ga.
  return total;
 }
 console.log(sum(30,50,40,30 ,50 ,70),'sum function test')
let  mainfooter =   document.getElementById('mainFooter')
    mainfooter.classList.add('test')
})

                 // end sum function.

//start popup function :-

$(document).on('click', '.popupTrigger, .close' , function(e) {
    $('.popup1').toggle()
    $('.maskoverlay').toggle()
    $('body').toggleClass('scrollNone')

})

//end popup function