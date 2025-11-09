
let url = "https://quranapi.pages.dev/api/2/7.json";

let to = document.getElementById("to");
let from = document.getElementById("from");
let output = document.querySelector('.output')
let btn = document.querySelector(".submit input");
let inp = document.getElementById("inp")
let tost = document.getElementById("tost")
let done = document.getElementById("done")
let urls = []
let surah = ''

btn.addEventListener("click", function (e) {
    e.preventDefault();
    tost.classList.remove('hide')
    output.innerHTML = ''

    if (isNaN(to.value) || to.value === "") {
        alert('use a number')
        tost.classList.add('hide')
        return;
    }
   
    if (!isNaN(inp.value)) {
        surah= Number(inp.value);
        if (surah < 1 || surah > 114) {
            alert('Surah number must be between 1 and 114');
            tost.classList.add('hide')
            return;
        }
        if (from.value === "" || isNaN(from.value) || from.value < 1) {
            from.value = 1;
        }
        

    }

    for (let i = from.value; i <= to.value; i++) {
        urls.push(`https://quranapi.pages.dev/api/${surah}/${i}.json`)



    }

    let datas = urls.map(url =>


        fetch(url).then(res => res.json())

    )

    Promise.all(datas)
        .then(data => {

            data.map((d) => {
                console.log(d);


                let div = document.createElement('div');
                div.classList.add('out-2')
                let p = document.createElement('p');
                p.innerText = d.arabic1;
                div.appendChild(p)
                let audio = document.createElement('audio');
                audio.setAttribute('src', d.audio[4].originalUrl);
                audio.setAttribute('controls', true);
                div.appendChild(audio)
                output.appendChild(div)
                tost.classList.add('hide')
                done.classList.remove('hide')
                setTimeout(() =>
                    done.classList.add('hide'), 3000)



            })
        })
        .catch(error => console.error('API request failed:', error));










});



