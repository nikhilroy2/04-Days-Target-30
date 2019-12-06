// preload remove

window.onload = function() {
    let preload = document.querySelector('.preloader');
    preload.classList.add('remove_preload')
}
let preload_wrapper = '<div class="preload_wrapper>';
preload_wrapper.forEach(myPreload);
