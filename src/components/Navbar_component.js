
const navbar_component = () => {
  
    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Milandeep Singh Bhalla</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={()=>{}}>
          <a className="nav-link" aria-current="page" href="#about" >About</a>
        </li>
        <li className="nav-item" onClick={()=>{}}>
          <a className="nav-link" href="#languages">Languages</a>
        </li>
        <li className="nav-item" onClick={()=>{}}>
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item" onClick={()=>{}}>
          <a className="nav-link" href="#education">Education</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav> 
);
}
 
export default navbar_component