import './App.css';
import React from "react";
import Cell from "./components/cell/Cell";

class App extends React.Component {
  setupBoard(){
    this.xIsCurrentPlayer = true; //if x has to move
    this.boardSize = 3;
    this.noCells = this.boardSize * this.boardSize;
    this.cells = [];   
    for (let i =0; i < this.noCells; i++){
          this.cells.push("-");
        }
      }

      defineState() {
        this.state = {
          // 2-way binding
          cells:[],  // trailing comma
        };
      }
      bindThis() {
        this.clickCell = this.clickCell.bind(this);
      }

      init(){
        this.setupBoard();
        this.defineState();
        this.bindThis();
      }
  }



  componentDidMount() {
    // TODO: why is it called 2 times?
     
    this.setState({
      cells: this.cells,
    });
  }

clickCell(event){
  const cell = event.target;
  const index = cellElement.dataset.index;
  this.state.cells[index] = "X";
  this.setState({
    cells: this.cells,
  });
  }

  render() {
     return (
      <div className="App">

      <header className="App-header">
          <h1>X &amp; 0</h1>
      </header>

      <main>
        {this.state.cells.map((value, index) =>{
        return (
        <Cell 
        index={index} 
        text ={value}
        interactiune={that.clickCell}
        ></Cell>
      );
      }, this)}
        
      </main>
    </div>
  );
}
}

export default App;
