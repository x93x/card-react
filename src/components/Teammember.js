import react,{Component}from 'react'
// import './App.css'
class Teammember extends Component{
 render(){
   return(
    <div className='col-4'>
    <div className='card bg-dark m-1 text-white' style={{borderWidth:"1px", borderColor : this.props.phone ?'':'red'}} > 
   
    <img src={this.props.img} style={{maxWidth:"100%"}} />
   
    <div className='card-body' >
        <h2 className='card-title'>{this.props.name}</h2>
        <div  className='card-text'>
          {this.props.emile}<br/>
        {this.props.phone}<br/>
       {this.props.p}<br/>
       </div>
        </div>
</div></div>
   )
   
    }
   
   }
   export default Teammember