const paraCount = document.querySelector('.advice');
const paraQuote = document.querySelector('.quote')
const btn = document.querySelector('.btn');
const img = document.querySelector('.img')
let count = null;

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
   }
function advice(){
    let fetchfiles = fetch('https://api.adviceslip.com/advice');
    btn.style.backgroundColor = 'grey';
    img.style.transform = 'rotatey(90deg)';
        fetchfiles
        .then(response => {
            if(response.status !== 200){
                throw new Error('Response status: ' + response.status);
            }else{
                return response.json();
            }
            })
            .then(data =>{
                const advice = data.slip.advice;
                paraQuote.textContent = `"${advice}"`;
                count += 1;
                paraCount.textContent = `Advice #${random(1,200)}`;
                btn.style.backgroundColor = 'hsl(150, 100%, 66%)';
                img.style.transform = 'rotatey(180deg)';
            })
            .catch(err =>{
                    console.error(err);
            })
        console.log('event');

}

btn.addEventListener('click', ()=>{
    advice()
});
advice()





