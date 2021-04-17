const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const title = localStorage.title.split(" ").join('').toLowerCase();
const highScores = JSON.parse(localStorage.getItem(title+'highScores')) || [] ;
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener('keyup', () => {
   // username.value
   saveScoreBtn.disabled = !username.value;
} );

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name:username.value
    };
     highScores.push(score);
     highScores.sort((a ,b) =>{
         return b.score -  a.score;
     });
     highScores.splice(5);
     localStorage.setItem(title+'highScores',JSON.stringify(highScores));
     window.location.assign('/');
}