let data = [1,2,3,6,9,8,7,4]

const button5 = document.querySelector(".clockwise")
const body = document.querySelector("body")
const antiClockWise = document.querySelectorAll(".anticlock")
const buttons = document.querySelectorAll(".button")
const reset = document.getElementById("reset");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");

button5.addEventListener("click", () =>{
   clockRotateBtn()
   displayElementOrder()
   let colors = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
   let color = "#"
   for(let i = 0; i<6; i++){
    let random = Math.floor(Math.random()*colors.length)
    color += colors[random]
   }
   body.style.backgroundColor = color;
   
})

antiClockWise.forEach((btns)=>{
   	btns.addEventListener("click", ()=>{
        antiRotateBtn()
		displayElementOrder()
        let colors = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
        let color = "#"
        for(let i = 0; i<6; i++){
         let random = Math.floor(Math.random()*colors.length)
         color += colors[random]
        }
        body.style.backgroundColor = color;
	})
})

reset.addEventListener("click", ()=>{
	let resetting = [1,2,3,6,9,8,7,4]
    data = resetting
	displayElementOrder()
    body.style.backgroundColor = "#e4f5f9"
})

const clockRotateBtn = ()=>{
	let rotate = data.pop()
	data.unshift(rotate)
    return data
}

const antiRotateBtn = ()=>{
	let antiRotate = data.shift()
	data.push(antiRotate)
    return data
}

const displayElementOrder = () => {
    antiClockWise.forEach((box) => {
        let index = box.dataset.id - 1;
        box.textContent = data[index];
    })
}

const resetBtns = () =>{

}