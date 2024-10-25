// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
const logo = `${process.env.PUBLIC_URL}/logo-benchpromos.svg`;

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('bg-dark', theme === 'light');
    document.body.classList.toggle('bg-light', theme === 'dark');
  };

  return (
    <Navbar className={`${styles.navTheme} mx-auto`} bg={theme} variant={theme} expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">
      <img
          className={`${styles.logo} `}
          src={logo}
          width="30"
          height="30"
          alt="Logo"
        />Bench Promos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/notebooks">Notebooks</Nav.Link>
          <NavDropdown title="Periféricos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/mouse">Mouse</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/teclado">Teclado</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/headset">Headset</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/microfone">Microfone</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/mousepad">Mousepad</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/controle">Controle</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Mais" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/computadores">Computadores</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/motherboards">Motherboards</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/memoria-ram">Memória RAM</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cadeiras">Cadeiras</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/consoles">Consoles</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/placas-video">Placas de Vídeo</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gabinetes">Gabinetes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ssds">SSDs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/smartphones">Smartphones</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/mochilas">Mochilas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/processadores">Processadores</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/fontes">Fontes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/monitores">Monitores</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tvs">TVs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/acessorios">Acessórios</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/benchmarks">Benchmarks</Nav.Link>
          <Nav.Link as={Link} to="/recomendacoes">Recomendações</Nav.Link>
        </Nav>


        <Form className={`d-flex ${styles.formSearch}`}>
          <button className={`${styles.searchButton} inline-flex items-center justify-center relative h-9 w-9 p-0 xl:h-10 xl:w-[280px] xl:justify-start xl:px-3 xl:py-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.searchIcon} lucide lucide-search h-4 w-4`}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <span className={`${styles.searchText} sr-only`}>Procurar produtos...</span>
            <kbd className={`${styles.ctrK} pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex`}>
              <span className="text-xs">Ctrl</span>K
            </kbd>
          </button>
        </Form>


        <button onClick={toggleTheme} className={`${styles.btnToggle} inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9" type="button" id="radix-:Rebfala:" aria-haspopup="menu" aria-expanded="false" data-state="closed"`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button>


        <Button as={Link} to="/login" className={`${styles.btnLogin} ms-2`}>Entrar</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
