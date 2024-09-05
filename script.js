const ques = [
    {
        Q: "My Name is....",
        options: ['Jaka Perdana', 'Anang', 'joko','andi']
    },
    {
        Q: 'ada berapa jumlah sayap burung garuda pada gambar dibawah ini', 
        options:['17', '18', '19', '20']
    },
    {
        Q: 'Apa yang dilakukan andi di video berikut ini', 
        options:['makan', 'minum', 'berlari', 'diam']
    },
    {
        Q: 'Pertanyaan Ke 4 (Indeks : 3 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 5 (Indeks : 4 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 6 (Indeks : 5 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 7 (Indeks : 6 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 8 (Indeks : 7 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 9 (Indeks : 8 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 10 (Indeks : 9 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 11 (Indeks : 10 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 12 (Indeks : 11 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 13 (Indeks : 12 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 14 (Indeks : 13 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 15 (Indeks : 14 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 16 (Indeks : 15 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 17 (Indeks : 16 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 18 (Indeks : 17 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 19 (Indeks : 18 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'Pertanyaan Ke 20 (Indeks : 19 )', 
        options:['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4']
    },
    {
        Q: 'You Have Completed Success', 
        options:[]
    }
]

const ans = ['Jaka Perdana', '17', 'minum', 'Pilihan 1']

const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryagn = document.querySelector('.btn');


let m=0;

next.addEventListener('click',()=>{

    m+=1;
    quiz();
    if(m== ques.length-1){
        document.querySelector('.ans').style.display ='none';
        next.style.display = 'none';
        document.querySelector('.hding').style.display = 'none';
    }
})

function showImagePopup(src) {
    const popupImg = document.getElementById('popup-img');
    const popupImage = document.getElementById('popup-image');
    popupImg.style.display = "block";
    popupImage.src = src;
}

function showVideoPopup(src) {
    const popupVid = document.getElementById('popup-vid');
    const popupVideo = document.getElementById('popup-video');
    popupVid.style.display = "block";
    popupVideo.src = src;
}

document.querySelectorAll('.close').forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.style.display = 'none';
    });
});


function quiz(){

    question.innerHTML = ques[m].Q;

    for(let i =0; i< opt.length; i++){
        opt[i].innerHTML= ques[m].options[i];
        opt[i].parentElement.style.backgroundColor = 'gray'
        next.style.display = 'none';
    }

    // Soal nomor 3 (menampilkan foto) indeks ke - 1
    if (m == 1) {
        question.innerHTML += `<br><button id="showImgBtn" class="custom-btn" >Lihat Gambar</button>`;
        document.getElementById('showImgBtn').addEventListener('click', () => {
        showImagePopup('picture.jpeg');
        });
    }

    // Soal nomor 3 (menampilkan video) indeks ke - 2
    if (m == 2) {
        question.innerHTML += `<br><button id="showVidBtn" class="custom-btn">Lihat Video</button>`;
        document.getElementById('showVidBtn').addEventListener('click', () => {
            showVideoPopup('Download.mp4');
        });
    }


    for(item of opt){
        item.addEventListener('click',(e)=> {
            let value = e.target.innerText;

            if(value == ans[m]){
                e.target.parentElement.style.backgroundColor = 'green';
                next.style.display = 'flex';    
            }
            else {
                document.querySelector('.box').style.display = 'none';
                e.target.parentElement.style.backgroundColor = 'red';
                document.querySelector('.win').style.display = 'block';
                document.querySelector('.btn').style.display = 'flex';
            }

        })
    }
}

tryagn.addEventListener('click',()=>{
    location.reload(true);
})


quiz();

