const Colors = [
    'red',
    'orange',
    'blue',
    'pink',
    'green',
    'yellow'
]

    const button = document.querySelector("button")
    const colorBox = document.querySelector('#changeColor')

    function changeColor(){
        const chooseColor = Colors[Math.floor(Math.random() * Colors.length)];
        colorBox.textContent = chooseColor
        colorBox.style.color = chooseColor
    }

    button.addEventListener('click', changeColor)
