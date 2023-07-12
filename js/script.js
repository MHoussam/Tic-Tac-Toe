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


let row1_col1 = document.getElementById('row1_column1')
let row1_col2 = document.getElementById('row1_column2')
let row1_col3 = document.getElementById('row1_column3')

let row2_col1 = document.getElementById('row2_column1')
let row2_col2 = document.getElementById('row2_column2')
let row2_col3 = document.getElementById('row2_column3')

let row3_col1 = document.getElementById('row3_column1')
let row3_col2 = document.getElementById('row3_column2')
let row3_col3 = document.getElementById('row3_column3')

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

let row1_column1 = false
let row1_column2 = false
let row1_column3 = false

let row2_column1 = false
let row2_column2 = false
let row2_column3 = false

let row3_column1 = false
let row3_column2 = false
let row3_column3 = false

function symbol(e) {

    
    console.log("1 " + eval(`${e.target.id}`))

    if (eval(`${e.target.id}`) == false) {
        turn+=1

        console.log("2 " + eval(`${e.target.id}`))

        let newListItem = document.createElement('class')

        if (turn % 2 == 0) {
            newListItem.innerHTML = '<svg xmlns=\'http://www.w3.org/2000/svg\'; width=\'50\'; height=\'50\'; viewBox=\'0 0 70 70\'; fill=\'none\'> <circle cx=\"35\" cy=\"35\" r=\"35\" fill=\"#000\"></svg>'
        } else {
            newListItem.innerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\"; height=\"50\"; viewBox=\"0 0 104 110\"; fill=\"none\"><path d="M87.8341 10L10 99.7381" stroke="black" stroke-width="20" stroke-linecap="round"/><path d="M94 97L10 13" stroke="black" stroke-width="20" stroke-linecap="round"/></svg>'
        }

        e.target.append(newListItem)

    }
    
    console.log("3 " + eval(`${e.target.id}`))
    console.log(e.target.id)
    console.log(turn)
}
