let elm = document.getElementById('div__content')
let listUserCard = [
    {
     "name": "Ann Harris",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/410.jpg",
     "city": "New Jarrell",
     "id": "1"
    },
    {
     "name": "Hazel Shanahan",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/501.jpg",
     "city": "Santoschester",
     "id": "2"
    },
    {
     "name": "Donna Douglas",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1093.jpg",
     "city": "Waldorf",
     "id": "3"
    },
    {
     "name": "Darla Hodkiewicz",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1141.jpg",
     "city": "Gutkowskiland",
     "id": "4"
    },
    {
     "name": "Miss Jerald Barton",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/178.jpg",
     "city": "Bend",
     "id": "5"
    },
    {
     "name": "Gilberto Rutherford",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/379.jpg",
     "city": "North Trevor",
     "id": "6"
    },
    {
     "name": "Mrs. Jenny O'Conner",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/853.jpg",
     "city": "Lake Thurman",
     "id": "7"
    },
    {
     "name": "Charles Littel",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/619.jpg",
     "city": "Lambertboro",
     "id": "8"
    },
    {
     "name": "Caroline Graham",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/604.jpg",
     "city": "New Robert",
     "id": "9"
    },
    {
     "name": "Pedro Sanford",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg",
     "city": "Port Jerod",
     "id": "10"
    },
    {
     "name": "Mr. Johnathan Crooks",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1097.jpg",
     "city": "Wintheiserfurt",
     "id": "11"
    },
    {
     "name": "Tommy Volkman",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg",
     "city": "Lake Chance",
     "id": "12"
    }
   ]

function formatUICard(user) {
    return `
    <div class="card col-4">
        <img
            src="${user.avatar}"
            ,
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
}
let resUI = '';
for (let index = 0; index < listUserCard.length; index++) {
    resUI += formatUICard(listUserCard[index])
    
}
elm.innerHTML = resUI;