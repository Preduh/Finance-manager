const currentValue = document.getElementById('current-value')

let i = 0
let valueNow = 0
let incomeNow = 0
let expenseNow = 0
const value = document.getElementById('value')
const incomeValue = document.getElementById('income-value')
const expenseValue = document.getElementById('expense-value')
const transName = document.getElementById('name')

const newValue = () => {
    if (value.value == "") {
        valueNow += 0
    } else {
        valueNow += parseInt(value.value)
    }
    currentValue.innerText = valueNow.toFixed(2)

    if(parseInt(value.value) > 0) {
        incomeNow += parseInt(value.value)
        incomeValue.innerText = incomeNow.toFixed(2)
    } else if (parseInt(value.value) < 0) {
        expenseNow += parseInt(value.value)*-1
        expenseValue.innerText = expenseNow.toFixed(2)
    }

    if (!value.value == "") {
        const transactions = document.getElementById('transactions')
        const createTransaction = document.createElement('div')
        const createName1 = document.createElement('p')
        const createName2 = document.createElement('p')
        const createBtnRemove = document.createElement('button')
        const createSpanName = document.createElement('span')
        const createRemoveIcon = document.createElement('i')
        
        createName1.textContent = transName.value
        if (parseInt(value.value) > 0) {
            createName2.textContent = '+ $'
            createSpanName.textContent = value.value
            createTransaction.className = 'income-color'
        } else {
            createName2.textContent = '- $'
            createSpanName.textContent = value.value * -1
            createTransaction.className = 'expense-color'
        }

        createRemoveIcon.className = "fa fa-trash-o"
        createRemoveIcon.setAttribute('aria-hidden', 'true')

        createBtnRemove.id = 'remove' + i

        transactions.appendChild(createTransaction)
        createTransaction.appendChild(createName1)
        createTransaction.appendChild(createName2)
        createTransaction.appendChild(createBtnRemove)
        createName2.appendChild(createSpanName)
        createBtnRemove.appendChild(createRemoveIcon)
        

        const btnId = document.getElementById('remove' + i)
        
        const removeDiv = () => {
            createTransaction.remove()
            if (createTransaction.className == 'income-color') {
                incomeNow -= parseInt(createSpanName.textContent)
                incomeValue.innerText = incomeNow.toFixed(2)
                if (parseInt(incomeValue.innerText) > parseInt(expenseValue.innerText)) {
                    currentValue.innerText = (parseInt(incomeValue.innerText) - parseInt(expenseValue.innerText)).toFixed(2)
                } else {
                    currentValue.innerText = ((parseInt(expenseValue.innerText) - parseInt(incomeValue.innerText)) * -1).toFixed(2)
                }
                
            } else {
                expenseNow -= parseInt(createSpanName.textContent)
                expenseValue.innerText = expenseNow.toFixed(2)
                if (parseInt(expenseValue.innerText) > parseInt(incomeValue.innerText)) {
                    currentValue.innerText = ((parseInt(expenseValue.innerText) - parseInt(incomeValue.innerText)) * -1).toFixed(2)
                } else {
                    currentValue.innerText = (parseInt(incomeValue.innerText) - parseInt(expenseValue.innerText)).toFixed(2)
                }
                
            }
        }

        btnId.addEventListener('click', removeDiv)

        i++
    }
}
const btnRegister = document.getElementById('reg-transaction')
btnRegister.addEventListener('click', newValue)