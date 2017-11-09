window.onload = function() {
    
    const calculate = document.getElementById('calculate');
    
    const grades = document.getElementById('grades');
    
    calculate.onclick = function() {

        const username = document.getElementById('username').value;
        const jamb = document.getElementById('jamb').value;
        const postjamb = document.getElementById('postjamb').value;
        
        const s1 = document.getElementById('select1').value;
        const s2 = document.getElementById('select2').value;
        const s3 = document.getElementById('select3').value;
        const s4 = document.getElementById('select4').value;
        const s5 = document.getElementById('select5').value;
            
                
        const aggregate = (function() {

            function selector(n) {
                n === 'A1' ? n = 4.0 : n === 'B2' ? n = 3.6 : n === 'B3' ? n = 3.2 : n === 'C4' ? n = 2.8 : n === 'C5' ? n = 2.4 : n = 2.0;
                return n;
                
            }
            const waec = selector(s1) + selector(s2) + selector(s3) + selector(s4) + selector(s5);
            
            return parseFloat(parseFloat(jamb / 8) + parseInt(postjamb) + parseFloat(waec)); 
        })();

        /*   validation   */
        if (isNaN(aggregate) || jamb.length > 3 || jamb > 400 || jamb < 0 || jamb === '' || postjamb.length > 2 || postjamb < 0 || postjamb === '' || postjamb > 30) {
            alert('please, check your inputs!');
        } else {
            grades.style.display = 'none';
            admission.innerHTML += '<p>Hi! <span>' + username + '</span>, your aggregate is <span>' + aggregate + '</span>.</p> <a href="index.html"><button id="goback" class="action">go back</button></a>';
        }
    }
}
