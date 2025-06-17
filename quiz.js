 
        // questions
        let zscore = document.getElementById("text")
        let zbtn = document.querySelector(".btn")
        const questions = [
            {
                question: "Quel est le plus grand océan du monde ?",
                reponse: "Pacifique"
            },
            {
                question: "Qui a écrit Les Misérables ?",
                reponse: "Victor Hugo"
            },
            {
                question: "Quel langage de programmation est souvent utilisé pour créer des pages web interactives ?",
                reponse: "Javascript"
            },
            {
                question: "Quelle est la planète la plus proche du Soleil  ?",
                reponse: "Mercure"
            },
            {
                question: "Combien y a-t-il de continents sur Terre ?",
                reponse: "7"
            }
        ];

        zbtn.addEventListener("click", function(e) {
            e.preventDefault();
            let score = 0;
            for (let i = 0; i < questions.length; i++) {
                let radios = document.getElementsByName("q" + i);
                for (let radio of radios) {
                    if (radio.checked && radio.value === questions[i].reponse) {
                        score++;
                    }
                }
            }
            zscore.value = score + " / " + questions.length; 
        });
    