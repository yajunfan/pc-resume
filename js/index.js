//var sw = new Swiper(".swiper-container", {
//    loop: true,
//    direction: "vertical",
//    /*--当切换结束的时候我需要给当前展示的这个区域增加对应的ID(page1或者page2),从而实现里面子元素的运动--*/
//    onSlideChangeEnd: function (swiper) {
//        //->获取总共的SLIDE
//        var slideAry = swiper.slides,
//            trueNum = slideAry.length - 2,
//            lastIn = trueNum + 1;
//        //->获取当前活动块的索引
//        var curIn = swiper.activeIndex;
//        [].forEach.call(slideAry, function (item, index) {
//            if (index == curIn) {
//                switch (curIn) {
//                    case 0:
//                        item.id = "page" + trueNum;
//                        break;
//                    case lastIn:
//                        item.id = "page1";
//                        break;
//                    default:
//                        item.id = "page" + curIn;
//                }
//                return;
//            }
//            item.id = null;
//        });
//    }
//});


