
// $(document).ready(function() {
//     $('radio1').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function() {
//     $('radio2').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function() {
//     $('radio3').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function() {
//     $('radio4').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function() {
//     $('radio5').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function() {
//     $('radio6').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function() {
//     $('radio7').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function() {
//     $('radio8').click(function() {
//         var value = $("input[type=radio][name=contact]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

$(document).ready(function() {
  $('.radio1, .radio2, .radio3, .radio4, .radio5, .radio6, .radio7, .radio8').click(function() {
    var value = $("input[type=radio][name=contact]:checked").val();
    if (value) {
      alert(value);
    }
    else {
      alert('Nothing is selected');
    }
  });
});

const submitBtn = document.getElementById('btnsubmit');
const totalScore = document.getElementById('total-score');
function calculateScore() {
  let score = 0;
  const questions = document.querySelectorAll('input[type=radio]:checked');
  
  questions.forEach((question) => {
    if (question.value === '1') {
      score++;
    }
  });

  return score;
}


submitBtn.addEventListener('click', function() {
  const score = calculateScore();
  totalScore.textContent = `Total Score: ${score}`;
});


// function calculateScore() {
//   let score = 0;
//   const answers = document.querySelectorAll(`input[type=radio][name=question]`);
  
//   answers.forEach((answer) => {
//     const selectedOption = answer.querySelector("input[type=radio]:checked");
//     if (selectedOption && selectedOption.value === "1") {
//       score++;
//     }
//   });

//   return score;
// }


// const totalScore = calculateScore();
// console.log(`Total Score: ${totalScore}`);
// const totalScore = calculateScore();
// const scoreElement = document.getElementById("totalScore");
// scoreElement.textContent = `Total Score: ${totalScore}`;

// function calculateScore() {
//   let score = 0;
//   const answer = document.querySelectorAll(`.form-${i}`);
  
//   questions.forEach((answer) => {
//     const selectedOption = question.querySelector("input[type=radio]:checked");
//     if (selectedOption && selectedOption.value === "1") {
//       score++;
//     }
//   });

//     return score;
// }

// // Example usage
// const totalScore = calculateScore();
// console.log(`Total Score: ${totalScore}`);
