let add_player1_btn = document.getElementById('enter-player1-btn')
let add_player2_btn = document.getElementById('enter-player2-btn')
let h4_tags = document.getElementsByTagName('h4')
let h5_tags = document.getElementsByTagName('h5')

add_player1_btn.addEventListener('click', add_player1_name)
add_player2_btn.addEventListener('click', add_player2_name)
let player1_name = document.getElementById('player1-input')
let player2_name = document.getElementById('player2-input')

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

console.log(h4_tags)


