import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  matrixSize: number = 3;
  matrix: number[][] = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];
  constructor() {
    this.consoleMatrix();
  }
  userid: number = 0;
  clickedonDiv(id: string) {
    document.getElementById(id).className = 'user1';
    if (this.userid == 0) {
      this.insertPoint(Number(id), this.userid);
      this.userid = 1;
    } else if (this.userid == 1) {
      this.insertPoint(Number(id), this.userid);
      this.userid = 0;
      document.getElementById(id).className = 'user2';
    }
    if (this.checkResult() == true) {
      alert(this.userid + ' WON');
    }
  }
  checkResult(): boolean {
    //horizontal check
    // const i = 0;
    // const j = 0;
    // for (let i = 0; i < this.matrixSize; i++) {
    //   let count = 0;
    //   let temp: number = this.matrix[i][j];
    //   console.log('temp is' + temp);

    //   for (let j = 0; j < this.matrixSize; j++) {
    //     console.log('compare to temp value is:' + this.matrix[i][j]);
    //     if (this.matrix[i][j] === temp) {
    //       count++;
    //     } else {
    //       break;
    //     }
    //   }
    //   if (this.matrixSize == count) {
    //     return true;
    //   }
    // }
    // return false;

    if (
      this.identicalRows(this.matrix) == true ||
      this.identicalColumns(this.matrix) == true ||
      this.identicalDiagnol(this.matrix) == true
    ) {
      return true;
    } else {
      return false;
    }
  }
  identicalRows(mat): boolean {
    let count = 0;

    for (let i = 0; i < mat.length; i++) {
      let hs = new Set();
      for (let j = 0; j < mat[i].length; j++) {
        hs.add(mat[i][j]);
      }
      if (hs.size == 1) {
        return true;
      }
    }
    return false;
  }
  identicalColumns(mat): boolean {
    let count = 0;

    for (let i = 0; i < mat.length; i++) {
      let hs = new Set();
      for (let j = 0; j < mat[i].length; j++) {
        hs.add(mat[j][i]);
      }
      if (hs.size == 1) {
        return true;
      }
    }
    return false;
  }
  identicalDiagnol(mat) {
    let i = 0;
    let j = 0;
    for (i = 0; i < mat.length; i++) {
      let temp = mat[i][j];
      for (j = 0; j < mat[i].length; j++) {
        if (i != j && mat[i][j] != temp) {
          return false;
        }
      }
      return true;
    }
  }
  isDiagonalMatrix(mat) {
    for (let i = 0; i < this.matrixSize; i++) {
      let j;
      let temp = this.matrix[i][j];
      for (j = 0; j < this.matrixSize; j++) {
        if (i != j && mat[i][j] != temp) {
          return false;
        }
        return true;
      }
    }
  }

  insertPoint(id: number, userid: number) {
    var count: number = 1;
    for (let i = 0; i < this.matrixSize; i++) {
      for (let j = 0; j < this.matrixSize; j++) {
        if (count == id) {
          this.matrix[i][j] = userid;
        }
        count++;
      }
    }
  }
  consoleMatrix() {
    for (let i = 0; i < this.matrixSize; i++) {
      for (let j = 0; j < this.matrixSize; j++) {
        console.log(this.matrix[i][j]);
      }
    }
  }
}
