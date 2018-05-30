(() => {

    const getWaecGrades = () => {
        let s1 = document.querySelector('#select1').value;
        let s2 = document.querySelector('#select2').value;
        let s3 = document.querySelector('#select3').value;
        let s4 = document.querySelector('#select4').value;
        let s5 = document.querySelector('#select5').value;

        return [ s1, s2, s3, s4, s5 ];

    };

    const GRADES = {
        'A1': 4.0,
        'B2': 3.6,
        'B3': 3.2,
        'C4': 2.8,
        'C5': 2.4,
        'C6': 2.0
    };


    const calculateWaecScore = (grades) => {
        let sum = 0;
        grades.forEach((grade) => {
            let score = parseFloat(GRADES[grade]);
            sum += score;
        });
        return sum;
    };


    document.querySelector('#calculate').onclick = () => {
        
        let waecGrades = getWaecGrades();

        let waecScore = calculateWaecScore(waecGrades);

        let jambInput = document.querySelector('#jamb').value;

        if (jambInput === '' || parseInt(jambInput) > 400 || parseInt(jambInput) < 0) {
            alert('enter a valid J.A.M.B score');
            return;
        }; 

        let jambScore = parseInt(jambInput) / 8;

        let postJambInput = document.querySelector('#post-jamb').value;

        if (postJambInput === ''  || parseInt(postJambInput) > 30 || parseInt(postJambInput) < 0) {
            alert('enter a valid post-J.A.M.B score');
            return;
        } 

        let postJambScore = parseInt(postJambInput);

        let totalScore = jambScore + postJambScore + waecScore;

        let roundedTotalScore = totalScore.toFixed(2);

        let result = document.querySelector('#result');
        result.innerHTML = `Your score is ${roundedTotalScore}`;
        result.setAttribute('id', 'result2');
        
        setTimeout(() => {
            result.setAttribute('id', 'result');
        }, 500);
        
        
    };

    
    
})();