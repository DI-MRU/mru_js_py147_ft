class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)


my_wallet = BankAccount("V9083049823DJSFK")
my_wallet.view_balance()
my_wallet.deposit(-100)
my_wallet.view_balance()
my_wallet.deposit(0)
my_wallet.view_balance()
my_wallet.deposit(10000)
my_wallet.view_balance()
my_wallet.withdraw(50000)
my_wallet.view_balance()
my_wallet.withdraw(5000)
my_wallet.view_balance()
my_wallet.withdraw(-5000000)
my_wallet.view_balance()
my_wallet.view_transactions()