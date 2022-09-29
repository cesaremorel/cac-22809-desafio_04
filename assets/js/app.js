
const getQuiniNumbersArray = () => {
    // Numeros desde el 1 al 45 inclusive
    let numbers = []
    for ( var i = 0; i < 6; i++ ){
        numbers[i] = Math.floor(Math.random() * 45)
    }
    return numbers
}

const renderQuiniCard = () => {
    var quini6Div = document.getElementById('quini6')
    quini6Div.innerHTML = ''
    var numbers = getQuiniNumbersArray()
    numbers.forEach(number => {
        quini6Div.innerHTML += `<span class="badge bg-info text-dark m-2">${number}</span>`
    });
}

