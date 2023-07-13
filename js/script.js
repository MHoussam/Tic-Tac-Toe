const add_player_btn = document.getElementById('enter-player-btn')

var h4_tags = document.getElementsByTagName('h4')
var h5_tags = document.getElementsByTagName('h5')

const player1_name = document.getElementById('player1-input')
const player2_name = document.getElementById('player2-input')

add_player_btn.addEventListener('click', add_player_name)

var player1_score = 0
var player2_score = 0

var p1_name = ''
var p2_name = ''

function add_player_name() {
    if(p1_name == '' && p2_name == '') {
        if (player1_name.value != '' && player2_name.value != '') {
            h4_tags[0].innerText = `${player1_name.value}`
            h5_tags[0].innerText = player1_score

            p1_name = player1_name.value
            player1_name.value = ""

            h4_tags[1].innerText = `${player2_name.value}`
            h5_tags[1].innerText = player2_score

            p2_name = player2_name.value
            player2_name.value =""
        }
    }
}

const strike_diagonal1 = document.getElementById('strike_diagonal1')
const strike_diagonal2 = document.getElementById('strike_diagonal2')
const strike_row1 = document.getElementById('strike_row1')
const strike_row2 = document.getElementById('strike_row2')
const strike_row3 = document.getElementById('strike_row3')
const strike_column1 = document.getElementById('strike_column1')
const strike_column2 = document.getElementById('strike_column2')
const strike_column3 = document.getElementById('strike_column3')


const row1_col1 = document.getElementById('row1_column1')
const row1_col2 = document.getElementById('row1_column2')
const row1_col3 = document.getElementById('row1_column3')

const row2_col1 = document.getElementById('row2_column1')
const row2_col2 = document.getElementById('row2_column2')
const row2_col3 = document.getElementById('row2_column3')

const row3_col1 = document.getElementById('row3_column1')
const row3_col2 = document.getElementById('row3_column2')
const row3_col3 = document.getElementById('row3_column3')

const round_winner = document.getElementById('round_winner')

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
    if(p1_name != '' && p2_name != '') {
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
                const winner = document.getElementById('round_winner')

                if(turn > 4) {
                    if ((progress[0][0] == 0 && progress[0][1] == 0 && progress[0][2] == 0) || (progress[1][0] == 0 && progress[1][1] == 0 && progress[1][2] == 0) || (progress[2][0] == 0 && progress[2][1] == 0 && progress[2][2] == 0) || (progress[0][0] == 0 && progress[1][1] == 0 && progress[2][2] == 0) || (progress[0][2] == 0 && progress[1][1] == 0 && progress[2][0] == 0) || (progress[0][0] == 0 && progress[1][0] == 0 && progress[2][0] == 0) || (progress[0][1] == 0 && progress[1][1] == 0 && progress[2][1] == 0) || (progress[0][2] == 0 && progress[1][2] == 0 && progress[2][2] == 0)) {
                        player1_score+=1
                        h5_tags[0].innerText = player1_score
                        
                        if (progress[0][2] == 0 && progress[1][1] == 0 && progress[2][0] == 0){
                            myMove('strike_diagonal1');
                        } else if (progress[0][0] == 0 && progress[1][1] == 0 && progress[2][2] == 0) {
                            myMove('strike_diagonal2');
                        } else if (progress[0][0] == 0 && progress[0][1] == 0 && progress[0][2] == 0) {
                            myMove('strike_row1');
                        } else if (progress[1][0] == 0 && progress[1][1] == 0 && progress[1][2] == 0) {
                            myMove('strike_row2');
                        } else if (progress[2][0] == 0 && progress[2][1] == 0 && progress[2][2] == 0) {
                            myMove('strike_row3');
                        } else if (progress[0][0] == 0 && progress[1][0] == 0 && progress[2][0] == 0) {
                            myMove('strike_column1');
                        } else if (progress[0][1] == 0 && progress[1][1] == 0 && progress[2][1] == 0) {
                            myMove('strike_column2');
                        } else if (progress[0][2] == 0 && progress[1][2] == 0 && progress[2][2] == 0) {
                            myMove('strike_column3');
                        }


                        result.innerHTML = `<div id="winner">${p1_name} Won This Round!</div>`
                        winner.append(result)
                        
                        _continue = false
                        tie = false
                    } else if ((progress[0][0] == 1 && progress[0][1] == 1 && progress[0][2] == 1) || (progress[1][0] == 1 && progress[1][1] == 1 && progress[1][2] == 1) || (progress[2][0] == 1 && progress[2][1] == 1 && progress[2][2] == 1) || (progress[0][0] == 1 && progress[1][1] == 1 && progress[2][2] == 1) || (progress[0][2] == 1 && progress[1][1] == 1 && progress[2][0] == 1) || (progress[0][0] == 1 && progress[1][0] == 1 && progress[2][0] == 1) || (progress[0][1] == 1 && progress[1][1] == 1 && progress[2][1] == 1) || (progress[0][2] == 1 && progress[1][2] == 1 && progress[2][2] == 1)) {
                        player2_score+=1

                        h5_tags[1].innerText = player2_score

                        result.innerHTML = `<div id="winner">${p2_name} Won This Round!</div>`
                        round_winner.append(result)

                        _continue = false
                        tie = false
                    }   
                    
                    if (turn == 9 && tie) {
                        result.innerHTML = `<div id="winner">It\'s a TIE!!</div>`
                        round_winner.append(result)

                        _continue = false
                    }
                }
            }
        }
    }
}

var h2_tags = document.getElementsByTagName('h2')

const new_game_btn = document.getElementById('new_game_btn')
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

    tie = true
    _continue = true

    progress = [[-1, -1, -1],
                [-1, -1, -1], 
                [-1, -1, -1]]

    if (turn % 2 == 0) {
        var x_times = parseInt(turn / 2)
    } else {
        var x_times = parseInt(turn / 2) + 1
    }

    var o_times = parseInt(turn / 2)

    i=0
    for(i; i<x_times; i++){
        const x = document.getElementById('x')
        x.remove();
    }

    i=0
    for(i; i<o_times; i++){
        const o = document.getElementById('o')
        o.remove();
    }

    h2_tags[4].innerText = ''

    turn = 0

    if (strike_diagonal1.style.visibility == 'visible') {
        strike_diagonal1.style.visibility = 'hidden';
    } else if (strike_diagonal2.style.visibility == 'visible') {
        strike_diagonal2.style.visibility = 'hidden'
    } else if (strike_row1.style.visibility == 'visible') {
        strike_row1.style.visibility = 'hidden';
    } else if (strike_row2.style.visibility == 'visible') {
        strike_row2.style.visibility = 'hidden';
    } else if (strike_row3.style.visibility == 'visible') {
        strike_row3.style.visibility = 'hidden';
    }  else if (strike_column1.style.visibility == 'visible') {
        strike_column1.style.visibility = 'hidden';
    } else if (strike_column2.style.visibility == 'visible') {
        strike_column2.style.visibility = 'hidden';
    } else if (strike_column3.style.visibility == 'visible') {
        strike_column3.style.visibility = 'hidden';
    }

    const line = document.getElementById("strike_diagonal1");
    const strike = document.getElementById("strike");
    strike.style.zIndex = '-1';
    line.style.visibility = 'hidden';
})

var reset_btn = document.getElementById('reset_btn')
reset_btn.addEventListener('click', function () {
    

    row1_column1 = false
    row1_column2 = false
    row1_column3 = false

    row2_column1 = false
    row2_column2 = false
    row2_column3 = false

    row3_column1 = false
    row3_column2 = false
    row3_column3 = false

    tie = true
    _continue = true

    progress = [[-1, -1, -1],
                [-1, -1, -1], 
                [-1, -1, -1]]     

    if (turn % 2 == 0) {
        var x_times = parseInt(turn / 2)
    } else {
        var x_times = parseInt(turn / 2) + 1
    }

    var o_times = parseInt(turn / 2)

    i=0
    for(i; i<x_times; i++){
        x = document.getElementById('x')
        x.remove();
    }

    i=0
    for(i; i<o_times; i++){
        o = document.getElementById('o')
        o.remove();
    }

    h2_tags[4].innerText = ''

    turn = 0

    h4_tags[0].innerText = ''
    h4_tags[1].innerText = ''
    h5_tags[0].innerText = ''
    h5_tags[1].innerText = ''

    player1_score = 0
    player2_score = 0

    p1_name = ''
    p2_name = ''
    player1_name.value = ''
    player2_name.value = ''

    if (strike_diagonal1.style.visibility == 'visible') {
        strike_diagonal1.style.visibility = 'hidden';
    } else if (strike_diagonal2.style.visibility == 'visible') {
        strike_diagonal2.style.visibility = 'hidden'
    } else if (strike_row1.style.visibility == 'visible') {
        strike_row1.style.visibility = 'hidden';
    } else if (strike_row2.style.visibility == 'visible') {
        strike_row2.style.visibility = 'hidden';
    } else if (strike_row3.style.visibility == 'visible') {
        strike_row3.style.visibility = 'hidden';
    }  else if (strike_column1.style.visibility == 'visible') {
        strike_column1.style.visibility = 'hidden';
    } else if (strike_column2.style.visibility == 'visible') {
        strike_column2.style.visibility = 'hidden';
    } else if (strike_column3.style.visibility == 'visible') {
        strike_column3.style.visibility = 'hidden';
    }

    const line = document.getElementById("strike_diagonal1");
    const strike = document.getElementById("strike");
    strike.style.zIndex = '-1';
    line.style.visibility = 'hidden';
})

function myMove(e) {
    let id = null;
    const line = document.getElementById(e);
    const strike = document.getElementById("strike");
    strike.style.zIndex = '1';

    let aim
    if (e == 'strike_row1' || e == 'strike_row2' || e == 'strike_row3'){
        aim = 150
    } else {
        aim = 220
    } 

    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == aim) {
            clearInterval(id);
        } else {
            pos+=2;
            line.style.visibility = 'visible';
            line.style.width = pos + 'px';
        }
    }
  }