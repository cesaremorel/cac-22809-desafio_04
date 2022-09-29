const getNumberArrayFromTo = (from, to) => {
    let numbers = [];
    for ( i = from; i <= to; i++){
        numbers.push(i)
    }
    return numbers
}

const getQuiniNumbersArray = () => { 
    // Numeros desde el 1 al 45 inclusive
    let remainingNumbers = getNumberArrayFromTo(1,45)
    let limit = 6
    let randomNumbers = []

    for ( i = 0; i < limit; i++){
        var pickId = Math.floor(Math.random() * remainingNumbers.length )
        randomNumbers.push(remainingNumbers[pickId])
        remainingNumbers.splice(pickId, 1);
    }
    return randomNumbers.sort((a,b) => a-b)
}

const renderQuiniCard = () => {
    var quini6Div = document.getElementById('quini6')
    quini6Div.innerHTML = ''
    var numbers = getQuiniNumbersArray()
    numbers.forEach(number => {
        quini6Div.innerHTML += `<span class="badge bg-info text-dark m-2">${String(number).padStart(2, '0')}</span>`
    });
}

