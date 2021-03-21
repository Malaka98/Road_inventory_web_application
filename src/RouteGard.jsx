import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";
//import CryptoJS from 'crypto-js';



export default function Gard(GardComponents) {
  return class extends Component {
    
      constructor(props) {
        super(props)
        this.state = {
          isLoading: true,
          auth: false
        }
      
      }
        componentDidMount() {
          
          this._checkAndRedirect()
      }

      _checkAndRedirect() {
        
        axios({
          method: 'POST',
          url: 'http://localhost:4000/check',
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        
        }).then((response)=>{
          
          if(typeof(response.data.uinfo)!='undefined') {
            // let bytes  = CryptoJS.AES.decrypt(response.data.uinfo, '123')
            // let decInfo = bytes.toString(CryptoJS.enc.Utf8)
            
            // console.log(response);
            //console.log(decInfo);
            // console.log(typeof(decInfo));
            
            if(response.data.auth === "login") {
             
              this.setState({
                auth: true,
              })
              
            }
            
          }else if(response.data === 'Unauthorized Request') {
            this.setState({
              isLoading: false
            })
          }
          
        }).catch((response)=>{
          console.log(response);
          
          // this.setState({
          //   isLoaded: true
          // })
        })

      }

    render() {
      if(this.state.auth) return <GardComponents/>
      
      return this.state.isLoading ? <CircularProgress /> : <Redirect to='/' />
      
    }
  }
}