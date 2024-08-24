const dailyButton = document.getElementById("daily")
const monthlyButton = document.getElementById("monthly")
const weeklyButton = document.getElementById("weekly")     
const work = document.getElementById("work")
const play = document.getElementById("play")
const study = document.getElementById("study")
const exercise = document.getElementById("exercise")
const social = document.getElementById("social")
const selfcare = document.getElementById("selfcare")
blocks = [work, play, study, exercise, social, selfcare]
let arr;
async function loadJsonData(){
    if(!arr){
         const response = await fetch("data.json")
         arr = await response.json()
    }
    }
loadJsonData()

    
        
function main(event, data, arr){
    for(let i = 0; i < arr.length; i++){
        console.log(i)
        let newCurrent = arr[i].timeframes[data].current + "hrs"
        let newPrevious = "Last Week - " + arr[i].timeframes[data].previous + "hrs"
        blocks[i].children[0].innerHTML = newCurrent
        blocks[i].children[1].innerHTML = newPrevious
      

        


    }
    
}

function displayJsonData(array){
    console.log(array)
    work.children[0].innerHTML = array[0].timeframes.weekly.current + "hrs"
    work.children[1].innerHTML = "Last Week -" + array[0].timeframes.weekly.previous + "hrs"

}
//const colours = [work, blue, red, green, purple, yellow]

dailyButton.addEventListener("click", event => main(event, "daily", arr))
weeklyButton.addEventListener("click", event => main(event, "weekly", arr))
monthlyButton.addEventListener("click", event => main(event, "monthly", arr))

