import $ from "jquery";
import "../css/style.css";

$(document).ready(function() {
    // 
    let $bgPane = $(".bgpane");
    let $slides = $(".slide");

    let state = {
        slide1: {
            active: false
        },
        slide2: {
            active: false
        },
        slide3: {
            active: false
        },
        slide4: {
            active: false
        }
    };

    let slide1SliderInterval = null;
    let activeSliderSlide = 1;
    let $sliderSlide1 = $("#slide-1 .slider-1");
    let $sliderSlide2 = $("#slide-1 .slider-2");
    let $sliderSlide3 = $("#slide-1 .slider-3");
    let $hpara = $(".hpara");
    let $slideHeader = $(".slide-header");
    let $slideHPara = $slideHeader.find(".hpara");
    
    $slides.on("click", handleSlideClick);
    function handleSlideClick(evt) {
        let $this = $(this);
        let slide = $this.data("slide");
        if(state["slide" + slide].active) {
            $bgPane.removeClass("active");
            $slides.removeClass("inactive");
            $this.removeClass("active");
            state["slide" + slide].active = false;
            
            if(slide === 1) {
                $sliderSlide2.removeClass("active");
                $sliderSlide3.removeClass("active");
                $sliderSlide1.addClass("active");
                clearInterval(slide1SliderInterval);
                console.log("Here");
            }
            $hpara.addClass("active");
            $slideHPara.removeClass("active");
            $slideHeader.removeClass("active");
        } else {
            $bgPane.addClass("active");
            $slides.addClass("inactive");
            $this.removeClass("inactive").addClass("active");
            state["slide" + slide].active = true;
            if(slide === 1) {
                slide1SliderInterval = setInterval(function() {
                    if(activeSliderSlide == 1) {
                        $sliderSlide1.removeClass("active");
                        $sliderSlide2.addClass("active");
                        activeSliderSlide = 2;
                    } else if(activeSliderSlide == 2) {
                        $sliderSlide2.removeClass("active");
                        $sliderSlide3.addClass("active");
                        activeSliderSlide = 3;
                    } else  if(activeSliderSlide == 3) {
                        $sliderSlide3.removeClass("active");
                        $sliderSlide1.addClass("active");
                        activeSliderSlide = 1;
                    }
                }, 1500);
            }
            $hpara.removeClass("active");
            $slideHeader.find(".hpara-" + slide).addClass("active");
            $slideHeader.addClass("active");
        }
    }

    $bgPane.on("click", function() {
        $bgPane.removeClass("active");
        $slides.removeClass("inactive");
        $slides.removeClass("active");
        state.slide1.active = false;
        state.slide2.active = false;
        state.slide3.active = false;
        state.slide4.active = false;
        $hpara.addClass("active");
        $slideHPara.removeClass("active");
        $slideHeader.removeClass("active");
        clearInterval(slide1SliderInterval);
    });

    function PageLoadingCounter() {
        let pageLoader = document.getElementById("page-loader");
        let loaderBar = document.getElementById("loader-bar");
        
        let width = 0;

        let pageLoaderCount = setInterval(function() {
            // let c = parseInt(counter.textContent);
            // counter.textContent = (++c).toString();
            loaderBar.style.width = (width += 2).toString() + "%";
            if(width === 100) {
                clearInterval(pageLoaderCount);
                setTimeout(function() {
                    // counter.classList.add("opacity-0");
                    // loaderLogo.classList.remove("opacity-0");
                    setTimeout(function() {
                        pageLoader.classList.add("hide");
                        // sessionStorage.setItem('visited', 'true');
                    });
                }, 60);
            }
        }, 100);

    }
    PageLoadingCounter();
});
