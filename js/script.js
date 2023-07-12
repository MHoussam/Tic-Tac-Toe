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

let round_winner = document.getElementById('round_winner')

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

let _continue = true

let progress = [[-1, -1, -1],
                [-1, -1, -1], 
                [-1, -1, -1]]

function symbol(e) {    
    if (_continue == true) {
        if (eval(`${e.target.id}`) == false) {
            let symbol = document.createElement('class')

            if (turn % 2 == 0) {
                symbol.innerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\"; height=\"50\"; viewBox=\"0 0 104 110\"; fill=\"none\"><path d="M87.8341 10L10 99.7381" stroke="black" stroke-width="20" stroke-linecap="round"/><path d="M94 97L10 13" stroke="black" stroke-width="20" stroke-linecap="round"/></svg>'
                e.target.append(symbol)

                if (e.target.id == "row1_column1"){
                    progress[0][0] = 0
                } else if (e.target.id == 'row1_column2'){
                    progress[0][1] = 0
                } else if (e.target.id == 'row1_column3'){
                    progress[0][2] = 0
                } else if (e.target.id == 'row2_column1'){
                    progress[1][0] = 0
                } else if (e.target.id == 'row2_column2'){
                    progress[1][1] = 0
                } else if (e.target.id == 'row2_column3'){
                    progress[1][2] = 0
                } else if (e.target.id == 'row3_column1'){
                    progress[2][0] = 0
                } else if (e.target.id == 'row3_column2'){
                    progress[2][1] = 0
                } else if (e.target.id == 'row3_column3'){
                    progress[2][2] = 0
                }
            } else {
                symbol.innerHTML = '<svg xmlns=\'http://www.w3.org/2000/svg\'; width=\'50\'; height=\'50\'; viewBox=\'0 0 87 87\'; fill=\'none\'> <circle cx=\"43.5\" cy=\"43.5\" r=\"36\" stroke=\"black\" stroke-width=\"15\"></svg>'
                e.target.append(symbol)

                if (e.target.id == 'row1_column1'){
                    progress[0][0] = 1
                } else if (e.target.id == 'row1_column2'){
                    progress[0][1] = 1
                } else if (e.target.id == 'row1_column3'){
                    progress[0][2] = 1
                } else if (e.target.id == 'row2_column1'){
                    progress[1][0] = 1
                } else if (e.target.id == 'row2_column2'){
                    progress[1][1] = 1
                } else if (e.target.id == 'row2_column3'){
                    progress[1][2] = 1
                } else if (e.target.id == 'row3_column1'){
                    progress[2][0] = 1
                } else if (e.target.id == 'row3_column2'){
                    progress[2][1] = 1
                } else if (e.target.id == 'row3_column3'){
                    progress[2][2] = 1
                }
            }

            turn++

            let result = document.createElement('class')

            if(turn > 4) {
                if ((progress[0][0] == 0 && progress[0][1] == 0 && progress[0][2] == 0) || (progress[1][0] == 0 && progress[1][1] == 0 && progress[1][2] == 0) || (progress[2][0] == 0 && progress[2][1] == 0 && progress[2][2] == 0) || (progress[0][0] == 0 && progress[1][1] == 0 && progress[2][2] == 0) || (progress[0][2] == 0 && progress[1][1] == 0 && progress[2][0] == 0) || (progress[0][0] == 0 && progress[1][0] == 0 && progress[2][0] == 0) || (progress[0][1] == 0 && progress[1][1] == 0 && progress[2][1] == 0) || (progress[0][2] == 0 && progress[1][2] == 0 && progress[2][2] == 0)) {
                    player1_score+=1

                    h5_tags[0].innerText = player1_score

                    result.innerHTML = `${player1_name.value} Won This Round!`
                    round_winner.append(result)

                    _continue = false
                } else if ((progress[0][0] == 1 && progress[0][1] == 1 && progress[0][2] == 1) || (progress[1][0] == 1 && progress[1][1] == 1 && progress[1][2] == 1) || (progress[2][0] == 1 && progress[2][1] == 1 && progress[2][2] == 1) || (progress[0][0] == 1 && progress[1][1] == 1 && progress[2][2] == 1) || (progress[0][2] == 1 && progress[1][1] == 1 && progress[2][0] == 1) || (progress[0][0] == 1 && progress[1][0] == 1 && progress[2][0] == 1) || (progress[0][1] == 1 && progress[1][1] == 1 && progress[2][1] == 1) || (progress[0][2] == 1 && progress[1][2] == 1 && progress[2][2] == 1)) {
                    player2_score+=1

                    h5_tags[1].innerText = player2_score

                    result.innerHTML = `${player2_name.value} Won This Round!`
                    round_winner.append(result)

                    console.log(round_winner)
                    _continue = false
                }   
                
                if (turn == 9) {
                    result.innerHTML = 'It\'s a tie!!'
                    round_winner.append(result)

                    _continue = false
                }
            }
        }
    }

    console.log("aaa" + progress[0][0])
        console.log("aaa" + progress[0][1])
        console.log("aaa" + progress[0][2])
        console.log("aaa" + progress[1][0])
        console.log("aaa" + progress[1][1])
        console.log("aaa" + progress[1][2])
        console.log("aaa" + progress[2][0])
        console.log("aaa" + progress[2][1])
        console.log("aaa" + progress[2][2])
}

let new_game_btn = document.getElementById('new_game_btn')
new_game_btn.addEventListener('click', function () {
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

    let _continue = true

    let progress = [[-1, -1, -1],
                    [-1, -1, -1], 
                    [-1, -1, -1]]

                    console.log(progress[0][0])
        console.log(progress[0][1])
        console.log(progress[0][2])
        console.log(progress[1][0])
        console.log(progress[1][1])
        console.log(progress[1][2])
        console.log(progress[2][0])
        console.log(progress[2][1])
        console.log(progress[2][2])

        row1_col1.className = '';

        round_winner.classList.remove("class");
})