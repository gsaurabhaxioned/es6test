let questions = [{
        "question": "Who invented the BALLPOINT PEN?",
        "options": ["Biro Brothers", "Waterman Brothers", "Bicc Brothers", "Write Brothers"],
        "answer": "Biro Brothers"
    },
    {
        "question": "In which decade was the first solid state integrated circuit demonstrated?",
        "options": ["1950s", "1960s", "1970s", "1980s"],
        "answer": "1950s"
    },
    {
        "question": "What J. B. Dunlop invented?",
        "options": ["Automobile wheel rim", "Pneumatic rubber tire", "Rubber boot", "Model airplanes"],
        "answer": "Pneumatic rubber tire"
    },
    {
        "question": "Which scientist discovered the radioactive element radium?",
        "options": ["Isaac Newton", "Albert Einstein", "Benjamin Franklin", "Marie Curie"],
        "answer": "Marie Curie"
    },
    {
        "question": "The metal whose salts are sensitive to light is",
        "options": ["Zinc", "Silver", "Copper", "Aluminum"],
        "answer": "Silver"
    },
    {
        "question": "	When was barb wire patented?",
        "options": ["1874", "1840", "1895", "1900"],
        "answer": "1874"
    },
    {
        "question": "What Galileo invented?",
        "options": ["Barometer", "Pendulum clock", "Microscope", "Thermometer"],
        "answer": "Thermometer"
    },
    {
        "question": "Tsunamis are not caused by",
        "options": ["Hurricanes", "Earthquakes", "Undersea landslides", "Volcanic eruptions"],
        "answer": "Hurricanes"
    },

    {
        "question": "Who invented Jet Engine?",
        "options": ["Sir Frank Whittle", "Gottlieb Daimler", "Roger Bacon", "	Lewis E. Waterman"],
        "answer": "Sir Frank Whittle"
    },
    {
        "question": "What invention caused many deaths while testing it?",
        "options": ["Dynamite", "Ladders", "Race cars", "Parachute"],
        "answer": "Parachute"
    },

];

let answers = [];
const start = document.querySelector(".start_btn"),
    start_info = document.querySelector(".start-info"),
    submit = document.querySelector(".submit_btn"),
    previous = document.querySelector(".previous_btn"),
    next = document.querySelector(".next_btn"),
    prev = document.querySelector(".previous_btn"),
    question_box = document.querySelector(".question_box"),
    options_box = document.querySelector(".options_box"),
    question_no = document.querySelector(".question-no"),
    timer = document.querySelector(".timer"),
    question_container = document.querySelector(".questions"),
    result = document.querySelector(".result_box"),
    back = document.querySelector(".back_btn"),
    start_time = 2,
    score = document.querySelector(".score"),
    total = document.querySelector(".total"),
    attemtps = document.querySelector(".attempts"),
    correct_answers = document.querySelector(".correct_answers"),
    result_heading = document.querySelector(".result-heading");
let buttons = document.querySelectorAll("button"),
    time = start_time * 60;

let question_counter = 0;

//function to set attributes
const setAttributes = (element, attribute) => {
    Object.keys(attribute).forEach(e => {
        element.setAttribute(e, attribute[e]);
    });
}

//function for timeout
const stop_timer = () => {
    submit.classList.add("hide");
    if (!(localStorage.getItem("submitted"))) {
        finalResult("Time Up!!!!!!!!!!");
    }
}

//function to show next or previous question on screen
const showQuestion = () => {
    options_box.innerHTML = "";
    let createOption = (counter) => {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", `option${counter+1}`);
        label.innerHTML = questions[question_counter].options[counter];
        input_attributes = {
            type: "radio",
            name: "select",
            id: `option${counter+1}`,
            class: "option",
            value: questions[question_counter].options[counter]
        }
        setAttributes(input, input_attributes);
        options_box.appendChild(input);
        options_box.appendChild(label);
        input.classList.add("hide");
    }
    for (let i = 0; i < questions[question_counter].options.length; i++) {
        createOption(i);
    }
    question_box.innerHTML = `${questions[question_counter].question}`;
    question_no.innerHTML = `${question_counter+1}/10`
    label = document.querySelectorAll("label");
    label.forEach(i => {
        i.addEventListener("click", () => {
            let value = {
                "question": question_counter + 1,
                "answer": i.innerText
            };
            let repeat = false;
            answers.forEach(j => {
                if (j.question === value.question) {
                    repeat = true;
                }
            })
            if (!repeat) {
                answers.push(value);
            }
        })
    })
}

//function to check if question is attempted
const checkAttemped = () => {
    console.log(answers);
    if (answers != "") {
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].question === question_counter + 1) {
                let option = document.querySelectorAll(".option");
                console.log(option);
                option.forEach(j => {
                    if (j.value === answers[i].answer) {
                        j.checked = true;
                    }
                });
            }
        }
    }
}

//function to display final result
const finalResult = (msg) => {
    result_heading.innerText = msg;
    question_container.classList.add("hide");
    result.classList.add("show");
    let score_count = 0;
    answers.forEach(i => {
        questions.forEach(j => {
            if (i.answer === j.answer) {
                score_count++;
            }
        })

    })
    score.innerText = `Your Score is : ${(score_count * 100)/questions.length} %`;
    total.innerText = `Total questions : ${questions.length}`;
    attemtps.innerText = `Questions_attempted: ${answers.length}`;
    correct_answers.innerText = `Correct Answers: ${score_count}`;
}

//function to enabl or disable radio buttons
const radioButtons = (val) => {
    let radios = document.querySelectorAll("input[type='radio']");
    radios.forEach(i => {
        i.disabled = val;
    })
}

//function to access next question
const nextQuestion = () => {
    question_counter++;
    prev.disabled = false;
    showQuestion();
    if (question_counter === questions.length - 1) {
        next.disabled = true;
        submit.classList.add("show");
    }
    checkAttemped();
}

//function to access previous question
const prevQuestion = () => {
    question_counter--;
    next.disabled = false;
    showQuestion();
    if (question_counter === 0) {
        prev.disabled = true;
    }
    checkAttemped();
}

next.addEventListener("click", () => {
    nextQuestion();
})

prev.addEventListener("click", () => {
    prevQuestion();
})

//event to start apptitude
start.addEventListener("click", () => {
    start.classList.add("hide");
    start_info.classList.add("hide");
    next.disabled = false;
    radioButtons(false);
    let time_duration = setInterval(() => {
        time--;
        let minutes = Math.floor(time / 60),
            seconds = time % 60;
        timer.innerHTML = `${minutes}:${seconds}`
    }, 1000);
    time_duration;
    setTimeout(() => {
        timer.classList.add("hide");
        stop_timer();
    }, 120000);

})

//submit event
submit.addEventListener("click", () => {
    submit.classList.remove("show");
    submit.classList.add("hide");
    timer.classList.add("hide");
    finalResult("Successfully Submitted");
    localStorage.setItem("submitted", true);
})

//return to test
back.addEventListener("click", () => {
    document.location.reload();
})

//js onload
window.onload = () => {
    localStorage.clear();
    showQuestion();
    next.disabled = true;
    prev.disabled = true;
    radioButtons(true);
}