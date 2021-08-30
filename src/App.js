import React, { Component } from 'react';
import './App.css';

const questionArray = [
  '1. What are the different data types present in javascript?',
  '2. Explain Hoisting in javascript.',
  '3. Difference between “==” and “===” operators.',
  '4. Explain Implicit Type Coercion in javascript.',
  '5. Is javascript a statically typed or a dynamically typed language?',
  '6. What is NaN property in JavaScript?',
  '7. Explain passed by value and passed by reference.',
  '8. Explain Higher Order Functions in javascript.',
  '9. What are callbacks?',
  '10. Explain “this” keyword.',
  '11. Explain call(), apply() and, bind() methods.',
  '13. Explain Scope and Scope Chain in javascript.',
  '14. Explain Closures in JavaScript.',
  '19. What is the use of a constructor function in javascript?',
  '20. What is DOM?',
  '21. What are arrow functions?',
  '22. Differences between declaring variables using var, let and const.',
  '23. What is the rest parameter and spread operator?',
  '24. Explaing what is CORS policy.',
  '25. What is a Temporal Dead Zone?',
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: questionArray,
      selectedNote: null,
      hover: false,
    };
  }

  handleClick = () => {
    this.setState({
      selectedNote:
        this.state.notes[Math.floor(Math.random() * this.state.notes.length)],
    });

    const copyground = document.querySelector('.copy');
    copyground.innerHTML = 'Copy';
  };
  myFunction = () => {
    /* Get the text field */
    const copyText = document.getElementById('myInput');

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    let copyground = document.querySelector('.copy');
    copyground.innerHTML = 'copied';
  };

  render() {
    return (
      <div className='app'>
        <h1>Typical Javascript Coding Question</h1>

        <div className='button-container'>
          <button
            onClick={this.handleClick}
            id='myInput'
            value={this.state.selectedNote}
          >
            {this.state.selectedNote}
          </button>
        </div>
        <button onClick={this.myFunction} className='copy'>
          copy
        </button>
        <div className='link'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.interviewbit.com/javascript-interview-questions/#javascript-dynamically-typed'
          >
            Answer
          </a>

          <a target='_blank' rel='noreferrer' href='https://www.google.com/'>
            Google
          </a>
        </div>
      </div>
    );
  }
}
