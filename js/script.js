let add_player1_btn = document.getElementById('enter-player1-btn')
let add_player2_btn = document.getElementById('enter-player2-btn')

let h4_tags = document.getElementsByTagName('h4')
let h5_tags = document.getElementsByTagName('h5')

let player1_name = document.getElementById('player1-input')
let player2_name = document.getElementById('player2-input')

add_player1_btn.addEventListener('click', add_player1_name)
add_player2_btn.addEventListener('click', add_player2_name)

let player1_score = 0
let player2_score = 0

function add_player1_name() {
    h4_tags[0].innerText = `${player1_name.value}`
    h5_tags[0].innerText = player1_score
}

function add_player2_name() {
    h4_tags[1].innerText = `${player2_name.value}`
    h5_tags[1].innerText = player2_score
}


let row1_col1 = document.getElementById('row1-column1')
let row1_col2 = document.getElementById('row1-column2')
let row1_col3 = document.getElementById('row1-column3')

let row2_col1 = document.getElementById('row2-column1')
let row2_col2 = document.getElementById('row2-column2')
let row2_col3 = document.getElementById('row2-column3')

let row3_col1 = document.getElementById('row3-column1')
let row3_col2 = document.getElementById('row3-column2')
let row3_col3 = document.getElementById('row3-column3')

row1_col1.addEventListener('click', symbol)
row1_col2.addEventListener('click', symbol)
row1_col3.addEventListener('click', symbol)

row2_col1.addEventListener('click', symbol)
row2_col2.addEventListener('click', symbol)
row2_col3.addEventListener('click', symbol)

row3_col1.addEventListener('click', symbol)
row3_col2.addEventListener('click', symbol)
row3_col3.addEventListener('click', symbol)

let turn = 0

function symbol(e) {
    turn+=1
    let newListItem = document.createElement('class')

    newListItem.innerHTML = '<svg xmlns=\'http://www.w3.org/2000/svg\'; width=\'50\'; height=\'50\'; viewBox=\'0 0 70 70\'; fill=\'none\'> <circle cx=\"35\" cy=\"35\" r=\"35\" fill=\"#D9D9D9\"></svg>'
    row1_col1.append(newListItem)

    console.log(row1_col1)
}

console.log(turn)

let r = document.getElementById('row1-column1')
//console.log(r)
