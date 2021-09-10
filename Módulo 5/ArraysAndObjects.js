// Ejercicio 1:
// crear un objeto CuentaBancaria mediante una función constructora que contenga como datos:
// nombre del titular, numero de cuenta, apellido del titular, saldo, movimientos

function BankAccount(clientName, accountNumber, clientLastname) {
    this.clientName = clientName,
        this.accountNumber = accountNumber,
        this.clientLastname = clientLastname,
        this.balance = 0,
        this.transactions = []

    // Ejercicio 2:
    // crear métodos para:
    // mostrar el nombre completo del titular

    this.showFullName = () => `${clientName} ${clientLastname}`

    // debitar dinero de la cuenta.
    // si no tiene dinero suficiente mostrar un mensaje por consola
    // y no realizar la operación

    this.debitMoney = (money) => {
        if (this.balance > money) {
            const debitText = 'Se debitaron:';
            this.transactions.push(`${debitText} ${'$' + money}`);
            this.balance -= money;
            return `${debitText} ${'$' + money}`;
        }
        return 'Tu saldo no te permite realizar esta transacción.'
    }

    // acreditar dinero en la cuenta

    this.creditMoney = (money) => {
        const creditText = 'Se acreditaron:';
        this.transactions.push(`${creditText} ${'$' + money}`);
        this.balance += money;
        return `${creditText} ${'$' + money}`;
    }

    // mostrar el saldo de la cuenta

    this.showBalance = () => `${'El saldo actual de tu cuenta es de $'} ${this.balance}`;
    this.showTransactions = () => {
        const beautyArray = this.transactions.join('\r\n');
        return `${'Los movimientos al día de la fecha fueron:'} \n ${beautyArray}`;
    }


    this.showAccount = () => {
        const accountInfo = {
            Titular: `${this.clientName} ${this.clientLastname}`,
            ID: `${this.accountNumber}`,
            Saldo: `${'$'} ${this.balance}`
        }
        return accountInfo;
    }
}

// Ejercicio 3
// crear dos o tres cuentas, mostrar por consola el saldo inicial,
// realizar operaciones, mostrarlas por consola y mostrar el saldo final.

let myAccount = new BankAccount('Dena', 00001, 'Krzyny');
let sisterAccount = new BankAccount('Vani', 00002, 'Krzyny');
let brotherAccount = new BankAccount('Juanjo', 0002, 'Krzyny');

console.log(myAccount.showAccount());
console.log(myAccount.debitMoney(300));
console.log(myAccount.creditMoney(1000));
console.log(myAccount.debitMoney(300));
console.log(myAccount.showTransactions())
console.log(myAccount.showBalance());

console.log(sisterAccount.showAccount());
console.log(sisterAccount.creditMoney(3000));
console.log(sisterAccount.debitMoney(400));
console.log(sisterAccount.showTransactions())
console.log(sisterAccount.showBalance());

console.log(brotherAccount.showAccount());
console.log(brotherAccount.creditMoney(1000));
console.log(brotherAccount.debitMoney(600));
console.log(brotherAccount.creditMoney(2000));
console.log(brotherAccount.debitMoney(300));
console.log(brotherAccount.showTransactions())
console.log(brotherAccount.showBalance());