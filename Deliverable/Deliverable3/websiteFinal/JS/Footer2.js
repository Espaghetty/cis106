jSuites.calendar(document.getElementById('calendar'), {
    format: 'MM/DD/YYYY',
    time: true,
});

document.getElementById('animation-fade-in-and-out').onclick = function() {
    var button = document.getElementById('animation-content');
    if (button.style.display == 'none') {
        jSuites.animation.fadeIn(button, function() {
            // Callback to do something when animation is finished
        });
    } else {
        jSuites.animation.fadeOut(button, function() {
            // Callback to do something when animation is finished
        });
    }
}