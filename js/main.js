/*global $, document, window */

$(function () {
    'use strict';


    var mylink = $('.navbar .navbar-nav .nav-link'),
        owlLeft = $('#left-carousel'),
        owlGallery = $('#gallery-carousel'),
        a = 0;

//    Navbar Animation
    /*mylink.hover(function () {
        
        $(this).parent().addClass('animated fadeInDown').siblings().removeClass('animated fadeInDown');

    }).click(function () {
        
        $(this).parent().addClass('active animated fadeInDown').siblings().removeClass('active animated fadeInDown');

    });*/

    

    mylink.click(function () {
        $('html, body').animate({
            scrollTop: $(('#' + $(this).data('scroll'))).offset().top - 50
        }, 1000);
            
    });
   
    // Start Msg within Scrolling
    
    //    Sync Navbar links with Sections
    $(window).scroll(function () {
        
        $('.section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 70) {
                var sectionId = $(this).attr('id');
                if (!$('.navbar .navbar-nav .nav-item a[data-scroll="' + sectionId + '"]')
                                   .hasClass('active')) {
                    
                    $('.navbar .navbar-nav .nav-item a[data-scroll="' + sectionId + '"]').parent()
                        .addClass('active animated fadeInDown').siblings().removeClass('active');
                }
            }
            
        });
        
        
    });
    
    
    $('.to-top i, .navbar .navbar-brand').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
    

    $('.navbar .navbar-brand').on('mouseover', function () {
        $(this).addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated fadeInDown');
        });
    });
 
    // Header Carousel 
    $('#carouselSlid').carousel({
        interval: 2000
    });

    
//    #left-carousel Design in About Section
    if (owlLeft.length) {
        owlLeft.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            autoHeight: true,
            animateOut: 'bounceOut',
            animateIn: 'bounceIn',
            items: 1
        });
    }
    
    if ($('#rtlleft-carousel').length) {
        $('#rtlleft-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            autoHeight: true,
            animateOut: 'bounceOut',
            animateIn: 'bounceIn',
            items: 1
        });
    }
    
    
//    project-carousel
    if ($('.project-carousel').length) {
        $('.project-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
//            smartSpeed: 1000,
            autoHeight: true,
            animateOut: 'fadeOutRight',
            animateIn: 'fadeInLeft',
            items: 1
        });
    }
    
    
    if (owlGallery.length) {
        owlGallery.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 2000,
            items: 1
        });
    }

    // Listen to owl events:
    $('.fa-angle-right').click(function () {
        
        owlGallery.trigger('next.owl.carousel', [1000]);
    });
    // Go to the previous item
    $('.fa-angle-left').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlGallery.trigger('prev.owl.carousel', [1000]);
    });
    
    function validateForm() {
        
        var name =  document.getElementById('name').value,
            email =  document.getElementById('email').value,
            subject =  document.getElementById('subject').value,
            message =  document.getElementById('message').value;
        if (name == "") {
            document.querySelector('.status').innerHTML = "Name cannot be empty";
            return false;
        }
        
        if (email == "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty";
            return false;
        } else {
            
            var re = /^(([\^<>()\[\]\\.,;:\s@"]+(\.[\^<>()\[\]\\.,;:\s@"]+)*)|\("\.+"\))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]\{1,3\}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                document.querySelector('.status').innerHTML = "Email format invalid";
                return false;
            }
        }
        
        if (subject == "") {
            document.querySelector('.status').innerHTML = "Subject cannot be empty";
            return false;
        }
        
        if (message == "") {
            document.querySelector('.status').innerHTML = "Message cannot be empty";
            return false;
        }
        
        document.querySelector('.status').innerHTML = "Sending...";
    }
    
    validateForm();
    
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),

            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        
        $('.about').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInLeft animated');
            }
        });

        
    });
    
    $('#page-footer .fontawesomes img').on('mouseover', function () {
        $(this).addClass('animated rotateIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated rotateIn');
        });
    });
    
//    Structure Page
//    Animation on img hove
    $('.structure .person .person-img').on('mouseover', function () {
        $(this).addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated pulse');
        });
    });
 
    //    Footer Count Down    
    $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });

});
