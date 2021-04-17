const highScoresList = document.getElementById('highScoresList');
const select = document.getElementById('category');

let title ;

select.addEventListener('change', (e) =>  {
    title = e.target.options[e.target.selectedIndex].text.trim();
    title = title.split(" ").join('').toLowerCase();

    const highScores = JSON.parse(localStorage.getItem(title+'highScores'));
    //console.log(highScores);

    highScoresList.innerHTML = highScores.map(score =>{
        return `
        <li class='highScores'>${score.name} - ${score.score} </li>
        `;
    }).join(''); 
   
});