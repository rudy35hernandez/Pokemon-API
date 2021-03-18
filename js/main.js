/// Added the simplified version of fetch!!!!

  document.querySelector('button').addEventListener('click', getCards)


let level1;
let level2;
let name1;
let name2;

async function getCards(){
  /// Around 880 pokemon, creating randomized picker
let random = Math.floor(Math.random() * 880);
let url1 = `https://pokeapi.co/api/v2/pokemon/${random}`
let random2 = Math.floor(Math.random() * 880)
let url2 = `https://pokeapi.co/api/v2/pokemon/${random2}`

try{
  const [data, data2] = await Promise.all([
    fetch(url1)
    .then(res => res.json()),

    fetch(url2)
    .then(res2 => res2.json())

  // name1 = data.forms[0].name
  // let pic1 = data.sprites.other['official-artwork'].front_default;
  // level1 = Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
  // document.querySelector('#pokeImg1').src = pic1
  // document.querySelector('#pokeImg1').style.visibility = "visible";
  // document.querySelector('h2').innerHTML = name1.toUpperCase()
  // document.querySelector('#firstScore').innerHTML = `Your total score is ${level1}`
  // console.log(level1),

])
////////First pokemon data
name1 = data.forms[0].name
  let pic1 = data.sprites.other['official-artwork'].front_default;
  level1 = Number(data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
  document.querySelector('#pokeImg1').src = pic1
  document.querySelector('#pokeImg1').style.visibility = "visible";
  document.querySelector('h2').innerHTML = name1.toUpperCase()
  document.querySelector('#firstScore').innerHTML = `Your total score is ${level1}`
  console.log(level1)
////////////Second pokemon data
  name2 = data2.forms[0].name;
    let pic2 = data2.sprites.other['official-artwork'].front_default
    level2 = Number(data2.stats[0].base_stat + data2.stats[1].base_stat + data2.stats[2].base_stat + data2.stats[3].base_stat + data2.stats[4].base_stat + data2.stats[5].base_stat)
    document.querySelector('h3').innerHTML = name2.toUpperCase()
    document.querySelector('#pokeImg2').src = pic2
    document.querySelector('#pokeImg2').style.visibility = "visible";
    document.querySelector('#secondScore').innerText = `Your total score is ${level2}`
    console.log(level2)
    ///////conditional to get winner
    if(level1 > level2){
      document.querySelector('h5').innerText = `${name1}`.toUpperCase() +  " wins the battle!"
    } else if(level2 > level1){
      document.querySelector('h5').innerText = `${name2}`.toUpperCase() + " wins the battle!"
    } else if(level1 == level2){
      document.querySelector('h5').innerText = 'This battle is a draw!'
    }
} catch (err){
  console.log(`err ${err}`)
}
}
//   } catch (err){
//    console.log(`err ${err}`)
// }

// let random2 = Math.floor(Math.random() * 880)
// let url2 = `https://pokeapi.co/api/v2/pokemon/${random2}`

// const res2 = await fetch(url2)
// const data2 = await res2.json()
// name2 = data2.forms[0].name;
//     let pic2 = data2.sprites.other['official-artwork'].front_default
//     level2 = Number(data2.stats[0].base_stat + data2.stats[1].base_stat + data2.stats[2].base_stat + data2.stats[3].base_stat + data2.stats[4].base_stat + data2.stats[5].base_stat)
//     document.querySelector('h3').innerHTML = name2.toUpperCase()
//     document.querySelector('#pokeImg2').src = pic2
//     document.querySelector('#pokeImg2').style.visibility = "visible";
//     document.querySelector('#secondScore').innerText = `Your total score is ${level2}`
//     console.log(level2)
//     if(level1 > level2){
//       document.querySelector('h5').innerText = `${name1}`.toUpperCase() +  " wins the battle!"
//     } else if(level2 > level1){
//       document.querySelector('h5').innerText = `${name2}`.toUpperCase() + " wins the battle!"
//     } else if(level1 == level2){
//       document.querySelector('h5').innerText = 'This battle is a draw!'
//     }
//   }
  
