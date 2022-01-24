//Some variables that will be needed for some functions to work
var score = 0;
var question_number = 0;
const audio = document.getElementById("my-audio");



//a function to start the timer and the math question
function start_timer() {

  //question number (last question is number 10)
  question_number = question_number + 1;
  let title = document.getElementById("title");
  title.innerHTML = "Level 0 Question " + question_number;

  //buttons are enabled and the 'next button' is hidden from the user
  document.getElementById("option1").disabled = false;
  document.getElementById("option2").disabled = false;
  document.getElementById("option3").disabled = false;
  document.getElementById("option4").disabled = false;
  document.getElementById("next-question").hidden = true;

  //calls a function to generate a math question
  start_math_question();

  //A Timer doesn't exist in this level
  //the timer function has been removed
}



function start_math_question(){
  //generates an number that is used to generate an operator
  //(check the if statements in this function)
  var operator = Math.ceil(Math.random() * 4);

  //first number being generated from 1 to 12
  var number1 = Math.ceil(Math.random() * 12);
  document.getElementById('num1').innerHTML = number1;
  //second number being generated from 1 to 12
  var number2 = Math.ceil(Math.random() * 12);
  document.getElementById('num2').innerHTML = number2;



  //what to do when operator is 1/2/3/4
  //(1 = sum, 2 = substract, 3 = multiply, 4 = Divide)
  
  //IF operation is a SUM
  if(operator == 1){
    //correct_answer is calculated and the operator is shown such as (+ - * /)
    let correct_answer = number1 + number2;
    document.getElementById('operator').innerHTML = "+";

    //Generates dummy answers and shows them on screen (sum)
    let wrong_answer1 = Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12);
    let wrong_answer2 = Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12);
    let wrong_answer3 = Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12);
    let wrong_answer4 = Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12);
    document.getElementById('option1').innerHTML = wrong_answer1;
    document.getElementById('option2').innerHTML = wrong_answer2;
    document.getElementById('option3').innerHTML = wrong_answer3;
    document.getElementById('option4').innerHTML = wrong_answer4;

    //merges the correct answer in a random dummy answer
    //(answer_id value takes over a random dummy answer)
    correct_answer_button = Math.ceil(Math.random()* 4);
    let answer_option_id = "option" + correct_answer_button;
    document.getElementById(answer_option_id).innerHTML = correct_answer;

    //Prevents the wrong answer being the correct answer
    if (wrong_answer1 === correct_answer){
      start_math_question();
    }
    if (wrong_answer2 === correct_answer){
      start_math_question();
    }
    if (wrong_answer3 === correct_answer){
      start_math_question();
    }
    if (wrong_answer4 === correct_answer){
      start_math_question();
    }
  }

  //IF operation is a SUBSTRACTION
  if (operator == 2){
    //correct_answer is calculated and the operator is shown such as (+ - * /)
    let correct_answer = number1 - number2;
    document.getElementById('operator').innerHTML = "-";

    //repeats the process if the answer is negative or zero (substraction)
    if (correct_answer <= 0) {
      start_math_question();
    }
    
    //fuction starts when the answer is only above zero
    if (correct_answer >= 1) {
      //Generates dummy answers and shows them on screen (substraction)
      let wrong_answer1 = Math.ceil(Math.random() * 12)
      let wrong_answer2 = Math.ceil(Math.random() * 12)
      let wrong_answer3 = Math.ceil(Math.random() * 12)
      let wrong_answer4 = Math.ceil(Math.random() * 12)
      document.getElementById('option1').innerHTML = wrong_answer1;
      document.getElementById('option2').innerHTML = wrong_answer2;
      document.getElementById('option3').innerHTML = wrong_answer3;
      document.getElementById('option4').innerHTML = wrong_answer4;
      
      //merges the correct answer in a random dummy answer
      correct_answer_button = Math.ceil(Math.random()* 4);
      let answer_Id = "option" + correct_answer_button;
      document.getElementById(answer_Id).innerHTML = correct_answer;

      //Prevents the wrong answer being the correct answer
      if (wrong_answer1 === correct_answer){
        start_math_question();
      }
      if (wrong_answer2 === correct_answer){
        start_math_question();
      }
      if (wrong_answer3 === correct_answer){
        start_math_question();
      }
      if (wrong_answer4 === correct_answer){
        start_math_question();
      }
    }
  }

  //IF operation is MULTIPLICATION
  if (operator == 3){
    //correct_answer is calculated and the operator is shown such as (+ - * /)
    let correct_answer = number1 * number2;
    document.getElementById('operator').innerHTML = "×";

    //Generates dummy answers and shows them on screen (multiplication)
    let wrong_answer1 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
    let wrong_answer2 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
    let wrong_answer3 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
    let wrong_answer4 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
    document.getElementById('option1').innerHTML = wrong_answer1;
    document.getElementById('option2').innerHTML = wrong_answer2;
    document.getElementById('option3').innerHTML = wrong_answer3;
    document.getElementById('option4').innerHTML = wrong_answer4;

    //merges the correct answer in a random dummy answer
    correct_answer_button = Math.ceil(Math.random()* 4);
    let answer_Id = "option" + correct_answer_button;
    document.getElementById(answer_Id).innerHTML = correct_answer;

    //Prevents the wrong answer being the correct answer
    if (wrong_answer1 === correct_answer){
      start_math_question();
    }
    if (wrong_answer2 === correct_answer){
      start_math_question();
    }
    if (wrong_answer3 === correct_answer){
      start_math_question();
    }
    if (wrong_answer4 === correct_answer){
      start_math_question();
    }
  }

  //IF operation is DIVISION
  if (operator == 4){
    //correct_answer is calculated and the operator is shown such as (+ - * /)
    let correct_answer = number1 / number2;
    document.getElementById('operator').innerHTML = "÷";

    //Generates dummy answers and shows them on screen
    let wrong_answer1 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
    let wrong_answer2 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
    let wrong_answer3 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
    let wrong_answer4 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
    document.getElementById('option1').innerHTML = wrong_answer1;
    document.getElementById('option2').innerHTML = wrong_answer2;
    document.getElementById('option3').innerHTML = wrong_answer3;
    document.getElementById('option4').innerHTML = wrong_answer4;

    //merges the correct answer in a random dummy answer
    correct_answer_button = Math.ceil(Math.random()* 4);
    let answer_Id = "option" + correct_answer_button;
    document.getElementById(answer_Id).innerHTML = correct_answer;

    if (wrong_answer1 === correct_answer){
      start_math_question();
    }
    if (wrong_answer2 === correct_answer){
      start_math_question();
    }
    if (wrong_answer3 === correct_answer){
      start_math_question();
    }
    if (wrong_answer4 === correct_answer){
      start_math_question();
    }
  }
}



//A function when the user chooses an answer
function compare_answer(button_id) {

  //The uses chooses the correct answer, time stops and is given 100 points
  if (correct_answer_button == button_id) {
    
    score = score + 100;
    document.getElementById('score').innerHTML = "score: " + score;

    //calls a fuction to play audio
    audio.play();

    //disables options and shows the continue button
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;
    document.getElementById("next-question").hidden = false;

    if (question_number === 10) {
      document.getElementById("next-question").hidden = true;
      document.getElementById("Finished").hidden = false;
    }
  }

  //The uses chooses the wrong answer, time stops and is given 0 points
  else {

    //disables options and shows the continue button
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;
    document.getElementById("next-question").hidden = false;

    if (question_number === 10) {
      document.getElementById("next-question").hidden = true;
      document.getElementById("Finished").hidden = false;
    }
  }
}