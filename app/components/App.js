import React, { Component } from 'react';
import styles from './App.css'
import Axios from 'axios';

import ListComponent from './list/ListComponent'
import MenuComponent from './menu/MenuComponent'
import Loader from './loader'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedYear : null,
      selectedLaunch : null,
      selectedLand: null,
      response : [],
      dataApi: [],
      error: false,
      isLoading : true
    }
  }
  componentWillMount() {
    Axios.get('https://api.spacexdata.com/v3/launches?limit=100')
      .then((result) => {
        this.setState({
          dataApi: result.data,
          response: result.data,
          error: false,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log("eror", error)
        this.setState({
          dataApi: [],
          error: true,
          isLoading: false
        })
      })
  }


  handleYearClick = (year) => {

    let selectedLaunch = this.state.selectedLaunch
    this.setState({
      selectedYear : year,
      isLoading: true
    },()=>{

      if(selectedLaunch){
        this.getAllData()
      }
      else{
        Axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`)
        .then((result) => {
          console.log("=====result",result)
          this.setState({
            dataApi: result.data,
            response: result.data,
            error: false,
            isLoading: false
          })
        })
        .catch((error) => {
          this.setState({
            dataApi: [],
            error: true,
            isLoading: false
          })
        })
      }
    })
  }

  handleLaunchClick = (launch) => {
    let selectedYear = this.state.selectedYear
    this.setState({
      selectedLaunch : launch,
      isLoading: true
    },()=>{

      if(selectedYear){
        this.getAllData()
      }
      else{
        Axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}`)
        .then((result) => {
          this.setState({
            dataApi: result.data,
            response: result.data,
            error: false,
            isLoading: false
          })
        })
        .catch((error) => {
          this.setState({
            dataApi: [],
            error: true,
            isLoading: false
          })
        })
      }
    })
  }

  getAllData = () => {

    let {selectedLaunch, selectedYear} = this.state;
    this.setState({isLoading: true},()=>{
      Axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${selectedLaunch}&launch_year=${selectedYear}`)
        .then((result) => {
          this.setState({
            dataApi: result.data,
            response: result.data,
            error: false
          })
        })
        .catch((error) => {
          this.setState({
            dataApi: [],
            error: true
          })
        })
    })
    
    
  }

  render() {
    let { dataApi,isLoading } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p5>SpaceX Launch Programs</p5>
        </div>
        <div className={styles.container}>
          <div className={styles.menu}>
            <MenuComponent 
              handleYearClick={this.handleYearClick} 
              handleLaunchClick={this.handleLaunchClick}
              handleLandingClick={this.handleLandingClick}
              />
          </div>
          <div className={styles.content}>
           { isLoading ? <Loader></Loader> : <ListComponent dataApi={dataApi}></ListComponent>} 
          </div>
        </div>
       
      </div>
    );
  }
}


