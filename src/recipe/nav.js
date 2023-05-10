import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MyRecipes from './myrecipes';
import SavedRecipes from './savedrecipes';
import Logout from './logout';
import Home from './home';
function App() {
  return (
    <Router>
      <Nav1 />
    </Router>
  );
}

function Nav1() {
  const location = useLocation();
  return (
    <div>
    {location.pathname !== '/logout' && (<Navbar bg="light" expand="lg">
<Container fluid>
<Navbar.Brand href="#home">Recipe App</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mx-auto">
 <Nav.Link as={Link} to="/home">Home</Nav.Link>
 <Nav.Link as={Link} to="/myrecipe">My Recipes</Nav.Link>
 <Nav.Link as={Link} to="/saverecipe">Saved Recipes</Nav.Link>
 <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar> )}
<Routes>
 <Route path="/home" element={<Home />} />
 <Route path="/myrecipe" element={<MyRecipes />} />
 <Route path="/saverecipe" element={<SavedRecipes />} />
 <Route path="/logout" element={<Logout />} />
</Routes>
         
     </div>
  );
}
export default App;
