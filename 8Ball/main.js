const question = document.getElementById('eightball-question');
const btn = document.getElementById('submit'); // Fixed method name
const answer = document.getElementById('answer'); // Fixed id name

function eightBall() {
    if (question.value.trim() !== ''){
        let randomNumber = Math.floor(Math.random() * 8);
        console.log(randomNumber);
        switch(randomNumber) {
            case 0:
                answer.innerHTML = 'It is certain';
                break;
            case 1:
                answer.innerHTML = 'It is decidedly so';
                break;
            case 2:
                answer.innerHTML = 'Reply hazy try again';
                break;
            case 3:
                answer.innerHTML = 'Cannot predict now';
                break;
            case 4:
                answer.innerHTML = 'Do not count on it';
                break;
            case 5: 
                answer.innerHTML = 'My sources say no';
                break;
            case 6:
                answer.innerHTML = 'Outlook not so good';
                break;
            case 7:
                answer.innerHTML = 'Signs point to yes';
                break;
    }

    setTimeout(() => {answer.innerHTML = '';}, 3000);
    }
    
}

btn.addEventListener('click', eightBall);
