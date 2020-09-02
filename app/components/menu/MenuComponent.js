
import React,{Component} from 'react'
import Styles from './styles.css'

const buttonStyle={margin:5, backgroundColor:'#d9fad9', borderColor: 'honeydew'}

export default class MenuComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
          dataApi : [],
          error : false
        }
      }

      

     render(){
         return(
             <div className={Styles.container}>
                 <div>Filters</div>
                 <div className={Styles.timeContainer}>
                     <p>Launch year</p>
                     <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            width : '100%'
                        }}
                    />
                     <div>
                        <button onClick={()=>this.props.handleYearClick('2006')} style={buttonStyle}>2006</button>
                        <button onClick={()=>this.props.handleYearClick('2007')} style={buttonStyle}>2007</button>
                     </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2008')} style={buttonStyle}>2008</button>
                         <button onClick={()=>this.props.handleYearClick('2009')} style={buttonStyle}>2009</button>
                     </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2010')} style={buttonStyle}>2010</button>
                         <button onClick={()=>this.props.handleYearClick('2011')} style={buttonStyle}>2011</button>
                    </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2012')} style={buttonStyle}>2012</button>
                         <button onClick={()=>this.props.handleYearClick('2013')} style={buttonStyle}>2013</button>
                    </div>
                    <div>
                         <button onClick={()=>this.props.handleYearClick('2014')} style={buttonStyle}>2014</button>
                         <button onClick={()=>this.props.handleYearClick('2015')} style={buttonStyle}>2015</button>
                    </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2016')} style={buttonStyle}>2016</button>
                         <button onClick={()=>this.props.handleYearClick('2017')} style={buttonStyle}>2017</button>
                    </div>
                     <div>
                        <button onClick={()=>this.props.handleYearClick('2018')} style={buttonStyle}>2018</button>
                        <button onClick={()=>this.props.handleYearClick('2019')} style={buttonStyle}>2019</button>
                    </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2020')} style={buttonStyle}>2020</button>
                    </div>
                     
                 </div>
                 <div className={Styles.launchContainer} >
                    <div>
                    <p>Successful Launch </p>
                        <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            width : '100%'
                        }}
                    /></div>
                     
                     <div>
                         <button onClick={()=>this.props.handleLaunchClick(true)}style={buttonStyle}>True</button>
                        <button onClick={()=>this.props.handleLaunchClick(false)} style={buttonStyle}>false</button>
                    </div>
                 </div>
                 <div className={Styles.launchContainer} >
                    <div>
                    <p>Landing Launch </p>
                        <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            width : '100%'
                        }}
                    /></div>
                     
                     <div>
                         <button onClick={()=>this.props.handleLandingClick(true)}style={buttonStyle}>True</button>
                        <button onClick={()=>this.props.handleLandingClick(false)} style={buttonStyle}>false</button>
                    </div>
                 </div>
                 
            </div>
         )
     } 

}
