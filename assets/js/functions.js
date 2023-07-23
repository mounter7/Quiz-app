import { quizData } from "./questions.js"

$(document).ready(function () {


    const answers = document.querySelectorAll('.answer')

    let currentQuiz = 0
    let score = 0

    const loadQuiz = () => {
        deselectAnswers()
        const currentQuizData = quizData[currentQuiz]
        let quiz = `${currentQuizData.id}. ${currentQuizData.question}`
        $('#q').text(quiz)
        $('.a').text(currentQuizData.a)
        $('.b').text(currentQuizData.b)
        $('.c').text(currentQuizData.c)
        $('.d').text(currentQuizData.d)

        if (currentQuiz < 1) {
            $('#go-back').hide()
        }
    }

    const deselectAnswers = () => {
        answers.forEach(answer => answer.checked = false)
    }

    const getSelected = () => {
        let isAnswer
        answers.forEach(answer => {
            if (answer.checked) {
                isAnswer = answer.id
            }
        })
        return isAnswer
    }

    $('#go-back').click(() => {
        currentQuiz--
        loadQuiz()
    })

    $('#submit').click(() => {
        $('#go-back').show()
        const answer = getSelected()
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            document.querySelector('#quiz').innerHTML = `
            <h2>You answerd ${score}/${quizData.length} questions correctly.</h2>
            <button onclick="location.reload()" class="btn btn-primary">Play Again</button>
            `
        }
    })

    loadQuiz()



})

