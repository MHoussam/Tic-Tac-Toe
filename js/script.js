var add_player1_btn = document.getElementById('enter-player1-btn')
var add_player2_btn = document.getElementById('enter-player2-btn')

var h4_tags = document.getElementsByTagName('h4')
var h5_tags = document.getElementsByTagName('h5')

var player1_name = document.getElementById('player1-input')
var player2_name = document.getElementById('player2-input')

add_player1_btn.addEventListener('click', add_player1_name)
add_player2_btn.addEventListener('click', add_player2_name)

var player1_score = 0
var player2_score = 0

function add_player1_name() {
    h4_tags[0].innerText = `${player1_name.value}`
    h5_tags[0].innerText = player1_score
}

function add_player2_name() {
    h4_tags[1].innerText = `${player2_name.value}`
    h5_tags[1].innerText = player2_score
}


var row1_col1 = document.getElementById('row1_column1')
var row1_col2 = document.getElementById('row1_column2')
var row1_col3 = document.getElementById('row1_column3')

var row2_col1 = document.getElementById('row2_column1')
var row2_col2 = document.getElementById('row2_column2')
var row2_col3 = document.getElementById('row2_column3')

var row3_col1 = document.getElementById('row3_column1')
var row3_col2 = document.getElementById('row3_column2')
var row3_col3 = document.getElementById('row3_column3')

var round_winner = document.getElementById('round_winner')

row1_col1.addEventListener('click', symbol)
row1_col2.addEventListener('click', symbol)
row1_col3.addEventListener('click', symbol)

row2_col1.addEventListener('click', symbol)
row2_col2.addEventListener('click', symbol)
row2_col3.addEventListener('click', symbol)

row3_col1.addEventListener('click', symbol)
row3_col2.addEventListener('click', symbol)
row3_col3.addEventListener('click', symbol)

var turn = 0

var row1_column1 = false
var row1_column2 = false
var row1_column3 = false

var row2_column1 = false
var row2_column2 = false
var row2_column3 = false

var row3_column1 = false
var row3_column2 = false
var row3_column3 = false

var tie = true

var _continue = true

var progress = [[-1, -1, -1],
                [-1, -1, -1], 
                [-1, -1, -1]]

function symbol(e) {    
    if (_continue == true) {
        if (eval(`${e.target.id}`) == false) {
            let symbol = document.createElement('id')

            if (turn % 2 == 0) {
                symbol.innerHTML = '<div id="x"></div>'
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
                symbol.innerHTML = '<div id="o"></div>'
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

            var result = document.createElement('id')
            var round_winner = document.getElementById('round_winner')

            if(turn > 4) {
                if ((progress[0][0] == 0 && progress[0][1] == 0 && progress[0][2] == 0) || (progress[1][0] == 0 && progress[1][1] == 0 && progress[1][2] == 0) || (progress[2][0] == 0 && progress[2][1] == 0 && progress[2][2] == 0) || (progress[0][0] == 0 && progress[1][1] == 0 && progress[2][2] == 0) || (progress[0][2] == 0 && progress[1][1] == 0 && progress[2][0] == 0) || (progress[0][0] == 0 && progress[1][0] == 0 && progress[2][0] == 0) || (progress[0][1] == 0 && progress[1][1] == 0 && progress[2][1] == 0) || (progress[0][2] == 0 && progress[1][2] == 0 && progress[2][2] == 0)) {
                    player1_score+=1

                    h5_tags[0].innerText = player1_score

                    //result.innerHTML = `${player1_name.value} Won This Round!`
                    //round_winner.outerHTML = result

                    result.innerHTML = `<div id="winner">${player1_name.value} Won This Round!</div>`
                    round_winner.append(result)
                    

                    _continue = false
                    tie = false
                } else if ((progress[0][0] == 1 && progress[0][1] == 1 && progress[0][2] == 1) || (progress[1][0] == 1 && progress[1][1] == 1 && progress[1][2] == 1) || (progress[2][0] == 1 && progress[2][1] == 1 && progress[2][2] == 1) || (progress[0][0] == 1 && progress[1][1] == 1 && progress[2][2] == 1) || (progress[0][2] == 1 && progress[1][1] == 1 && progress[2][0] == 1) || (progress[0][0] == 1 && progress[1][0] == 1 && progress[2][0] == 1) || (progress[0][1] == 1 && progress[1][1] == 1 && progress[2][1] == 1) || (progress[0][2] == 1 && progress[1][2] == 1 && progress[2][2] == 1)) {
                    player2_score+=1

                    h5_tags[1].innerText = player2_score

                    //result = `Won This Round!`
                    //round_winner.outerHTML = result

                    result.innerHTML = `<div id="winner">${player2_name.value} Won This Round!</div>`
                    round_winner.append(result)

                    console.log(round_winner)
                    _continue = false
                    tie = false
                }   
                
                if (turn == 9 && tie) {
                    result.innerHTML = 'It\'s a tie!!'
                    round_winner.append(result)

                    _continue = false
                }
                console.log(round_winner)
            }
        }
    }

        /*console.log(progress[0][0])
        console.log(progress[0][1])
        console.log(progress[0][2])
        console.log(progress[1][0])
        console.log(progress[1][1])
        console.log(progress[1][2])
        console.log(progress[2][0])
        console.log(progress[2][1])
        console.log(progress[2][2])*/

        console.log(e.target)
}

var new_game_btn = document.getElementById('new_game_btn')
new_game_btn.addEventListener('click', function () {
    

    row1_column1 = false
    row1_column2 = false
    row1_column3 = false

    row2_column1 = false
    row2_column2 = false
    row2_column3 = false

    row3_column1 = false
    row3_column2 = false
    row3_column3 = false

    _continue = true

    progress = [[-1, -1, -1],
                [-1, -1, -1], 
                [-1, -1, -1]]

        /*console.log(progress[0][0])
        console.log(progress[0][1])
        console.log(progress[0][2])
        console.log(progress[1][0])
        console.log(progress[1][1])
        console.log(progress[1][2])
        console.log(progress[2][0])
        console.log(progress[2][1])
        console.log(progress[2][2])*/
        
        i=0
        for(i; i<(turn/2)+1; i++){
            let x = document.getElementById('x')
            let o = document.getElementById('o')
            x.remove();
            o.remove();
        }

        let w = document.getElementById('winner')
        console.log(w)
        w.remove();
})