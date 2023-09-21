const getDrawHandlers = function(){
    
    const getColour = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
    const getAchromatic = n => getColour(n,n,n);
    
    const drawPureBlack = () => getAchromatic(0);
    const darkenSquareWithEachPass = t => {
        const currentColour = t.style.backgroundColor; // Either "rgb(n,n,n)" or empty string
        if(!currentColour) return getAchromatic(225);

        const [r, g, b] = currentColour.match(/\d{1,3}/g).map(n => +n);
        const isGreyscaleValue = (r === g) && (g === b);

        if(!isGreyscaleValue) return getAchromatic(225);
        if(r <= 25) return getAchromatic(0);
        return getAchromatic(r - 25);
    };
    const drawRandomColour = () => {
        const [r, g, b] = [0,0,0].map(_ => ~~(Math.random() * 256));
        return getColour(r, g, b);
    };

    const nibs = {
        pen: drawPureBlack, 
        pencil: darkenSquareWithEachPass, 
        glitter: drawRandomColour
    };

    let currentNib = nibs.pen;
    
    const draw = event => {
        const t = event.explicitOriginalTarget || event.target;
        const isPixel = t.classList.contains('pixel');
        const isHoldingMouseButton = event.buttons === 1;
    
        if(isHoldingMouseButton && isPixel) {
            t.style.backgroundColor = currentNib(t);
        }
    };

    const changeNib = type => {
        if (nibs[type]) {
            currentNib = nibs[type];
        }
        else throw new Error(`Invalid nib type '${type}'`);
    };

    return { changeNib, draw };
}
