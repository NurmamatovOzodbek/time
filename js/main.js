let gmtTime = document.querySelector(".gmt__time")
let nowTime = document.querySelector(".now__time")
let againTime = document.querySelector(".again__time")
let input = document.querySelector("input[type='text'] ")
let btn = document.querySelector("button")

input.addEventListener("input", (e) => {
  let value = e.target.value
})

btn.addEventListener('click',timeZoneOffset)

function timeZoneOffset(){
  let s = +input.value
  let msAg = s * 3600 * 1000
  let msNow = Date.parse(gmt)
  let result = null
  if(s>0){
    result = msNow + msAg
  }
  else{
    result = msNow - Math.abs(msAg)
  }
  let newTime = new Date(result).toUTCString()
  againTime.innerText =  newTime

}
let gmt = new Date().toUTCString()

setInterval(() =>{
  let now = new Date()
  let gmt = new Date().toUTCString()
  gmtTime.innerText = gmt
  nowTime.innerText = now
},1000)