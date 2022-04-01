const generateGrid = (function(){
    const rowClass = 'row';
    const pixelClass = 'pixel';

    return function gridGenerator(size, parent){
        const wrapper = new DocumentFragment();
        for(let i = 0; i < size; i++){
            const row = generateRow(size);
            wrapper.appendChild(row);
        }
        parent.innerHTML = "";
        parent.appendChild(wrapper);
    }

    function generateRow(length){
        const row = createElementWithClassName('div', rowClass);
        for(let i = 0; i < length; i++){
            const pixel = createElementWithClassName('div', pixelClass);
            row.appendChild(pixel);
        }
        return row;
    }

    function createElementWithClassName(element, className){
        const element = document.createElement(element);
        element.classList.add(className);
        return element;
    }
})();