$(document).ready(function(){
    $("#sliders").responsiveSlides({
        speed: 700,     //过渡速度
        timeout: 3500,  //两张幻灯片之间变化时间
        pager: true     //展示页码
    });
    
    //wow.js init
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();
});