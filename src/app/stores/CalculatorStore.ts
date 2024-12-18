import { makeAutoObservable } from "mobx";

class CalculatorStore {
  currentInput: string = "0"; 
  previousInput: string = ""; 
  operator: string = ""; 

  constructor() {
    makeAutoObservable(this);
  }

  appendNumber(number: string) {
    if (this.currentInput === "0") {
      this.currentInput = number;
    } else {
      this.currentInput += number;
    }
  }

  setOperator(operator: string) {
    if (this.currentInput) {
      this.previousInput = this.currentInput;
      this.currentInput = "0";
      this.operator = operator;
    }
  }

  calculate() {
    const num1 = parseFloat(this.previousInput);
    const num2 = parseFloat(this.currentInput);

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (this.operator) {
        case "+":
          this.currentInput = (num1 + num2).toString();
          break;
        case "-":
          this.currentInput = (num1 - num2).toString();
          break;
        case "*":
          this.currentInput = (num1 * num2).toString();
          break;
        case "/":
          this.currentInput = num2 !== 0 ? (num1 / num2).toString() : "Error";
          break;
        default:
          break;
      }
      this.previousInput = "";
      this.operator = "";
    }
  }

  clear() {
    this.currentInput = "0";
    this.previousInput = "";
    this.operator = "";
  }
}

const calculatorStore = new CalculatorStore();
export default calculatorStore;
