function scrollUp(duration, easing) {
    // Variables
    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, 0);
        return;
    }
    // Animation
    function scroll() {
        var now = 'now' in window.performance ? performance.now() : new Date().getTime();
        var time = Math.min(1, ((now - startTime) / duration));
        var timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (0 - start)) + start));
        if (window.pageYOffset === 0) {
            return;
        }
        requestAnimationFrame(scroll);
    }
    // Move
    scroll();
}
// Variables
var buttonUp = document.querySelector('a[href="#up"]');
var easings = {
    linear(t) {
        return t;
    },
    easeInQuad(t) {
        return t * t;
    },
    easeOutQuad(t) {
        return t * (2 - t);
    },
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
        return t * t * t;
    },
    easeOutCubic(t) {
        return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
        return t * t * t * t;
    },
    easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
        return t * t * t * t * t;
    },
    easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
};
// Event
buttonUp.addEventListener('click', function () {
    // Get attributes
    var duration = parseInt(buttonUp.getAttribute('duration')) || 1000;
    var easing = buttonUp.getAttribute('easing') || 'easeInOutQuad';
    // Run
    scrollUp(duration, easing);
});

/* 
* Scroll to the top
*/

$(window).bind("scroll", display);
function display() {
    if ($(document).scrollTop() > 300) {
        //$("#top").show();
        $("#top").fadeIn(300);
    } else {
        //$("#top").hide();
        $("#top").fadeOut(300);
    }
}

/* 
* Tab of posts
*/
$(document).ready(function () {
    var tabContainer = $(".posts-tabs");
    if (tabContainer.length) {
        $(".tab-two").bind("click", showTabTwo);
        $(".tab-one").bind("click", showTabOne);
    }
    function showTabOne() {
        $(".tab-one").addClass("active");
        $(".tab-two").removeClass("active");
        $(".tab-two-list").addClass("tab-hidden");
        $(".tab-one-list").removeClass("tab-hidden");
        $(".page-holder-two").addClass("tab-hidden");
        $(".page-holder-one").removeClass("tab-hidden");
    }
    function showTabTwo() {
        $(".tab-two").addClass("active");
        $(".tab-one").removeClass("active");
        $(".tab-one-list").addClass("tab-hidden");
        $(".tab-two-list").removeClass("tab-hidden");
        $(".page-holder-one").addClass("tab-hidden");
        $(".page-holder-two").removeClass("tab-hidden");
    }
})

/*
 * Pagination
 */
$(function () {
    /* initiate the plugin */
    $("div.page-holder-one").jPages({
        containerID: "pag-itemContainer-one",
        previous: "??",
        next: "??",
        perPage: 5,  /* num of items per page */
        startPage: 1,
        startRange: 1,
        midRange: 4,
        endRange: 1,
        direction: "auto"
    });
    $("div.page-holder-two").jPages({
        containerID: "pag-itemContainer-two",
        previous: "??",
        next: "??",
        perPage: 5,  /* num of items per page */
        startPage: 1,
        startRange: 1,
        midRange: 4,
        endRange: 1,
        direction: "auto"
    });
});