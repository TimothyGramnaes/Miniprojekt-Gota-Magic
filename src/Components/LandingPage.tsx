import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../main.css';
import '../css/tournaments.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';


function LandingPage() {

    return(
        <>
        <div className="* flex column" style={mainStyle}>

            <div className="heroContainer">            
            <div 
                className="flex centered"
                style={heroContainer}>
                    <h3
                    style={ {fontSize: '2.5rem',
                            } } 
                    className="white">Göta Magic</h3>
                    <p
                    className="white flex centered" 
                    style={heroP}
                        >
                            Välkommen till Götamagic, din portal till allt du behöver
                            för kompetativt Magicspel i Göteborg.
                        </p>
                        <Link className="link-style" to="/ProductList">
                            <Button variant="contained" color="primary">Våra Produkter</Button>
                        </Link>
            </div>
        </div>
            <Grid container className="* flex centered column" style={landingContainer}>

                <Grid container xs={12} md={12} className="flex centered column" style={infoLandingContainer}>
                  
                        <img style={infoLandingContainerImage} src="./assets/imgs/mtg" alt="planeswalkers" /> 
                        <Grid container className="component-title flex" style={titleHeader}>
                            <h2>
                                Nyheter                      
                            </h2>
                        </Grid>                  
                    <Grid container className="flex centered column" style={textLandingContainer}>
                        
                    <Grid container className="tour-kort">
                        <Grid className="tour-kort-item" item xs={12} md={7}>
                            <p className="nyhets-datum">2021-01-12</p>
                            <h2 className="nyhets-titel">Corona anpassade turneringar</h2>
                            <span></span>
                            <p className="kort-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis! Iusto, fugiat vitae pariatur dolor explicabo veritatis commodi? Dignissimos facere error in ad, minima quidem nam. Doloribus minus ducimus exercitationem.</p>
                        </Grid>
                        <Grid className="tour-kort-item" item xs={12} md={5}>
                            <img className="person-bild" src="./assets/imgs/play/bear1.jpg" alt="bild"/>
                        </Grid>
                        
                        <div className="breaker"></div>

                        <Grid container className="tour-kort">
                            <Grid item xs={12} md={5}>
                                <img className="produkt-bild" src="./assets/imgs/play/timespiralremastered.jpg" alt="eddie" />
                                
                            </Grid>
                            <Grid className="tour-kort-item-right" item xs={12} md={7}>
                            <p className="nyhets-datum">2021-03-12</p>
                            <h2>Time Spiral Remestered finns i lager!</h2>
                            <p className="kort-p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus in sunt qui pariatur dolores deserunt alias, dignissimos sed. Quae autem dicta nihil sequi, impedit aliquam dolorem excepturi atque tempore.
                                </p>
                                <Link className="link-style" to="/ProductList">
                                <Button variant="contained" color="primary">Våra Produkter</Button>
                                </Link>
                            </Grid>

                        </Grid>

                        
                        </Grid>
                    </Grid>

                </Grid>
                            
            </Grid>
        </div>
        </>
    )
}



const heroContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/Hero-Image.png)',
    textAlign: 'center',
    backgroundSize: 'cover',
    marginTop: '5rem',
    position: 'relative',
    flexDirection: 'column',
    zIndex: 2,
    padding: '4rem'
}

const titleHeader: CSSProperties = {
    fontSize: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    width: '100%',
    backgroundImage: 'url(./assets/imgs/mtg)',
    objectFit: 'cover',
    color: 'white'

}

const heroP: CSSProperties = {
    padding: '1rem',
    textAlign: 'center',
    margin: '1rem 0 2rem 0',
    maxWidth: '75ch',
    letterSpacing: '1px',
    lineHeight: '1.5rem'
}

const mainStyle: CSSProperties = {
    
}

const landingContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/what-the-hex.png)',    
    height: '100%',
}

const infoLandingContainer: CSSProperties = {
    width: '80vw',
    maxWidth: '60rem',
    margin: '4rem 2rem 2rem 2rem',
    top: 0,
    bottom: 0,
    borderRadius: '15px',
    overflow: 'hidden'
}

const infoLandingContainerImage: CSSProperties = {
    width: '100%',
    //height: 'auto',
    objectFit: 'cover',
    top: 0,
    bottom: 0,
}

const textLandingContainer: CSSProperties = {
    width: '100%',
    top: 0,
    backgroundColor: '#E2E2E2',
    padding: '1rem 3rem 3rem 3rem'
}

export default LandingPage;