import React from 'react'

export default (props) => {
    return (
        <div class="container">
  <div class="row">
    <div class="col-sm-12">
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
        <a class="navbar-brand" href="http://localhost:3000/register">Api Cep</a>
    </div>
    
    <ul class="nav navbar-nav navbar-right">
      <li><a href="http://localhost:3000/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="http://localhost:3000/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
    </div>
  </div>
  <div className='row'>
    <div className='col-sm-12'>
        {props.children}
    </div>
  </div>
  <div className='row'>
    <div className='col-sm-3'>
        <h3>footer</h3>
    </div>
     <div className='col-sm-3'>
        <h3>footer</h3>
    </div>
     <div className='col-sm-3'>
        <h3>footer</h3>
    </div>
     <div className='col-sm-3'>
        <h3>footer</h3>
    </div>
  </div>
</div>
    )
}