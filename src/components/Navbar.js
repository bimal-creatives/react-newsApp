import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

   <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">NewsApp</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/home">Home </Link>
      </li>
      
      <li class="nav-item"><Link class="nav-link" to="/">General</Link></li>
      <li class="nav-item"><Link class="nav-link" to="/business">Business</Link></li>
      <li class="nav-item"><Link class="nav-link" to="/entertainment">Entertainment</Link></li>
      <li class="nav-item"><Link class="nav-link" to="/health">Health</Link></li>
      <li class="nav-item"><Link class="nav-link" to="/science">Science</Link></li>
      <li class="nav-item"><Link class="nav-link" to="/sports">Sports</Link></li>
      <li class="nav-item"><Link class="nav-link" to="/technology">Technology</Link></li>
    </ul>
    
  </div>
</nav>
</>

  )
}

export default Navbar