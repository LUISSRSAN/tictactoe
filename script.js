console.log("Testing");

/*----- constants -----*/
/*----- app's state (variables) -----*/
let board ;
let turn = 'X';



/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
/*----- functions -----*/
function render() {
    board.forEach(function(mark, index){


        //sets text content
        squares[index].textContent = mark;
    console.log(mark, index);
    });
    };
    
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
    };

    init();
   