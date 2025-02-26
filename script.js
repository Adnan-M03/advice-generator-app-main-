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
    btn.disabled = true;
    setTimeout(()=>{
        btn.disabled = false;
    }, 2 * 1000)
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
                paraCount.textContent = `ADVICE #${random(1,200)}`;
            })
            .catch(err =>{
                    console.error(err);
            })

}

btn.addEventListener('click', ()=>{
    advice()
    console.log('event');
});
advice()





