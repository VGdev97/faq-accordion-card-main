const questions = document.querySelectorAll('.question-container')
const answers = document.querySelectorAll('.answers')


questions.forEach((question) => question.addEventListener('click', () => {
    
    if(question.classList.contains('active')){
        question.classList.toggle('active')
    }else{
        question.classList.add('active')
    }

}))
    
