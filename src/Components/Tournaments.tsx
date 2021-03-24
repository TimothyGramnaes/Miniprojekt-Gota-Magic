import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../main.css';
import '../css/tournaments.css';
import { Link } from 'react-router-dom';
import { IconButton, Grid, TextField, Button, makeStyles } from '@material-ui/core'


function Tournaments() {
    return (
        <>
        
        <Grid container 
        justify="center" 
        alignItems="center" 
        className="landingContainer" 
        style={landingContainer}>

            {/* <div className="flex centered column" style={infoLandingContainer}> */}
            <Grid container xs={12} md={10} style={infoLandingContainer}>
  
               <img style={infoLandingContainerImage} src="./assets/imgs/play/bear2.jpg" alt="glatt-turnerings-sallskap" />                   
                <Grid container className="flex" style={titleHeader}>
                    <h2>
                        Turneringar                       
                    </h2>
                </Grid>
                <Grid container className="flex" style={textLandingContainer}>
                    <Grid container className="tour-kort">

                    <Grid className="tour-kort-item" item xs={6} md={8}>
                    <h2>Lördagsmagi</h2>
                    <p className="kort-p">
                        Varje lördag spelas det turnering i Legacy/Modern på 
                        lite olika lokaler runt om i Göteborgsområdet.
                        Första pris är att få skriva sitt namn i den anrika
                        propeller-kepsen, man erhåller även rätten att ha den
                        i sin ägo fram till nästa turneringstillfälle.
                        <br/>
                        <br/>
                        Nu under corona-tider är vi dessvärre tvugna att max
                        vara 8 personer under våra spelträffar. kontakta oss här
                        för att ställa dig i kö så kontaktar vi dig om plats finnes.
                        Det är dock många som står i kö så räkna med att det kan 
                        ta ett tag innan ni kan få möjlighet att vara med.
                    </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img className="person-bild" src="./assets/imgs/play/petrus.jpeg" alt="petrus" />
                        <p className="pic-text">Petter Mölder, stolt vinnare av segerkepsen 2021-03-20</p>
                    </Grid>
                    </Grid>
                    <div className="breaker"></div>
                
                    <Grid container className="tour-kort">
                        <Grid item xs={6} md={4}>
                            <img className="person-bild" src="./assets/imgs/play/eddie.png" alt="eddie" />
                            <p className="pic-text">
                                Edvin Boije, vinnare av Modbearn -2020
                            </p>
                        </Grid>
                        <Grid className="tour-kort-item-right" item xs={6} md={8}>
                            <h2>Bearvitational</h2>
                            <p className="kort-p">
                                Även kännt som Modbearn eller bara årets höjdpunkt.
                                <br/>
                                Formatet är Modern med en twist. Bannade kort är tillåtna
                                men för varje bannat kort i leken måste man spela en björn. dvs. en
                                2/2 för cmc 2.
                                <br/>
                                <br/>
                                Lokal samt tillfälle för Bearvitational 2021 är för närvarande oklart 
                                pga. pågående pandemi.
                            </p>
                        </Grid>

                    </Grid>

            </Grid>
        
        </Grid>
    </Grid>
    
        </>
    );
}

const landingContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/what-the-hex.png)',    
    height: '100%',
    
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

const infoLandingContainer: CSSProperties = {
   
    maxWidth: '75rem',

    margin: '4rem 2rem 2rem 2rem',
    top: 0,
    bottom: 0,
    borderRadius: '15px',
    overflow: 'hidden'
}

const infoLandingContainerImage: CSSProperties = {
    width: '100%',
    height: '25rem',
    objectFit: 'cover',
    top: 0,
    bottom: 0,
    // border: '2px solid black'
}

const textLandingContainer: CSSProperties = {
    width: '100%',
    top: 0,
    backgroundColor: '#E2E2E2',
    padding: '1rem 3rem 3rem 3rem'
}

export default Tournaments;