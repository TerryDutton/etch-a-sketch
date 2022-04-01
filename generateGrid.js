const generateGrid = (function(){
    const rowClass = 'row';
    const pixelClass = 'pixel';

    return function gridGenerator(size, parent, onMouseOverPixel){
        const wrapper = new DocumentFragment();
        for(let i = 0; i < size; i++){
            const row = generateRow(size, onMouseOverPixel);
            wrapper.appendChild(row);
        }
        parent.innerHTML = "";
        parent.appendChild(wrapper);
    }

    function generateRow(length, onMouseOverPixel){
        const row = createElementWithClassName('div', rowClass);
        for(let i = 0; i < length; i++){
            const pixel = createElementWithClassName('div', pixelClass);
            pixel.addEventListener('mouseover', onMouseOverPixel);
            row.appendChild(pixel);
        }
        return row;
    }

    function createElementWithClassName(element, className){
        const e = document.createElement(element);
        e.classList.add(className);
        return e;
    }
})();