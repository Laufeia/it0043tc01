const flexContainer = document.getElementById('flex-container');

document.getElementById('reset-flexbox').addEventListener('click', () => {
    flexContainer.style.flexDirection = 'row';
    flexContainer.style.justifyContent = 'flex-start';
    flexContainer.style.alignItems = 'flex-start';
    flexContainer.style.gap = '0px';

    Array.from(flexContainer.children).forEach(box => {
        box.style.flexGrow = '0';
    });
});

document.getElementById('set-gap').addEventListener('click', () => {
    const gapSize = document.getElementById('gap-size').value;
    flexContainer.style.gap = `${gapSize}px`;
});

document.querySelectorAll('button[data-direction]').forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.getAttribute('data-direction');
        flexContainer.style.flexDirection = direction;
    });
});

document.querySelectorAll('button[data-justify]').forEach(button => {
    button.addEventListener('click', () => {
        const justifyContent = button.getAttribute('data-justify');
        flexContainer.style.justifyContent = justifyContent;
    });
});

document.querySelectorAll('button[data-align]').forEach(button => {
    button.addEventListener('click', () => {
        const alignItems = button.getAttribute('data-align');
        flexContainer.style.alignItems = alignItems;
    });
});

document.getElementById('reset-grow').addEventListener('click', () => {
    Array.from(flexContainer.children).forEach(box => {
        box.style.flexGrow = '0';
    });
});

document.getElementById('grow-all').addEventListener('click', () => {
    Array.from(flexContainer.children).forEach(box => {
        box.style.flexGrow = '1';
    });
});

document.querySelectorAll('button[data-grow]').forEach(button => {
    button.addEventListener('click', () => {
        const boxNumber = button.getAttribute('data-grow');
        const growValue = document.getElementById(`grow-b${boxNumber}`).value;
        const box = document.querySelector(`.box-${boxNumber}`);
        box.style.flexGrow = growValue;
    });
});
