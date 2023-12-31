var profitableSlider=new Swiper(".profitable-slider",{slidesPerView:4,spaceBetween:0,resizeObserver:true,updateOnWindowResize:true,freeMode:true,speed:1500,grabCursor:true,loop:true,autoplay:{delay:2500,},breakpoints:{0:{slidesPerView:1.1,},500:{slidesPerView:1.8,},700:{slidesPerView:2.3,},940:{slidesPerView:3,},1200:{slidesPerView:4,},},});$(".profitable-slider").mouseenter(function(){profitableSlider.autoplay.stop();});$(".profitable-slider").mouseleave(function(){profitableSlider.autoplay.start();});var pricCards=new Swiper('.pric-cards',{slidesPerView:4,spaceBetween:20,resizeObserver:true,freeMode:true,watchSlidesProgress:true,watchState:true,updateOnWindowResize:true,watchSlidesVisibility:true,grabCursor:true,speed:1500,breakpoints:{0:{slidesPerView:1,},375:{slidesPerView:1.4,},540:{slidesPerView:2.2,},754:{slidesPerView:3.2,},1024:{slidesPerView:3.6,},1200:{slidesPerView:4,},},});var serviceList=new Swiper('.service-list',{slidesPerView:4,spaceBetween:20,resizeObserver:true,freeMode:true,watchSlidesProgress:true,watchState:true,updateOnWindowResize:true,watchSlidesVisibility:true,grabCursor:true,speed:1500,grid:false,observer:true,observeParents:true,navigation:{nextEl:'.service-next',prevEl:'.service-prev',},breakpoints:{0:{slidesPerView:1.4,grid:{rows:2,fill:'column'},},340:{slidesPerView:2,grid:{rows:2,fill:'column'},},500:{slidesPerView:3,grid:{rows:2,fill:'column'},},600:{slidesPerView:3.5,grid:{rows:2,fill:'column'},},640:{slidesPerView:4,grid:false,},800:{slidesPerView:5,grid:false,},900:{slidesPerView:5.5,},1200:{slidesPerView:6,},},});var blogSlider=new Swiper('.last-coin-slider',{slidesPerView:1,spaceBetween:0,resizeObserver:true,watchState:true,updateOnWindowResize:true,watchSlidesVisibility:true,speed:1500,autoplay:{delay:4000,disableOnInteraction:false,},pagination:{el:".last-coin-pagination",clickable:true,},});var pricCards=new Swiper('.most-demanded',{slidesPerView:3,spaceBetween:20,resizeObserver:true,freeMode:true,watchSlidesProgress:true,watchState:true,updateOnWindowResize:true,watchSlidesVisibility:true,grabCursor:true,speed:1500,breakpoints:{0:{slidesPerView:1,},375:{slidesPerView:1.4,},540:{slidesPerView:2.2,},600:{slidesPerView:2.8,},889:{slidesPerView:1.8,},1024:{slidesPerView:2.3,},1150:{slidesPerView:1.8,},1200:{slidesPerView:2.1,},1350:{slidesPerView:2.5,},},});var pricCards=new Swiper('.trainings-slider',{slidesPerView:3,spaceBetween:20,resizeObserver:true,freeMode:true,watchSlidesProgress:true,watchState:true,updateOnWindowResize:true,watchSlidesVisibility:true,grabCursor:true,speed:1500,navigation:{nextEl:'.trainings-next',prevEl:'.trainings-prev',},breakpoints:{0:{slidesPerView:1,},375:{slidesPerView:1.1,},540:{slidesPerView:1.4,},600:{slidesPerView:1.8,},780:{slidesPerView:2.2,},889:{slidesPerView:2.5,},1024:{slidesPerView:2.3,},1200:{slidesPerView:2.5,},1350:{slidesPerView:3.5,},},});var pricCards=new Swiper('.news-slider',{slidesPerView:3,spaceBetween:20,resizeObserver:true,freeMode:true,watchSlidesProgress:true,watchState:true,updateOnWindowResize:true,watchSlidesVisibility:true,grabCursor:true,speed:1500,navigation:{nextEl:'.news-next',prevEl:'.news-prev',},breakpoints:{0:{slidesPerView:1,},375:{slidesPerView:1.1,},540:{slidesPerView:1.4,},600:{slidesPerView:1.8,},780:{slidesPerView:2.2,},889:{slidesPerView:2.5,},1024:{slidesPerView:2.3,},1200:{slidesPerView:2.5,},1350:{slidesPerView:3.5,},},});var pricCards=new Swiper('.story-slider',{slidesPerView:3,spaceBetween:20,resizeObserver:true,freeMode:true,watchSlidesProgress:true,watchState:true,updateOnWindowResize:true,watchSlidesVisibility:true,grabCursor:true,speed:1500,navigation:{nextEl:'.story-next',prevEl:'.story-prev',},breakpoints:{0:{slidesPerView:1.2,},500:{slidesPerView:2.2,},540:{slidesPerView:2.2,},600:{slidesPerView:2.8,},889:{slidesPerView:3.2,},1150:{slidesPerView:3.3,},1200:{slidesPerView:3.8,},1350:{slidesPerView:4.5,},},});checkedSlider=new Swiper('.checked-list-slider',{slidesPerView:"auto",spaceBetween:10,freeMode:true,grabCursor:true,speed:1500,slidesOffsetAfter:50,slidesOffsetBefore:30,navigation:{nextEl:'.scroll-left-btn',prevEl:'.scroll-right-btn',},});


/* new sliderange js codes */
(function() {

    var parent = document.querySelector("#rangeSlider");
    if(!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function(el) {
        el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
                // var tmp = slide2;
                // slide2 = slide1;
                // slide1 = tmp;
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function(el) {
        el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

})();
