import react, {Component} from 'react'
import './App.css'


class App extends Component{
constructor(){
      super()
 this.state ={number:1}
  this.dclick= this.dclick.bind(this);
}

dclick(){

 this.setState(neaw =>{
            
            return{
                  
                  number : neaw.number+1,
            }
            } )
}

      render(){

            return(
                  <div>
                     <h1>{this.state.number}</h1>

                     <button onClick={this.dclick}>clic me</button>
          </div>  )
      }
}
export default App;