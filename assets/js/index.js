let data = [
  {
    judul: "Red Dead Redemption II",
    sinopsis:
      "Red Dead Redemption is a 2018 action-adventure game developed and published by Rockstar Games.The story is set in a fictionalized representation of the United States in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, who must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries.",
    harga: 750000,
    genre: "strategy",
    game: 1,
    src: "/assets/red.jpeg",
    id: "str1",
  },
  {
    judul: "Resident Evil Village",
    sinopsis:
      "Resident Evil Village is a 2021 survival horror game developed and published by Capcom. It is the sequel to Resident Evil 7: Biohazard (2017). Players control Ethan Winters, who searches for his kidnapped daughter in a village filled with mutant creatures. Village maintains survival horror elements from previous Resident Evil games, with players scavenging environments for items and managing resources.",
    harga: 600000,
    genre: "strategy",
    game: 2,
    src: "/assets/REV.png",
    id: "str2",
  },
  {
    judul: "God Of War",
    sinopsis:
      "God of War is a critically acclaimed action-adventure game set in the world of Norse mythology. The protagonist, Kratos, is a former Greek God of War who has relocated to Midgard after taking his revenge against the Olympian gods. In the game, Kratos must come to terms with his past actions and learn to control his rage as he mentors his young son Atreus and prepares him for the harsh world of Norse gods.",
    harga: 300000,
    genre: "rpg",
    game: 1,
    src: "/assets/God.jpg",
    id: "rpg1",
  },
  {
    judul: "Hogwarts Legacy",
    sinopsis:
      "Hogwarts Legacy is a new action RPG set in the Harry Potter universe during the 1800s. Players control a student who possesses a key to an ancient secret that could potentially destroy the wizarding world. The game allows players to create their own adventure and shape their own legacy in the wizarding world.",
    harga: 400000,
    genre: "rpg",
    game: 2,
    src: "/assets/hogwarts.jpg",
    id: "rpg2",
  },
  {
    judul: "Battlefield 5",
    sinopsis:
      "Battlefield 5 is a World War II first-person shooter game developed by EA DICE. The game offers both single player War Stories and multiplayer modes for up to 64 players, with a range of customizable weapons and vehicles available. Battlefield 5 aims to provide a realistic and immersive gaming experience with its focus on intense warfare and immersive environments.",
    harga: 600000,
    genre: "fps",
    game: 1,
    src: "/assets/BattlefieldV.jpg",
    id: "fps1",
  },
  {
    judul: "Call Of Duty - Modern Warfare 2",
    sinopsis:
      "Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience.",
    harga: 800000,
    genre: "fps",
    game: 2,
    src: "/assets/cod.jpg",
    id: "fps2",
  },
  {
    judul: "Street Fighter 6",
    sinopsis:
      "Street Fighter 6 is the latest installment in the Street Fighter franchise and features a diverse roster of 18 fighters, including classic characters like Ryu and Chun-Li and new fan favorites like Luke and Jamie. The game offers a highly evolved combat system with three control types and a new Drive Gauge system to manage resources. It also includes a Real Time Commentary Feature that adds excitement to matches and provides easy-to-understand explanations of gameplay.",
    harga: 135000,
    genre: "fighting",
    game: 1,
    src: "/assets/ST.jpg",
    id: "fig1",
  },
  {
    judul: "Tekken 7",
    sinopsis:
      "Tekken 7 is a fighting game developed by Bandai Namco Entertainment that features a roster of diverse characters and fast-paced, 3D combat. Players engage in one-on-one battles to defeat their opponents, using a combination of punches, kicks, and special moves unique to each character. The game also includes a storyline mode that explores the personal and political conflicts between the characters, leading up to the final battle for control of the Iron Fist tournament.",
    harga: 180000,
    genre: "fighting",
    game: 2,
    src: "/assets/tekken.jpg",
    id: "fig2",
  },
];

function renderGame(i) {
  let element = `<div class="game">
        <img class="pictureGame" src="${data[i].src}">
        <div class="isiGameList"><p id="infoGame"></p>
        <p class="price"></p>
        <p>str1</p>
        <button id="addToCart" onClick='${data[i].id}'>Add To Cart</button>
        <p>${data[i].id}</p>
        </div>
    </div>`;

  let div = document.createElement("div");
  div.setAttribute("class", "game");
  let img = document.createElement("img");
  img.setAttribute("class", `pictureGame`);
  img.src = data[i].src;
  div.appendChild(img);
  let div2 = document.createElement("div");
  div2.setAttribute("class", "isiGameList");
  let price = document.createElement("p");
  let infoGame = document.createElement("p");
  price.setAttribute("class", `price`);
  price.innerText = data[i].harga;
  infoGame.setAttribute("id", `infoGame`);
  infoGame.innerText = data[i].sinopsis;
  div2.appendChild(infoGame);
  div2.appendChild(price);
  let button = document.createElement("button");
  button.setAttribute("id", "addToCart");
  console.log(data[i].id);
  button.setAttribute("onClick", `addToCart('${data[i].id}')`);
  button.innerText = "Add To Cart";
  // let idGame = document.createElement("p")
  // idGame.innerText = data[i].id
  // div2.appendChild(idGame)

  // idGame = data[i].id
  // idGame.appendChild(id)
  // idGame.style.display = 'none'
  div2.appendChild(button);
  div.appendChild(div2);
  gameList.appendChild(div);

  // button.addEventListener("click", addToCart())
}

let orders = [];
function addToCart(id) {
  let pesan = data.find((el) => el.id === id);
  orders.push(pesan);
  loopOrder();
}

function loopOrder() {
  // let element = `
  // <div id="orders">
  // <table   class="cart">
  //   <thead>
  //     <tr>
  //         <th>No</th>
  //         <th>Game</th>
  //         <th>Harga</th>
  //         <th>Jumlah Item</th>
  //         <th>Total</th>
  //     </tr>
  // </thead>
  // <tbody id="table_order">
  // `;
  let element = "";
  let heading = "";
  let price = 0;
  let jumlah = 1;
  let totalHarga = 0;
  let nomor = 0;
  for (let i = 0; i < orders.length; i++) {
    nomor++;
    totalHarga += orders[i].harga;
    element += `
        <tr class='row'>
            <td class='col'>${nomor}</td>
            <td class='col'>${orders[i].judul}</td>
            <td class='col'>${orders[i].harga}</td>
            <td class='col'>${jumlah}</td>
        </tr>
        
        `;
  }
  // element += "</tbody></table>";
  let total = `Total : Rp.${totalHarga}`;
  document.getElementById("totalHarga").innerHTML = total;
  document.getElementById("table_order").innerHTML = element;
}

function filterGenre(genre) {
  console.log("filter");
  let result = [];
  document.getElementById("game-list").innerHTML = "";
  let template = "";
  for (let i = 0; i < data.length; i++) {
    console.log(i);
    let obj = {};
    let element = data[i];
    if (obj.sinopsis === undefined && obj.harga === undefined) {
      obj.sinopsis = "";
      obj.harga = 0;
    }
    if (element.genre === genre) {
      obj.sinopsis = element.sinopsis;
      obj.harga = element.harga;
      obj.game = element.game;
      result.push(obj);
      template += `<div class="game">
                <img class="pictureGame" src="${data[i].src}">
                <div class="isiGameList">
                    <p id="infoGame">${data[i].sinopsis}</p>
                    <p class="price">${"IDR " + data[i].harga}</p>
                <button id="addToCart" onClick="addToCart('${
                  data[i].id
                }')">Add To Cart</button>
                <p style='display: none;'>${data[i].id}</p>
                </div>
            </div>`;
      // renderGame(i)
    }
  }
  // console.log(document.getElementById("list-content"));
  document.getElementById("game-list").innerHTML = template;
  document.getElementById("noGenre").style.display = "none";
  button.addEventListener("click", addToCart());
  return result;
}

// console.log(filterGenre("strategy"));

// let strategy1 = {
//     sinopsis: "ini adalah game strategy 1",
//     harga: 450000
// }

// let strategy2 = {
//     sinopsis: "ini adalah game strategy 2",
//     harga: 300000
// }

/*
1. bikin looping untuk nentuin game di dalem function filterGenre
*/

function cart() {
  let popup = document.getElementsByClassName("modal")[0];
  console.log(popup);
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

function clearCart() {
  orders.splice(0, orders.length);
  loopOrder();
}

$(".spanG").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#game-list").offset().top,
    },
    "slow"
  );
});

function checkout() {
  orders.splice(0, orders.length);
  loopOrder();
  alert("Selamat kamu telah berhasil membeli game favorite mu");
  console.log("clear berhasil");
}
