const questions = [
    {
        'que': "Which of the following is a markup language",
        'a':'HTML',
        'b':'Javascript',
        'c':'CSS',
        'd':'Java',
        'correct':'a'
    },
    {
        'que':'Which of the following is used to style HTML page',
        'a':'Javascript',
        'b':'Java',
        'c':'CSS',
        'd':'Python',
        'correct':'c'
    },
    {
        "que": "What is the capital of Java programming language?",
        "a": "Bytecode",
        "b": "JVM",
        "c": "Compiler",
        "d": "Source Code",
        "correct": "b"
    },
    {
        "que": "Which programming language is known for its simplicity and readability?",
        "a": "C++",
        "b": "Java",
        "c": "Python",
        "d": "Ruby",
        "correct": "c"
    },
    {
        "que": "What does HTML stand for?",
        "a": "Hyper Text Markup Language",
        "b": "High-level Text Management Language",
        "c": "Hyperlink and Text Markup Language",
        "d": "Home Tool Markup Language",
        "correct": "a"
    },
    {
        "que": "In JavaScript, what does DOM stand for?",
        "a": "Document Object Model",
        "b": "Data Object Mode",
        "c": "Digital Output Module",
        "d": "Dynamic Operator Mechanism",
        "correct": "a"
    },
    {
        "que": "Which of the following is a statically-typed programming language?",
        "a": "JavaScript",
        "b": "Python",
        "c": "Java",
        "d": "Ruby",
        "correct": "c"
      },
      {
        "que": "What is the main purpose of the 'finally' block in a try-catch statement?",
        "a": "To catch exceptions",
        "b": "To execute code regardless of whether an exception occurs or not",
        "c": "To handle errors",
        "d": "To define variables",
        "correct": "b"
      },
      {
        "que": "Which of the following is an example of a procedural programming language?",
        "a": "C++",
        "b": "Python",
        "c": "Haskell",
        "d": "Java",
        "correct": "a"
      },
      {
        "que": "In object-oriented programming, what is encapsulation?",
        "a": "A process of breaking down a program into smaller parts",
        "b": "The ability of an object to take on many forms",
        "c": "Binding data and methods that operate on the data into a single unit",
        "d": "The process of converting code into machine language",
        "correct": "c"
      },
      {
        "que": "What is the purpose of the 'git clone' command in version control systems?",
        "a": "To create a new branch",
        "b": "To clone a remote repository onto your local machine",
        "c": "To merge branches",
        "d": "To delete a repository",
        "correct": "b"
      }
]

// Getting HTML Elements
const ques = document.getElementById('que');
const options = document.querySelectorAll('.options')
const submit = document.querySelector('.btn');

// Question Number By default 0 index
let index = 0;
let total = questions.length;
let correct = 0, incorrect = 0;

// Function for quiz logic
const loadquestion = ()=>{
    if(index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    ques.innerText = `${index + 1} ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

// Submit Button
const submitquiz = ()=>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans == data.correct){
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadquestion();
    return;
}

// Answer Logic
const getAnswer = ()=>{
    let answer;
    options.forEach((item)=>{
        if(item.checked){
            answer = item.value;
        }
    })
    return answer;
}

// Reset form
const reset = ()=>{
    options.forEach((item)=>{
        item.checked = false;
    })
}

// End quiz
const endQuiz = ()=>{
    document.getElementById('main').innerHTML = `<h1>Thanks for playing Quiz </h1>
    <h1>Result : Correct ${correct} / Incorrect ${incorrect} </h1>`;
}


// Initial Call
loadquestion();
