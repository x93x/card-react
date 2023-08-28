import react,{Component} from 'react'
import Teammember from'./Teammember';
import info from './Info'

class Team extends Component{
constructor(){
super()

this.state=
   {
     info : info,
     newinfo:[],
     count:0,
   }
this.eventclick=this.eventclick.bind(this);
}

eventclick(){
   if(this.state.count < this.state.info.length)
   {
    this.state.newinfo.push(info[this.state.count])
    this.setState(function(ds){
    return{ count: ds.count +1 }
        })
    this.last=this.state.newinfo.map(z=>
    <Teammember 
          key={z.id} 
          img={z.img}
          name={z.name}
          emile={z.emile}
          phone={z.phone}
          p={z.position}
        />
     );
   }
}





render(){
     return(<div >
           <button className='btn bg-primary text-white btn-block m-1 ' onClick={this.eventclick}>clicked me</button>
             
             <div className='row'>
             {this.last}
             </div>
             </div>
        )
     }
   }
   export default Team;