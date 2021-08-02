import React from 'react'
import Redirect from './components/Redirect';
class Counter extends React.Component{
   state={
       counter:3
   }

   componentDidMount(){
       this.interval=setInterval(()=>{
           this.setState(prevState=>{
               return {
                   counter:prevState.counter-1
               };
           })

       },1000)
   }
   componentWillUnmount(){
       clearInterval(this.interval)
   }

   render(){
       return <div>
           <h3>计数器</h3>
           <p>跳转中... {
               (this.state.counter<1? (<Redirect to="/home" />):null)}</p>
       </div>
   }
}
export default Counter