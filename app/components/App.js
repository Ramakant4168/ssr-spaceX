import React, { Component } from 'react';
import styles from './App.css'
import Axios from 'axios';

import ListComponent from './list/ListComponent'
import MenuComponent from './menu/MenuComponent'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response : [],
      dataApi: [],
      error: false
    }
  }
  componentDidMount() {
    Axios.get('https://api.spacexdata.com/v3/launches?limit=100')
      .then((result) => {
        console.log("===result", result)
        this.setState({
          dataApi: result.data,
          response: result.data,
          error: false
        })
      })
      .catch((error) => {
        console.log("eror", error)
        this.setState({
          dataApi: [],
          error: true
        })
      })
  }


  handleYearClick = (year) => {
    let data = [...this.state.response]

    let filterData = data.filter((element)=> element.launch_year === year)

    this.setState({
      dataApi : filterData
    })
  }

  handleLaunchClick = (launch) => {
    
  }



  render() {
    let { dataApi } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p5>SpaceX Launch Programme</p5>
        </div>
        <div className={styles.container}>
          <div className={styles.menu}>
            <MenuComponent handleYearClick={this.handleYearClick} handleLaunchClick={this.handleLaunchClick}/>
          </div>
          <div className={styles.content}>
            <ListComponent dataApi={dataApi}></ListComponent>
          </div>
        </div>


        
      </div>
    );
  }
}
