import { Component } from '@angular/core';

/* Please read onwards from line 45 for insight into my thought process and then kindly read code to see if I have completed correctly. 
   Please not that this is not my normal style of commenting, but for the purpose of explaining my work I have chosen to do it this way.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  inputNumber: number = 0; // Initialize with a default value
  resultSteps: number[] = []; // Array to store intermediate values during calculation

  onInputChanged() {
    if (this.inputNumber > 0) {
      this.resultSteps = []; // Clear the previous steps when a positive number is entered
      this.calculatePersistence(this.inputNumber); // Calculate multiplicative persistence for the input number
    } else {
      this.resultSteps = []; // Reset the result steps if the input is not positive
    }
  }

  // Function to calculate multiplicative persistence
  calculatePersistence(num: number) {
    let count = 0; // Counter for the number of steps taken
    while (num >= 10) {
      num = this.multiplyDigits(num); // Calculate the next step by multiplying the digits
      this.resultSteps.push(num); // Store each intermediate step in the array
      count++; // Increment the step counter
    }
    this.resultSteps.push(num); // Store the final single-digit number (final result)
  }

  // Function to multiply the digits of a number and return the result
  multiplyDigits(num: number): number {
    let result = 1; // Initialize the result of multiplication
    while (num > 0) {
      result *= num % 10; // Multiply by the rightmost digit
      num = Math.floor(num / 10); // Remove the rightmost digit for the next iteration
    }
    return result; // Return the result of the multiplication
  }
}

/* 

1. The user enters a positive number in the input field.

2. The onInputChanged function is triggered by the input event on the input field.

3. The onInputChanged function first checks if the inputNumber is greater than 0. If it is, the function proceeds with the calculations; otherwise, it sets the resultSteps array to an empty array to clear any previous result.

4. If the input number is positive, the calculatePersistence function is called with the input number as an argument.

5. The calculatePersistence function starts calculating the multiplicative persistence. It uses a while loop to keep multiplying the digits of the input number until the number becomes a single-digit number (less than 10).

6. For each iteration of the loop, the result of the current multiplication step is pushed into the resultSteps array. This array will hold all the intermediate values obtained during the multiplicative persistence calculation.

7. Once the loop finishes, the final single-digit number is also pushed into the resultSteps array.

8. The interface displays the list of intermediate steps using an <ul> (unordered list) and an <li> (list item) for each step.

9. Finally, the interface displays the "Final Answer" message, indicating the last value in the resultSteps array, which represents the result of the multiplicative persistence calculation for the entered positive number. "*/
