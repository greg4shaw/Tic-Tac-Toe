// Create button (square block) to be placed inside the game-board div

const Square = ({id, player}) => {
    const [color, setColor] = React.useState('green');
    const palet =['red', 'blue', 'green']
    const getRandomColor = () => palet[Math.floor(Math.random()*3)]
    // Use useEffect to track the mounting and unmounting
    React.useEffect(() => {
        console.log(`Render ${id}`);
        return () => console.log(`unmounting Square ${id}`);
    });
    // keep track of state of square
    return(
    <button onClick={(e) => {
        let col = getRandomColor();
        setColor(col);
        e.target.style.background = col;
            }
        }
    >
        <h1>{player}</h1>
    </button>
    );
};

//const { statement } = require("@babel/template");

// Create a parent web component

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [mounted, setMounted] = React.useState(true);
    const [random, setRandom] = React.useState(0);
    let status = `Player ${player}`;
    //Switch the value of mounted between true and false (whatever it is not)
    const toggle = () => setMounted(!mounted); 

    const reRender = () => setRandom(Math.random());

    //create a factory function to render the squares & call inside the grid-row div where they need to be rendered.
    function renderSquare(i) {
        return <Square id={i} player={player}></Square>;
    }

    return (
        <div 
        className="game-board">
            {/* Create the square and pass in an id 
            Ensure mounted is true before rendering*/}
            <div className="grid-row">
                {mounted && renderSquare(0)}
                {mounted && renderSquare(1)}
                {mounted && renderSquare(2)}
            </div>
            {/* actually have 2 child components, the grid-row and the squares */}
            <div id="info">
            <button onClick={toggle}>Show/Hide Row</button>
            <button onClick={reRender}>Re-render</button>
               <h1> Turn of Player {player} </h1>
            </div>
        </div>
    );
};

// ==========================================
ReactDOM.render(<Board />, document.getElementById("root"));