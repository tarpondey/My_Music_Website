
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar') ;
let gif=document.getElementById('gif');
let mastersongName=document.getElementById('mastersongName');
let songItem=Array.from(document.getElementsByClassName('sontItem'));
let songs=[
    {songName:"Ae Watan",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"Ae Mere Watan Ke Logo",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"Sandese Aati Hai",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"Sare Jahan Se Accha",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"Aaguner Parashmani",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"Shape Of You",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"Alvida - KK",filePath:"7.mp3",coverPath:"7.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});

// Listen to event
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;
});
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value * audioElement.duration/100;
});
const makeAllPLays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPLays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        musics=(songIndex+1)+'.mp3';
        audioElement.src=musics;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 6){
        songIndex=0;
    }
    else{

        songIndex+=1;
    }
    musics=(songIndex+1)+'.mp3';
    audioElement.src=musics;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=6;
    }
    else{

        songIndex-=1;
    }
    musics=(songIndex+1)+'.mp3';
    audioElement.src=musics;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})