document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const dynamicElements = document.getElementById('dynamicElemnts');

    form.addEventListener('sumbit', (e) => {
        e.preventDefault();
        console.log('Form Submitted');

        const elementName = e.target.querySelector('input[name="elementName"]').value;
        console.log('New Element: ', elementName);

        const newElement = document.createElement('p');
        newElement.textContent = elementName;
        dynamicElements.appendChild(newElement);
    });
});