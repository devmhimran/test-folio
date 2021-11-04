
const handleMousePos = (e) => {
    const CURSOR = document.querySelector('#mouse-cursor');
    const HOVER = document.querySelectorAll('.cursor-hover');
    const { pageX: posX, pageY: posY } = e;

    const runMouseOver = () => {
        CURSOR.style.transform = 'scale(4)';
        CURSOR.style.background = '#fff';
    };
    HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

    const runMouseLeave = () => {
        CURSOR.style.transform = '';
        CURSOR.style.background = '';
    };
    HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
    
    return (
        CURSOR.style.left = `${posX - 20}px`,
        CURSOR.style.top = `${posY - 20}px`  
    );
    };
    document.addEventListener('mousemove', handleMousePos);