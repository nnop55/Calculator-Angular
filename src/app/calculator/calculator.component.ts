import { Component, OnInit } from '@angular/core';
import { ChangeTheme } from '../models/ChangeTheme.model';
import { FifthyTr } from '../models/fifthyTr.model';
import { FirstTr } from '../models/firstTr.model';
import { FourthTr } from '../models/fourthTr.model';
import { SecondTr } from '../models/secondTr.model';
import { ThirdTr } from '../models/thirdTr.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  toggleTheme: ChangeTheme = new ChangeTheme();
  toggleIcon: string = 'ri-toggle-fill';

  displayDivController: string = '';

  first: FirstTr[] = [
    { button: 'C', class: 'btn-operator', id: 'clear' },
    { button: '/', class: 'btn-operator', id: '/' },
    { button: 'X', class: 'btn-operator', id: '*' },
    { button: '<--', class: 'btn-operator', id: 'backspace' }
  ];
  second: SecondTr[] = [
    { button: '7', class: 'btn-number', id: '7' },
    { button: '8', class: 'btn-number', id: '8' },
    { button: '9', class: 'btn-number', id: '9' },
    { button: '-', class: 'btn-operator', id: '-' }
  ];
  third: ThirdTr[] = [
    { button: '4', class: 'btn-number', id: '4' },
    { button: '5', class: 'btn-number', id: '5' },
    { button: '6', class: 'btn-number', id: '6' },
    { button: '+', class: 'btn-operator', id: '+' }
  ];
  fourth: FourthTr[] = [
    { button: '1', class: 'btn-number', id: '1', rowspan: '1' },
    { button: '2', class: 'btn-number', id: '2', rowspan: '1' },
    { button: '3', class: 'btn-number', id: '3', rowspan: '1' },
    { button: '=', class: 'btn-equal', id: 'equal', rowspan: '2' }
  ];
  fifthy: FifthyTr[] = [
    { button: '(', class: 'btn-operator', id: '(' },
    { button: '0', class: 'btn-operator', id: '0' },
    { button: ')', class: 'btn-operator', id: ')' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calculateResult(item: any) {
    if (item.id == 'clear') {
      this.displayDivController = ''
    } else if (item.id == 'backspace') {
      var str = this.displayDivController.toString();
      this.displayDivController = str.substring(0, str.length - 1)
    } else if (this.displayDivController != '' && item.id == 'equal') {
      this.displayDivController = eval(this.displayDivController)
    } else if (this.displayDivController == '' && item.id == 'equal') {
      this.displayDivController = 'Empty!'
      setTimeout(() => {
        this.displayDivController = ''
      }, 1200)
    } else {
      this.displayDivController += item.id
    }
  }

  themeToggleBtn() {
    this.toggleTheme.toggleItem = !this.toggleTheme.toggleItem;
    if (this.toggleTheme.toggleItem) {
      this.toggleIcon = 'ri-toggle-line white';
    } else {
      this.toggleIcon = 'ri-toggle-fill';
    }
  }


}
