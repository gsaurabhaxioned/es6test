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
back = document.querySelector(".back_btn"),
question_box = document.querySelector(".question_box"),
options_box = document.querySelector(".options_box"),
question_container = document.querySelector(".questions"),
result = document.querySelector(".result_box");

let question_counter = 0; 

const startQuestions = () => {
    options_box.innerHTML = "";
    let option1 = document.createElement('span'),
    optiontext1 = document.createTextNode(questions[question_counter].options[0]),
    option2 = document.createElement('span'),
    optiontext2 = document.createTextNode(questions[question_counter].options[1]),
    option3 = document.createElement('span'),
    optiontext3 = document.createTextNode(questions[question_counter].options[2]),
    option4 = document.createElement('span'),
    optiontext4 = document.createTextNode(questions[question_counter].options[3]);
    option1.appendChild(optiontext1);
    option2.appendChild(optiontext2);
    option3.appendChild(optiontext3);
    option4.appendChild(optiontext4);
    options_box.appendChild(option1);
    options_box.appendChild(option2);
    options_box.appendChild(option3);
    options_box.appendChild(option4);
    question_box.innerHTML = `${questions[question_counter].question}`; 
}

start.addEventListener("click",()=>{
    start.classList.add("hide");
    startQuestions();
    // startCounter();
})















