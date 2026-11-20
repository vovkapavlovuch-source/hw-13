// 1.Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ
// 2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const { DEPOSIT, WITHDRAW } = transaction;

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            type,
            amount,
        }
    },

    deposit(amount) {
        const newTransaction = this.createTransaction(amount, DEPOSIT);
        this.balance += amount;
        this.transactions.push(newTransaction);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Зняття такої суми не можливо, недостатньо коштів.');
            return;
        }

        const newTransaction = this.createTransaction(amount, WITHDRAW);
        this.balance -= amount;
        this.transactions.push(newTransaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const item of this.transactions) {

            if (item.id === id) {
                return item;
            }
        }
        return null;
    },

    getTransactionTotal(type) {
        let total = 0;
        for (const item of this.transactions) {
            const { type: itemType, amount } = item;

            if (itemType === type) {
                total += amount
            }
        }
        return total;
    },
};

account.deposit(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(2000);

console.log('Баланс:', account.getBalance());
console.log('Транзакція #2:', account.getTransactionDetails(2));
console.log('Сума депозитів:', account.getTransactionTotal(DEPOSIT));
console.log('Сума зняттів:', account.getTransactionTotal(WITHDRAW));