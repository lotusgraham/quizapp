$(document).ready(function() {
  var currentquestion = 0;
  var keepscore = 0;

  var quiz = [{
      question: "Who is Homer's Best Friend?",
      answers: [{
        value: "Ned",
        correct: false
      }, {
        value: "Moe",
        correct: false
      }, {
        value: "Marge",
        correct: true
      }, {
        value: "Lisa",
        correct: false
      }]
    }, {
      question: "Where does Homer Work?",
      answers: [{
        value: "Home",
        correct: false
      }, {
        value: "Nuclear Plant",
        correct: true
      }, {
        value: "School",
        correct: false
      }]
    }, {
      question: "Who is the Bartender at Moe's?",
      answers: [{
        value: "Joe",
        correct: false
      }, {
        value: "Moe",
        correct: true
      }, {
        value: "Barney",
        correct: false
      }]
    }, {
      question: "Where do the Simpons Live?",
      answers: [{
        value: "NYC",
        correct: false
      }, {
        value: "Springfield",
        correct: true
      }, {
        value: "The Moon",
        correct: false
      }]
    }, {
      question: "What is Homer's middle name?",
      answers: [{
        value: "Jay",
        correct: true
      }, {
        value: "Fred",
        correct: false
      }, {
        value: "Joseph",
        correct: false
      }]
    }

  ];


  function buildquestion() {
    $('#score').append("<li>Score: " + keepscore + "/5</li>");
    $('#questionCount').append("<p>Question " + currentquestion + " of 5:</p>");
    $('#questionAndAnswers').empty();
    $('#questionAndAnswers').append('<li>' + quiz[currentquestion].question + '</li>');
    for (var i = 0; i < quiz[currentquestion].answers.length; i++) {
      $('#questionAndAnswers').append('<input class="choices" type="radio" name="option" value="' + quiz[currentquestion].answers[i].value + '">' + quiz[currentquestion].answers[i].value);
    }
  };

  buildquestion();

  $('.go').click(function() {
    var userChoice = $('input:checked').val();

    if (userChoice === undefined) {
      alert("you need to choose someting!");
    }
    else {
      $('#score').empty();
      $('#questionCount').empty();



      for (var i = 0; i < quiz[currentquestion].answers.length; i++) {
        if (quiz[currentquestion].answers[i].value == userChoice) {
          if (quiz[currentquestion].answers[i].correct) {
            keepscore++;
            break;

          }
        }
      }

      currentquestion++
      if (currentquestion == quiz.length) {
        $('#score').append("<li>Final Score: " + keepscore + "/5</li>");
        alert(" 'Ay Caramba!")


      }
      else {
        buildquestion()
      }

    }

  });


});



//one input button inside buildquestion
