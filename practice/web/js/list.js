// get elm body table
let elmBodyTable = document.getElementById('tbody_user');
let tempRowTable = '';

// dummy data row `<tr><td>1</td><td>2</td></tr>`
// for (let index = 0; index < 4; index++) {
//     tempRowTable += `<tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>`
// }

// elm.innerHTML -> render row table -> table co 1 row data
// for -> render 5 row 

// dummy listUser -> for listUser -> render data row listUser
// tạo 1 biến user
let user = {
    id: 1,
    name: 'name 1',
    age: 30,
    address: 'address 1'
}

function formatRowUser(user) {
    let _stringTr = `<tr>
    <th scope="row">${user.id}</th>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.address}</td>
</tr>`
    return _stringTr
}

let listUser = [
    {
        id: 1,
        name: 'name 1',
        age: 30,
        address: 'address 1'
    },
    {
        id: 2,
        name: 'name 2',
        age: 30,
        address: 'address 2'
    },
    {
        id: 3,
        name: 'name 3',
        age: 30,
        address: 'address 3'
    },
    {
        id: 4,
        name: 'name 4',
        age: 34,
        address: 'address 4'
    }
    
]
for (let index = 0; index < listUser.length; index++) {
    tempRowTable += formatRowUser(user)
    
}
for (let index = 0; index < listUser.length; index++) {
    tempRowTable += formatRowUser(listUser[index])
    
}

// listUser.map((user) => {
//     tempRowTable += formatRowUser(user)
// })

elmBodyTable.innerHTML = tempRowTable 




