/*document.querySelector('button').addEventListener('click', getCards)

let level1;
let level2;
let name1;
let name2;

function getCards(){
let random = Math.floor(Math.random() * 880);
let url = `https://pokeapi.co/api/v2/pokemon/${random}`

fetch(url)
  .then(res => res.json())
  .then(data => {
    
    name1 = data.forms[0].name
    let pic1 = data.sprites.other['official-artwork'].front_default;
    level1 = Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
    document.querySelector('#pokeImg1').src = pic1
    document.querySelector('h2').innerHTML = name1.toUpperCase()
    document.querySelector('#firstScore').innerHTML = `Your total score is ${level1}`

  })
  .catch(err => {
    console.log(`err ${err}`)
  })

let random2 = Math.floor(Math.random() * 880)
let url2 = `https://pokeapi.co/api/v2/pokemon/${random2}`

fetch(url2)
  .then(res => res.json())
  .then(data => {
    console.log(Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat ))
    name2 = data.forms[0].name;
    let pic2 = data.sprites.other['official-artwork'].front_default
    level2 = Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
    document.querySelector('h3').innerHTML = name2.toUpperCase()
    document.querySelector('#pokeImg2').src = pic2
    document.querySelector('#secondScore').innerText = `Your total score is ${level2}`
    
  })
  .catch(err => {
    console.log(`err ${err}`)
  });

  }*/

  document.querySelector('button').addEventListener('click', getCards)

let level1;
let level2;
let name1;
let name2;

function getCards(){
let random = Math.floor(Math.random() * 880);
let url1 = `https://pokeapi.co/api/v2/pokemon/${random}`

fetch(url1)
  .then((res) => {
  res.json().then((data) =>{
    name1 = data.forms[0].name
    let pic1 = data.sprites.other['official-artwork'].front_default;
    level1 = Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
    document.querySelector('#pokeImg1').src = pic1
    document.querySelector('#pokeImg1').style.visibility = "visible";
    document.querySelector('h2').innerHTML = name1.toUpperCase()
    document.querySelector('#firstScore').innerHTML = `Your total score is ${level1}`
    console.log(level1)

})
}) //prints 35
  .catch(err => {
    console.log(`err ${err}`)
  })

let random2 = Math.floor(Math.random() * 880)
let url2 = `https://pokeapi.co/api/v2/pokemon/${random2}`

fetch(url2)
  .then((res) => {
  res.json()
  .then((data) =>{
  console.log(Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat) )
    name2 = data.forms[0].name;
    let pic2 = data.sprites.other['official-artwork'].front_default
    level2 = Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
    document.querySelector('h3').innerHTML = name2.toUpperCase()
    document.querySelector('#pokeImg2').src = pic2
    document.querySelector('#pokeImg2').style.visibility = "visible";
    document.querySelector('#secondScore').innerText = `Your total score is ${level2}`
    if(level1 > level2){
      document.querySelector('h5').innerText = `${name1} wins the battle!`
    } else if(level2 > level1){
      document.querySelector('h5').innerText = `${name2} wins the battle!`
    } else if( level === level2){
      document.querySelector('h5').innerText = 'This battle is a draw!'
    }
  
})
}) 
  .catch(err => {
    console.log(`err ${err}`)
  });

  
}


  

