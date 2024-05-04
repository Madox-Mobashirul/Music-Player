var arr = [
    {
        songName: "Koi Si", url: "./songs/Koi si.mp4", img: "./images/img5.jpg"
    },
    {
        songName: "Animals X Starboy", url: "./songs/Animals X Starboy.mp4", img: "./images/img3.jpg"
    },
    {
        songName: "Normal Guy", url: "./songs/Everyday Normal.mp4", img: "./images/img4.jpg"
    },
    {
        songName: "Chammak Challo", url: "./songs/Chammak Challo.mp4", img: "./images/img2.jpg"
    },
    {
        songName: "Get Into It x Piya", url: "./songs/GET INTO IT x PIYA.mp4", img: "./images/img1.jpg"
    }
]
var allsongs =document.querySelector("#all-songs")
var selectedSong =0;
var poster =document.querySelector("#left")

var play =document.querySelector("#play")
var backward =document.querySelector("#backward")
var forward =document.querySelector("#forward")


var audio = new Audio
function mainfunction()
{
    var cultter = ""
arr.forEach(function(elem,idx){
cultter += 
`<div class="song-card" id=${idx} >
<div class="part1" >
<img src=${elem.img} alt="">
    <h2>${elem.songName}</h2>
</div>
<h6>3.05</h6>
</div>`
allsongs.innerHTML = cultter
audio.src =arr[selectedSong].url
poster.style.backgroundImage =`url(${arr[selectedSong].img})`

})
}
mainfunction();

allsongs.addEventListener("click",function(dets){
   selectedSong = [dets.target.id]
   play.innerHTML=`<i class="ri-pause-line"></i>`
   i=1
   mainfunction()
    audio.play()
   
})
var i=0
play.addEventListener("click",function(){
    if(i==0){
        play.innerHTML=`<i class="ri-pause-line"></i>`
        mainfunction()
        audio.play()
        i=1
    }else{
        play.innerHTML=`<i class="ri-play-line"></i>`
        mainfunction()
        audio.pause()
        i=0
    }
    
})

forward.addEventListener("click",function(){
    if(selectedSong <arr.length -1){
        selectedSong ++
        mainfunction();
        audio.play()
    }else{
        forward.style.opacity=0.32
    }
})
backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong --
        mainfunction();
        audio.play()
    }else{
        backward.style.opacity=0.32
    }
})