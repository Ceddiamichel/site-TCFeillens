import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Footer = () => {
  return (
    <div className='footer'>
      <Container fluid className="bg-light mt-5 border-top">
        <Row>
          <Col xs={6} md={4}>
            <div className="ps-2 w-75">
            <OverlayTrigger
                placement={"bottom"}
                delay={{ show: 100, hide: 200 }}
                overlay={
                  <Tooltip id={"tooltip-TCF"}>
                    Tennis Club de Feillens
                  </Tooltip>
                }
            >
              <a className="nav-link p-2" href="https://www.tennis-club-de-feillens.fr" target="_blank" rel="noreferrer noopenner">
                <img className='img-fluid py-2' src="LogoTCF1.png" alt="Logo TCF ?" width={40} height={40}></img>
                <span className="fw-bold text-muted">TENNIS CLUB DE FEILLENS</span>
              </a>          
            </OverlayTrigger>
            <p className="small my-0 text-muted">Siège : 575 route des Dîmes - 01570 FEILLENS</p>
            <p className="small text-muted">Clubhouse - <strong>2 courts extérieurs</strong></p>
            <hr></hr>
            <p className="small my-0 text-muted">Rue de l'école privée - 01570 FEILLENS</p>
            <p className="small text-muted">Clubhouse - <strong>2 courts couverts</strong></p>
          </div>
          </Col>
          <Col xs={6} md={4} className="ps-5">
            <p className="fw-bold text-muted w-75 mx-auto py-4">Liens</p>
            <Nav defaultActiveKey="/accueil" className="flex-column w-75 mx-auto">
              <Nav.Link href="/accueil" id="nav-dropdown" className="text-muted py-0">Accueil</Nav.Link>
              <NavDropdown title="Le club" id="nav-dropdown" menuVariant={"dark"} align="end" className="text-muted py-0">
                <NavDropdown.Item className="py-0" href="/contact">Notre histoire</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/bureau">Le bureau</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/installations">Nos installations</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/ousommesnous">Où sommmes-nous ?</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item className="py-0" href="/mentionsLegales">Mentions légales</NavDropdown.Item>
              </NavDropdown> 
              <NavDropdown title="Compétitions" id="nav-dropdown" menuVariant={"dark"} align="end" className=" py-0">
                <NavDropdown.Item className="py-0" href="/compJeunes">Jeunes</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/compAdultes">Adultes</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/compTournoiOpen">Tournois - NC à 4/6</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/compTournoiIntenre">Tournois - Interne</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/compTournoiJeunes">Tournois - Jeunes</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Enseignement" id="nav-dropdown" menuVariant={"dark"} align="end" className="py-0">
                <NavDropdown.Item className="py-0" href="/coursEquipe">Equipe Pédagogique</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/coursJeunes">Ecole de Tennis</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/coursAdultes">Cours Adultes</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/coursSante">Tennis Santé</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/coursStages">Stages</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Nos Animations" id="nav-dropdown" menuVariant={"dark"} align="end" className="py-0">
                <NavDropdown.Item className="py-0" href="/animationPgm">Notre Programme</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/animationPickle">Pickleball</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/animationBad">Tournoi de badminton</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/animationVenteFromage">Vente de Fromage</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/animationFeteJeunes">La fête de l'école de tennis</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/animationFeteAdultes">Soirée du Club</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/animation">Les 40 ans du Club</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Réservations" id="nav-dropdown" menuVariant={"dark"} align="end" className="py-0">
                <NavDropdown.Item className="py-0" href="/resaCouverts">Courts Couverts</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/resaExterieur">Courts Extérieurs</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Évènements" id="nav-dropdown" menuVariant={"dark"} align="end" className="py-0">
                <NavDropdown.Item className="py-0" href="/event30Ans">Le Club Fête Ses 30 ans</NavDropdown.Item>
                <NavDropdown.Item className="py-0" href="/event40Ans">Le Club Fête Ses 40 ans</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col xs={6} md={4} className="text-center">
              <p className="fw-bold text-muted py-4">Contactez-nous</p>
              <a className="text-muted text-decoration-none" href="/contact"><span id="tcf-email">tcfeillens@gmail.com</span></a>    
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-2">
            <small>
              © TCFeillens, 2023. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
  </div>
  )
}

export default Footer