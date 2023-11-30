import { Component, OnInit } from '@angular/core';
interface Transaction {
  name: string;
  bankName: string;
  accountNumber: string;
  amount: number;
  dateCreated: string;
  status: string;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  currentDate: string = '';
  currentTime: string = '';

  ngOnInit(): void {
    this.updateDateTime();

    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  private updateDateTime(): void {
    const now = new Date();

    this.currentDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    this.currentTime = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  transactions: Transaction[] = [
    {
      name: 'January',
      bankName: 'FCMB',
      accountNumber: '0009148921',
      amount: 700000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'February',
      bankName: 'GTBANK',
      accountNumber: '1009148921',
      amount: 700000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'March',
      bankName: 'FIRST BANK',
      accountNumber: '2009148921',
      amount: 700000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'April',
      bankName: 'FCMB',
      accountNumber: '3009148921',
      amount: 400000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'May',
      bankName: 'ZENITH',
      accountNumber: '4009148921',
      amount: 500000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'June',
      bankName: 'GTBANK',
      accountNumber: '0009148921',
      amount: 500000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'July',
      bankName: 'FCMB',
      accountNumber: '0009148921',
      amount: 400000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'August',
      bankName: 'FCMB',
      accountNumber: '0009148921',
      amount: 700000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'September',
      bankName: 'FIRST BANK',
      accountNumber: '0009148921',
      amount: 500000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'October',
      bankName: 'FCMB',
      accountNumber: '0009148921',
      amount: 400000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'November',
      bankName: 'FCMB',
      accountNumber: '0009148921',
      amount: 700000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
    {
      name: 'December',
      bankName: 'FCMB',
      accountNumber: '0009148921',
      amount: 700000,
      dateCreated: '12-10-2022',
      status: 'Pending',
    },
  ];

  get totalAmount(): number {
    return this.transactions.reduce(
      (total, transaction) => total + this.parseAmount(transaction.amount),
      0
    );
  }

  private parseAmount(amount: string | number): number {
    const amountString =
      typeof amount === 'string' ? amount.replace(/,/g, '') : String(amount);
    return parseFloat(amountString);
  }

  searchText: string = '';

  get filteredTransactions() {
    return this.transactions.filter((transaction) =>
      this.fieldsToSearch.some((field) =>
        String(transaction[field])
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      )
    );
  }

  private fieldsToSearch: (keyof Transaction)[] = [
    'name',
    'bankName',
    'accountNumber',
    'amount',
    'dateCreated',
    'status',
  ];

  get totalTransactions(): number {
    return this.transactions.length;
  }
}
