// using selectors inside the element //

const questions = document.querySelectorAll('.question');

//We are selecting the question and looking for the button inside that question
questions.forEach(function(question){
    const btn = question.querySelector('.question-btn') //That is why we use question instead of document
    btn.addEventListener('click', function(){

        //Function to hide other questions that are open, if in the loop there are questions that dont match the one that is clicked then it removes their show-question class
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        });

        //Adding class to show text
        question.classList.toggle('show-text');
    });

});


// traversing the dom //

// const btns = document.querySelectorAll('.question-btn');

// //loop through buttons to add the event listiner to each
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         //getting parent of the parent of the button
//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text');
//     })
// });