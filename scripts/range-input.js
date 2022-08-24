function rangeSumChangeValue() {
    let rangeInput = document.querySelector('.js-range-slider-sum');
    let containerResult = document.querySelector('.input-sum-result');

    // вырезаем значение только второго, активного ренжа
    let result = rangeInput.value.slice(2, 9);
    parseInt(result);

    containerResult.innerHTML = result;
}

function rangeMonthChangeValue() {
    let rangeInput = document.querySelector('.js-range-slider-months');
    let containerResult = document.querySelector('.input-months-result');

    let result = rangeInput.value.slice(2, 4);

    switch (result) {
        case '1':
            result += ' месяц';
            break;

        case '2':
        case '3':
        case '4':
            result += ' месяца';
            break;

        default:
            result += ' месяцев'
            break;
    }

    containerResult.innerHTML = result;
}