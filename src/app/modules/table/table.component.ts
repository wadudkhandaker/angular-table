import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Table {
  first: string;
  second: string;
  third: string;
}
const TABLE_DATA: Table[] = [
  {first: '', second: '', third: ''}
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['first', 'second', 'third'];
  dataSource = TABLE_DATA;
  formGroup: FormGroup;
  defaultFormat = 'isPrime';
  isPrime: boolean;
  isFibanacci: boolean;

  constructor(private fb: FormBuilder) {
    this.isPrime = false;
    this.isFibanacci = false;
    this.formGroup = this.fb.group({
      value: '',
      format: this.defaultFormat
    });
   }

  onChangeEvent(event: any) {
    const format = this.formGroup.get('format');
    if(format?.value === 'isPrime') {
      this.isPrime = this.calculateIsPrime(event.target.value);
    } else {
      this.isFibanacci = this.calculateIsFibanacci(event.target.value);
    }
  }


  calculateIsPrime(num: number): boolean {
    if(num < 2) return false;
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        return false;
      }
    }
    return true;
  }

  calculateIsFibanacci(num: number): boolean{
    if (this.isSquare(5*(num*num)-4) || this.isSquare(5*(num*num)+4)) {
      return true;
    } else { return false; }
  }

  isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };
}
