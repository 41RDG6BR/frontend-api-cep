import React from 'react';
import axios from 'axios';
import Button from '../button'
import { Link } from 'react-router-dom'

import Layout from '../Layout'
//import logo from '../logo.svg';

const catchFn = (e)=>{
    console.error(e)
  }
  
  class Login extends React.Component {
    constructor(props){
      super(props)
      // pesquise sobre react ref, serve pra setar definir elementos
      this.resultRef = React.createRef()
      this.formRef = React.createRef()
      this.ruaRef = React.createRef()
      this.enviarCadastro = this.enviarCadastro.bind(this)
      this.state = {
        list: [],
        message: '',
        result: ''
      }
    }
  
    enviarCadastro(event){
      const self = this
      const form = this.formRef.current
      const formData = new FormData(form)
      axios.post(form.action, {
        email: formData.get('email'),
        password: formData.get('password')
      }, {
        withCredentials: true
      }).then((result)=>{
        form.reset()
        console.log(result.data.result)

        if(result.data && result.data !== false){
        } else {
          self.setState({message: "usuario ou senha invalido!"})
        }
      }).catch(catchFn)
      event.preventDefault()
    }
  
    render(){
      const list = this.state.list
      const message = this.state.message
      const result = this.state.result
      let resultado = JSON.stringify(result)
      console.log('chamou render')
      let lista = JSON.stringify(list)
      return (
      <Layout>
        <div className="jumbotron">
          <header className="App-header">
            <form ref={this.formRef} action="http://localhost:5000/users/login" method="POST" >
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" class="form-control"/>
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" class="form-control"/>
            <input type="submit" className="btn btn-success" value="Enviar"/>
            </form>

          </header>

        </div>
        </Layout>
      );
    }
  }
  
  export default Login;