
import React,{Component} from 'react'
import Styles from './styles.css'

export default class ListItem extends Component{

    
     render(){
       let {mission} =  this.props
        let imgUrl = mission.links.mission_patch ? mission.links.mission_patch :"https://images2.imgbox.com/94/85/7GzzSMBu_o.png"
         return(
        <div className={Styles.cardContainer}>
            <div  className={Styles.card}>
            <img src={imgUrl} alt="Avatar" className={Styles.img}></img>
            <p>{mission.mission_name } #{mission.flight_number }</p>
            <p>Lauch Year : { mission.launch_year }</p>
            <p>Lauch Success : { mission.launch_success  ? 'successfull' : `${mission.launch_success == null ? 'NA' :'Failure'}` }</p>
            <p>Landing Success : { mission.rocket.first_stage.cores[0].land_success ? 'successfull' : `${mission.rocket.first_stage.cores[0].land_success == null ? 'NA' :'Failure'}` }</p>
        </div>
        </div>
             
         )
     } 

}
