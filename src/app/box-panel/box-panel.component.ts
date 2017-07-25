import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-box-panel',
  templateUrl: './box-panel.component.html',
  styleUrls: ['./box-panel.component.css']
})
export class BoxPanelComponent {

  turn: string;

  turnCounter: number;

  boxId: string;

  gameOver: boolean;

  winner: string;

  icon: string;

  icons = {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '',
    i: ''
  }

  init() {
    this.turn = 'x';
    this.icon = 'x';

    this.gameOver = false;
    this.turnCounter = 0;
    this.winner = '';
    this.icons.a = '';
    this.icons.b = '';
    this.icons.c = '';
    this.icons.d = '';
    this.icons.e = '';
    this.icons.f = '';
    this.icons.g = '';
    this.icons.h = '';
    this.icons.i = '';

  }

  constructor() {
    this.init();
  }

  winningState() {
    /*
      a b c
      d e f
      g h i
    */
    if (this.icons.a === 'x' && this.icons.b === 'x' && this.icons.c === 'x') { // first check: horizontal
      this.winner = 'x';
    } else if (this.icons.d === 'x' && this.icons.e === 'x' && this.icons.f === 'x') {
      this.winner = 'x';
    } else if (this.icons.g === 'x' && this.icons.h === 'x' && this.icons.i === 'x') {
      this.winner = 'x'; // X win the game
    } else if (this.icons.a === 'o' && this.icons.b === 'o' && this.icons.c === 'o') {
      this.winner = 'o';
    } else if (this.icons.d === 'o' && this.icons.e === 'o' && this.icons.f === 'o') {
      this.winner = 'o';
    } else if (this.icons.g === 'o' && this.icons.h === 'o' && this.icons.i === 'o') {
      this.winner = 'o'; // O win the game
    } else if (this.icons.a === 'x' && this.icons.e === 'x' && this.icons.i === 'x') { // second check: diagonal
      this.winner = 'x';
    } else if (this.icons.c === 'x' && this.icons.e === 'x' && this.icons.g === 'x') {
      this.winner = 'x'; // X win the game
    } else if (this.icons.a === 'o' && this.icons.e === 'o' && this.icons.i === 'o') {
      this.winner = 'o';
    } else if (this.icons.c === 'o' && this.icons.e === 'o' && this.icons.g === 'o') {
      this.winner = 'o'; // O win the game
    } else if (this.icons.a === 'x' && this.icons.d === 'x' && this.icons.g === 'x') { // third check: vertical
      this.winner = 'x';
    } else if (this.icons.b === 'x' && this.icons.e === 'x' && this.icons.h === 'x') {
      this.winner = 'x';
    } else if (this.icons.c === 'x' && this.icons.f === 'x' && this.icons.i === 'x') {
      this.winner = 'x'; // X win the game
    } else if (this.icons.a === 'o' && this.icons.d === 'o' && this.icons.g === 'o') {
      this.winner = 'o';
    } else if (this.icons.b === 'o' && this.icons.e === 'o' && this.icons.h === 'o') {
      this.winner = 'o';
    } else if (this.icons.c === 'o' && this.icons.f === 'o' && this.icons.i === 'o') {
      this.winner = 'o'; // O win the game
    }
  }

  isGameOver() {
    console.log(this.turnCounter);
    this.winningState();
    if (this.winner !== '' || this.turnCounter === 9) {
      this.gameOver = true;
      if (this.winner !== '' && this.turnCounter === 9) {
        this.winner = 'draw';
      }
      console.log('game over!');
      console.log('The winner is: ', this.winner);
    } else {
      this.gameOver = false;
      console.log('turn: ', this.turn);
    }
  }

  isDraw() {
    if (this.winner === '' && this.turnCounter === 9) {
      return true;
    } else {
      return false;
    }
  }

  newGame() {
    this.init();
  }

  iconCheck(icon) {
    if (icon !== '') {
      return true;
    } else {
      return false;
    }
  }

  onBoxClick() {
    this.winningState();
    if (this.turn === 'o') {
      this.turn = 'x';
    } else {
      this.turn = 'o';
    }
    this.turnCounter++;
    this.isGameOver();
  }
}
