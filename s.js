
let url = "https://quranapi.pages.dev/api/2/7.json";

let to = document.getElementById("to");
let from = document.getElementById("from");
let out = document.querySelector('.out')
let btn = document.querySelector(".submit input");
let inp=document.getElementById("inp")
let tost=document.getElementById("tost")
let done=document.getElementById("done")
let urls = []
let surah=''
btn.addEventListener("click", function (e) {
    e.preventDefault();
tost.classList.remove('hide')
    out.innerHTML = ''

    if (isNaN(to.value) || to.value === "") {
         alert('use a number')
        
        return;
    }
    if (!isNaN(inp.value)) {
        surah=inp.value
    }
    
    for (let i = from.value; i <= to.value; i++) {
        urls.push(`https://quranapi.pages.dev/api/${surah}/${i}.json`)



    }

   let datas= urls.map(url=>
   
    
    fetch(url).then(res=>res.json())
    
   )

Promise.all(datas)
  .then(data => {
   
        data.map((d) => {
console.log(d);


        let div = document.createElement('div');
        div.classList.add('out-2')
        let audio = document.createElement('audio');
        audio.setAttribute('src', d.audio[4].originalUrl);
        audio.setAttribute('controls', true);
        div.appendChild(audio)
        out.appendChild(div)
         tost.classList.add('hide')
             done.classList.remove('hide')
             setTimeout(done.classList.remove('hide'),3000)


    })
  })
  .catch(error => console.error('API request failed:', error));






   



});



