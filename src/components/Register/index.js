import React from 'react';
import axios from 'axios';
import Button from '../button'
import { Link } from 'react-router-dom'
//import logo from '../logo.svg';
const catchFn = (e)=>{
    console.error(e)
  }
  
  class Register extends React.Component {
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
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      }).then((result)=>{
        form.reset()
        console.log(result.data.result)
        if(result.data && result.data.result && result.data.result.ok === 1){
          self.setState({message: "deu boa!"})
          self.setState({result: result})
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
        <div className="App">
          <header className="App-header">

    
            <form ref={this.formRef} action="http://localhost:5000/users/register" method="POST" onSubmit={this.enviarCadastro}>
              Nome: <input type="text" placeholder="Nome" name="name" /><br/>
              Email: <input type="email" placeholder="Email" name="email" /><br/>
              Password: <input type="password" placeholder="Password" name="password" /><br/>
              <input type="submit" value="ENVIAR"></input> 
              <div>
    <Link to="/login">
    <Button renderAs="button" label="go back to login">
    
    </Button>
    </Link>

        </div>
            </form>

          </header>

        </div>
      );
    }
  }
  
  export default Register;