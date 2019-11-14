Array.from(document.querySelectorAll('[type="button"]')).forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.show').classList.remove('show')
        document.querySelector(this.dataset.id).classList.add('show')
    })
});

(function () {
    let days = []
    for (let i = 1; i <= 31; i++) {
        days.push({ key: i, value: i })
    }

    appendOpts('#day', days)
    appendOpts('#month', [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ].map(key => ({ key, value: key })), 'May')

    let years = []
    let currentY = new Date().getFullYear()
    for (let y = currentY - 10; y <= currentY + 10; y++) {
        years.push({ key: y, value: y })
    }

    appendOpts('#year', years, 2017)
})()

function appendOpts(selector, array_of_values = [], init_opt_value) {
    if ( array_of_values.length ) {
        init_opt_value = init_opt_value || array_of_values[0].value
    }
    document.querySelector(selector).innerHTML =
        array_of_values.map(item => {
            return `<option value="${item.value}"
                ${item.value === init_opt_value ? 'selected' : ''}>${item.key}</option>`
        })
}