// (function(){
//   const buttons = document.querySelectorAll('.counterBtn')
//   let count = 0

//   //Add event listeners and functionailty to each button
//   buttons.forEach(function(button){
//     button.addEventListener('click', function () {
//       if (button.classList.contains('prevBtn')) {
//         count--
//       } else if (button.classList.contains('nextBtn')) {
//         count++
//       }

//       //Select the counter text
//       const counter = document.querySelector('#counter')
//       counter.textContent = count

//       if (count < 0 ){
//         counter.style.color = 'red'
//       } else if (count > 0){
//         counter.style.color = 'green'
//       } else {
//         counter.style.color = '#333333'
//       }
//     })
//   })
// })()



// let add = document.querySelector('.nextBtn')
// let remove = document.querySelector('.prevBtn')

// let int = document.getElementById('counter')

// let counter = 0

// add.addEventListener('click', function(){
//   counter += 1;
//   int.textContent = counter

//   if (counter > 0) {
//     int.style.color = 'green'
//   } else if (counter < 0) {
//     int.style.color = 'red'
//   } else if (counter === 0) {
//     int.style.color = 'black'
//   }
// })

// remove.addEventListener('click', function(){
//   counter -= 1;
//   int.textContent = counter

//   if (counter > 0) {
//     int.style.color = 'green'
//   } else if (counter < 0) {
//     int.style.color = 'red'
//   } else if (counter === 0) {
//     int.style.color = 'black'
//   }
// })



const buttons = document.querySelectorAll('.counterBtn')

let index = 0

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.classList.contains('prevBtn')) {
      index--
    } else if (button.classList.contains('nextBtn')) {
      index++
    }

    const counter = document.querySelector('#counter')
    counter.textContent = index


    if (index < 0 ){
      counter.style.color = 'red'
    } else if (index > 0){
      counter.style.color = 'green'
    } else {
      counter.style.color = '#333333'
    }
  })
})


 

