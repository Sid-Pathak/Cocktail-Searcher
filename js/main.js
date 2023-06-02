//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//document.querySelector('button').addEventListener('click', reset)
document.querySelector('button').addEventListener('click' , getDrink)


//function reset(){}

function getDrink(){


let drink = document.querySelector('input').value

if(drink === ""){
    document.querySelector('h2').innerText = "Enter a drink"
    document.querySelector('img').src = ""
    document.querySelector('h3').classList.add('hidden')
    
}else{

    
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)


    .then(res => res.json()) // parse response as JSON
    .then(data => {
    let i = Math.floor(Math.random()*data.drinks.length)
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[i].strDrink
      document.querySelector('img').src = data.drinks[i].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[i].strInstructions
      document.querySelector('h3').classList.remove('hidden')
    })
    .catch(err => {
        console.log(`error ${err}`)
        document.querySelector('h2').innerText = "Invalid drink Entered"
        document.querySelector('h3').style.display = 'none'
    });
    }
}