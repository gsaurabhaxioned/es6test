let questions = [
    {"question":"Who invented the BALLPOINT PEN?",
        "options": ["Biro Brothers","Waterman Brothers","Bicc Brothers","Write Brothers"],
        "answer": "Biro Brothers"
    },
    {"question":"In which decade was the first solid state integrated circuit demonstrated?",
        "options": ["1950s","1960s","1970s","1980s"],
        "answer": "1950s"
    },
    {"question":"What J. B. Dunlop invented?",
        "options": ["Automobile wheel rim","Pneumatic rubber tire","Rubber boot","Model airplanes"],
        "answer": "Pneumatic rubber tire"
    },
    {"question":"Which scientist discovered the radioactive element radium?",
        "options": ["Isaac Newton","Albert Einstein","Benjamin Franklin","Marie Curie"],
        "answer": "Marie Curie"
    },
    {"question":"The metal whose salts are sensitive to light is",
        "options": ["Zinc","Silver","Copper","Aluminum"],
        "answer": "Silver"
    },
    {"question":"	When was barb wire patented?",
        "options": ["1874","1840","1895","1900"],
        "answer": "1874"
    },
    {"question":"What Galileo invented?",
        "options": ["Barometer","Pendulum clock","Microscope","Thermometer"],
        "answer": "Thermometer"
    },
    {"question":"Tsunamis are not caused by",
    "options": ["Hurricanes","Earthquakes","Undersea landslides","Volcanic eruptions"],
    "answer": "Hurricanes"
    },

    {"question":"Who invented Jet Engine?",
        "options": ["Sir Frank Whittle","Gottlieb Daimler","Roger Bacon","	Lewis E. Waterman"],
        "answer": "Sir Frank Whittle"
    },
    {"question":"What invention caused many deaths while testing it?",
        "options": ["Dynamite","Ladders","Race cars","Parachute"],
        "answer": "Parachute"
    },
  
];

let answers = [];

const start = document.querySelector(".start_btn"),
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
score = document.querySelector(".score");
let time = start_time * 60;

let question_counter = 0; 

const setAttributes = (element, attribute) => {
    Object.keys(attribute).forEach(e => {
        element.setAttribute(e, attribute[e]);
    });
}

const stop_timer = () => {
    if(!(localStorage.getItem("submitted"))){
    finalResult();
    }
}

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
    for(let i = 0; i < questions[question_counter].options.length; i++) {
        createOption(i);
    }

    question_box.innerHTML = `${questions[question_counter].question}`; 
    question_no.innerHTML = `${question_counter+1}/10`
    label = document.querySelectorAll("label");
    label.forEach(i=>{
        i.addEventListener("click",()=>{
            let value = {"question": question_counter+1,"answer": i.innerText};
            answers.push(value);
        })
    })
    
    
}

const checkAttemped = () => {
    console.log(answers);
    if(answers != "") {
        for(let i = 0; i < answers.length; i++) {
            if(answers[i].question === question_counter+1) {
                let option = document.querySelectorAll(".option");
                console.log(option);
                option.forEach(j => {
                    if(j.value === answers[i].answer) {
                        j.checked = true;
                    }
                });
            }
        }
    }

}

const finalResult = () => {
    question_container.classList.add("hide");
    result.classList.add("show");
    let score_count = 0;
    answers.forEach(i=>{
        questions.forEach(j=>{
            if(i.answer === j.answer) {
                score_count++;
            }
        })
        
    })
    // for(let i = 0; i < questions.length; i++) {
    //     for(let j = 0; j < answers.length; j++) {
    //         if(i === answers[j].question_counter-1) {
    //             if(questions[i].answer === answers[j].answer) {
    //                 score_count += 1;
    //             }
    //         }
    //     }
    // }
    score.innerText = `Your Score is ${score_count}`;
 

}

const nextQuestion = () => {
    question_counter++;
    prev.disabled=false;
    showQuestion();
    if(question_counter === questions.length-1) {
        next.disabled = true;
        submit.classList.add("show");
    }
    checkAttemped();
}

const prevQuestion = () => {
    question_counter--;
    next.disabled=false;
    showQuestion();
    if(question_counter === 0) {
        prev.disabled = true;
    }
    checkAttemped();
}

next.addEventListener("click",()=>{
    nextQuestion();
})

prev.addEventListener("click",()=>{
    prevQuestion();
})

start.addEventListener("click",()=>{
    start.classList.add("hide");
   let time_duration = setInterval(()=>{
       time--;
    let minutes = Math.floor(time/60),
    seconds = time % 60;
    timer.innerHTML = `${minutes}:${seconds}`
   },1000);
   time_duration;
   setTimeout(() => {
    stop_timer();
},4000);
  
})

submit.addEventListener("click",()=> {
    submit.classList.remove("show");
    submit.classList.add("hide");
    finalResult();
    localStorage.setItem("submitted",true);
})

back.addEventListener("click",()=>{
    document.location.reload();
    // start.classList.add("show");
    // question_container.classList.add("show");
    // result.classList.remove("show");
    // result.classList.add("hide");
})



window.onload = () =>{
    showQuestion();
    prev.disabled=true;
}















