

"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function(event) {

    // options
    const breakpoints = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140
    };
    
    var preloader = d.querySelector('.preloader');
    if(preloader) {

        const animations = ['oneByOne', 'delayed', 'sync', 'scenario'];

        new Vivus('loader-logo', {duration: 80, type: 'oneByOne'}, function () {});

        setTimeout(function() {
            preloader.classList.add('show');
        }, 1500);
    }

    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // dropdowns to show on hover when desktop
    if (d.body.clientWidth > breakpoints.lg) {
        var dropdownElementList = [].slice.call(document.querySelectorAll('.navbar .dropdown-toggle'))
        dropdownElementList.map(function (dropdownToggleEl) {
            var dropdown = new bootstrap.Dropdown(dropdownToggleEl);
            var dropdownMenu = d.querySelector('.dropdown-menu[aria-labelledby="' + dropdownToggleEl.getAttribute('id') + '"]');

            dropdownToggleEl.addEventListener('mouseover', function () {
                dropdown.show();
            });
            dropdownToggleEl.addEventListener('mouseout', function () {
                dropdown.hide();
            });

            dropdownMenu.addEventListener('mouseover', function () {
                dropdown.show();
            });

            dropdownMenu.addEventListener('mouseout', function () {
                dropdown.hide();
            });
            
        });
    }

    [].slice.call(d.querySelectorAll('[data-background]')).map(function(el) {
        el.style.background = 'url(' + el.getAttribute('data-background') + ')';
    });

    [].slice.call(d.querySelectorAll('[data-background-color]')).map(function(el) {
        el.style.background = 'url(' + el.getAttribute('data-background-color') + ')';
    });

    [].slice.call(d.querySelectorAll('[data-color]')).map(function(el) {
        el.style.color = 'url(' + el.getAttribute('data-color') + ')';
    });

    
    // Toasts
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    if (d.querySelector('.current-year')) {
        d.querySelector('.current-year').textContent = new Date().getFullYear();
    }

});