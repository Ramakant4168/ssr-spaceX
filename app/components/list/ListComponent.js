
import React,{Component} from 'react'
import Styles from './styles.css'

import ListItem from './ListItem'

export default class ListComponent extends Component{

    
     render(){
       let {dataApi} =  this.props
         return(
             <div className={Styles.container}>
               {
                
                dataApi.length>0 ? dataApi.map((element)=>(<ListItem key={element.mission_name} mission={element}/>)) : <p></p>
                
               }
             </div>
         )
     } 

}
