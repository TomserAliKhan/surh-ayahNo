
let url = "https://quranapi.pages.dev/api/2/7.json";

let to = document.getElementById("to");
let from = document.getElementById("from");
let out = document.querySelector('.out')
let btn = document.querySelector(".submit input");
let inp = document.getElementById("inp")
let tost = document.getElementById("tost")
let done = document.getElementById("done")

let surah = ''
btn.addEventListener("click", function (e) {
    e.preventDefault();
      out.innerHTML = "";

    tost.classList.remove('hide')

    if (isNaN(to.value) || to.value === "" || isNaN(from.value) || from.value === "") {
        alert('use a number')
        tost.classList.add('hide')
        return;
    }
    if (from.value > to.value) {
        alert('From must be less than To')
        tost.classList.add('hide')
        return;
    }

    if (!isNaN(inp.value)) {
        surah = inp.value
    }
    let urls = []// Reset urls array on each click 
    for (let i = from.value; i <= to.value; i++) {
        urls.push(`https://quranapi.pages.dev/api/${surah}/${i}.json`)



    }
    try {
        let datas = Promise.all(urls.map(url =>
            fetch(url).then(res => res.json())))




        .then(data=>data.map(d => {
            console.log(d);


            let div = document.createElement('div');
            div.classList.add('out-2')
            let audio = document.createElement('audio');
            audio.setAttribute('src', d.audio[4].originalUrl);
            audio.setAttribute('controls', true);
            let p = document.createElement('p');
            p.textContent = d.arabic1;
            div.appendChild(p)
            div.appendChild(audio)
            out.appendChild(div)





        }))
      tost.classList.add('hide')
      done.classList.remove('hide')     
      setTimeout(() => {
        done.classList.add('hide')
      }, 3000);
}
 catch(error) {
        console.log( error)
    }





 
   




});



