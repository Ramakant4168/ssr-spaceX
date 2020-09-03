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
      isLoading : true,
      buttonProp : false
    }
  }

  componentWillMount() {
    
    let url = this.getUrlBasedOnfilter()
    this.fetchMissionData(url)
    
  }


  handleYearClick = (year) => {

    let selectedYear = this.state.selectedYear

    if(selectedYear === year){
      this.setState({
        selectedYear : null
      },()=>{
        sessionStorage.removeItem('selectedYear');
        this.fetchMissionData(this.getUrlBasedOnfilter())
      })
    }
    else{
      this.setState({
        selectedYear : year
      },()=>{
        sessionStorage.setItem('selectedYear',year);
        this.fetchMissionData(this.getUrlBasedOnfilter())
      })
    }

  }

  handleLaunchClick = (launch) => {


    let selectedLaunch = this.state.selectedLaunch

    if(selectedLaunch === launch){
      this.setState({
        selectedLaunch : null
      },()=>{
        sessionStorage.removeItem('selectedLaunch');
        this.fetchMissionData(this.getUrlBasedOnfilter())
      })
    }
    else{
      this.setState({
        selectedLaunch : launch
      },()=>{
        sessionStorage.setItem('selectedLaunch',launch);
        this.fetchMissionData(this.getUrlBasedOnfilter())
      })
    }
  }

  handleLandClick = (land) => {
    let selectedLand = this.state.selectedLand

    if(selectedLand === land){
      this.setState({
        selectedLand : null
      },()=>{
        sessionStorage.removeItem('selectedLand');
        this.fetchMissionData(this.getUrlBasedOnfilter())
      })
    }
    else{
      this.setState({
        selectedLand : land
      },()=>{
        sessionStorage.setItem('selectedLand',land);
        this.fetchMissionData(this.getUrlBasedOnfilter())
      })
    }
  }

  getAllData = () => {

    let {selectedLaunch, selectedYear} = this.state;
    this.setState({isLoading: true},()=>{
      Axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${selectedLaunch}&launch_year=${selectedYear}`)
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
    })
    
    
  }

  fetchMissionData = (url) => {

    this.setState({
      isLoading:true
    },()=>{
      Axios.get(url)
      .then((result) => {
        this.setState({
          dataApi: result.data,
          response: result.data,
          error: false,
          isLoading: false,
          buttonProp : !this.state.buttonProp
        })
      })
      .catch((error) => {
        this.setState({
          dataApi: [],
          error: true,
          isLoading: false,
          buttonProp : !this.state.buttonProp
        })
      })
    })
   
  }

  getUrlBasedOnfilter=()=>{
    let year = sessionStorage.getItem('selectedYear')
    let launch = sessionStorage.getItem('selectedLaunch')
    let land = sessionStorage.getItem('selectedLand')

    let url = ''
    if(!year && !launch &&  !land){
        //fetch all with no filter
        url = `https://api.spacexdata.com/v3/launches?limit=100`
       
    }
    else if(year && launch &&  land){
          //fetch all  filter
          url = `https://api.spacexdata.com/v3/launches?
          limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
         
    }
    else if(year && launch &&  !land){
      //fetch year and launch
      url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_success=${launch}&launch_year=${year}`
          
    }
    else if(year && land && !launch )  {
      //fetch year and launch
      url = `https://api.spacexdata.com/v3/launches?
      limit=100&land_success=${land}&launch_year=${year}`
    }
    else if( launch &&  land && !year ){
      url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_success=${launch}&land_success=${land}`
    }
    else if(year && !launch &&  !land){
      url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_year=${year}`
    }
    else if(launch && !year && !land  )  {
      url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_success=${launch}`
    }
    else if( land && !launch &&   !year ){
      url = `https://api.spacexdata.com/v3/launches?
        limit=100&land_success=${land}`
    }
   
    return url;
    
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
              buttonProp={this.state.buttonProp}
              handleYearClick={this.handleYearClick} 
              handleLaunchClick={this.handleLaunchClick}
              handleLandClick={this.handleLandClick}
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


