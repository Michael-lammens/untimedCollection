// mobile buttons and search bar
let hed = document.getElementById("header")
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    x = navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    console.log(x)
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}
// close menu on scroll
window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
})

/// optimize for mobile
heads = document.getElementById("home")
canv = document.getElementById("hero-lightpass")
if (screen.width < 800){
    heads.style.backgroundImage = "url('/images/dd40backdrop1.jpg')";
    heads.style.display = 'flex';
    heads.style.backgroundSize = 'cover'
    heads.style.margin = "0px";
    heads.style.paddingBottom = "200px";
    canv.style.maxWidth = "65vw"
    //canv.style.maxHeight = "85vw"
    canv.style.paddingLeft = "0px"




    /* position:static;
    padding-top: 85px;
    padding-left: 70px;
    top: 50%;
    transform: translate(30%, -20%);
    max-width: 90vw;
    max-height: 60vh;*/

}
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
const frameCount = 67;
const currentFrame = index => (
    `images/jpgSeq/cut${index.toString().padStart(1,"0")}.jpg`
  )

/// start of fancy animation
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=648;
canvas.height=818;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount * 5)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()
