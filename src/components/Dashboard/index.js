import React from 'react';
import axios from 'axios';
//import logo from '../logo.svg';
const catchFn = (e)=>{
    console.error(e)
  }
  
  class Home extends React.Component {
    constructor(props){
      super(props)
      // pesquise sobre react ref, serve pra setar definir elementos
      this.resultRef = React.createRef()
      this.formRef = React.createRef()
      this.ruaRef = React.createRef()
      this.cidadeRef = React.createRef()
      this.estadoRef = React.createRef()
      this.buscarCep = this.buscarCep.bind(this)
      this.enviarCadastro = this.enviarCadastro.bind(this)
      this.state = {
        list: [],
        message: '',
        result: ''
      }
    }
  
    componentDidMount(){
      const self = this
      axios.get('http://localhost:5000/users').then((result)=>{
        console.log(result)
        self.setState({list: result.data})
        self.setState({result: result})
      }).catch(catchFn)
    }
  
    buscarCep(event){
      const cep = event.target.value
      const self = this
      axios.get("https://viacep.com.br/ws/"+cep+"/json/").then((result)=>{
        const dadosDoCep = result.data
        self.ruaRef.current.value = dadosDoCep.logradouro
        self.cidadeRef.current.value = dadosDoCep.localidade
        self.estadoRef.current.value = dadosDoCep.uf
        self.resultRef.current.innerHTML = JSON.stringify(dadosDoCep)
        self.setState({message: "buscou cep!"})
        self.setState({result: result})
      })
    }
    //Está funcao esta duplicada
    // enviarCadastro(event){
    //   const self = this
    //   const form = this.formRef.current
    //   const formData = new FormData(form)
    //   axios.post(form.action, {
    //     name: formData.get('name'),
    //     idade: formData.get('idade'),
    //     cep: formData.get('cep'),
    //     numero: formData.get('numero')
    //   }).then((result)=>{
    //     form.reset()
    //     console.log(result.data.result)
    //     if(result.data && result.data.result && result.data.result.ok === 1){
    //       self.setState({message: "deu boa!"})
    //       self.setState({result: result})
    //     }
    //   }).catch(catchFn)
    //   event.preventDefault()
    // }
    
    enviarCadastro(event){
      const self = this
      const form = this.formRef.current
      const formData = new FormData(form)
      axios.post(form.action, {
        name: formData.get('name'),
        idade: formData.get('idade'),
        cep: formData.get('cep'),
        numero: formData.get('numero')
      }).then((result)=>{
        form.reset()
        console.log(result.data.result)
        if(result.data && result.data.result && result.data.result.ok === 1){
          self.setState({message: "deu boa cadastro!"})
          self.setState({result: result})
        }
      }).catch(catchFn)
      event.preventDefault()
    }
    
    handleRemove = (event) => {
      event.preventDefault()
      const self = this;
      const id = document.getElementById('userID').value
      axios.delete('http://localhost:5000/users/' + id)
        .then((result)=>{
          console.log(result.data)
          if(result.data && result.data.result && result.data.result.ok === 1){
            self.setState({message: "deletou!"})
            self.setState({result: result})            
          }
        }).catch(catchFn)
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
            <p id='message'>
              {message}
            </p>
            <form ref={this.formRef} action="http://localhost:5000/users/" method="POST" onSubmit={this.enviarCadastro}>
              Nome: <input type="text" placeholder="Nome" name="name" /><br/>
              Idade: <input type="number" placeholder="Idade" name="idade" /><br/>
              Numero: <input type="number" placeholder="Numero" name="numero" /><br/>
              CEP: <input type="number" name="cep" onBlur={this.buscarCep} /><br/>
              Rua: <input disabled ref={this.ruaRef} /><br/>
              Cidade: <input disabled ref={this.cidadeRef} /><br/>
              Estado: <input disabled ref={this.estadoRef} /><br/>
              <input type="submit" value="ENVIAR"></input>  
            </form>
            <p ref={this.resultRef}>
              resultado vai aqui
            </p>
            ID: <input type="text" placeholder="ID" name="id" id='userID' />
            <button onClick={(e)=>{this.handleRemove(e)}}>Deletar</button>
          </header>
          <div>
            LISTA
            <ul>
              {lista}
            </ul>
          </div>
          <div>
           RESULT
            <ul>
              {resultado}
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Home;