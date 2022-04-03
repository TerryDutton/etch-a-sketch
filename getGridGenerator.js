const getGridGenerator = function(){
    const rowClass = 'row';
    const pixelClass = 'pixel';

    const createElementWithClassName = function(element, className){
        const e = document.createElement(element);
        e.classList.add(className);
        return e;
    };

    const generateRow = function(length){
        const row = createElementWithClassName('div', rowClass);
        for(let i = 0; i < length; i++){
            const pixel = createElementWithClassName('div', pixelClass);
            row.appendChild(pixel);
        }
        return row;
    };

    const gridGenerator = function(size, parent){
        const wrapper = new DocumentFragment();
        for(let i = 0; i < size; i++){
            const row = generateRow(size);
            wrapper.appendChild(row);
        }
        parent.innerHTML = "";
        parent.appendChild(wrapper);
    };

    return gridGenerator;
};