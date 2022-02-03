    <Router>
    <div className='topper'>
    
<nav >
<ul>
  <li>
    <Link to="/">Home</Link> 
    {/* Home */}
  </li>
  <li>
    <Link to="/Intro">Intro </Link>

  </li>
  <li>
    <Link to="/Works">Projects </Link>

  </li>
  <li>
    <Link to="/Contact">Contact</Link>

  </li>
</ul>
</nav>
 
    
      <Switch>
          <Route path="/Intro">
            <Intro />
          </Route>
          <Route path="/Works">
            <Works />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        </div>
    </Router>