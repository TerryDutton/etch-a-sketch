const darkenPixel = function(event){
    const t = event.explicitOriginalTarget;
    if(t.classList.contains('pixel')) t.style.backgroundColor = "red";
}