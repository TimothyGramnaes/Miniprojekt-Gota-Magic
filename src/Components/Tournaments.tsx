import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../main.css';
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
            <Grid item xs={12} md={10} style={infoLandingContainer}>
  
               <img style={infoLandingContainerImage} src="./assets/imgs/play/bear2.jpg" alt="planeswalkers" />                   
                <div className="flex centered column" style={textLandingContainer}>
                <h2 className="padding2rem">Turneringar</h2>
                <span></span>
                    <p className="paragraphs">
                        Det spelas regelbundna turneringar varje lördag på varierade platser i Göteborgsområdet
                    </p>
                <h3 className="padding2rem">
                Underrubrik igen
                 </h3>
                    <p className="paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse odio minima ipsa hic, nobis architecto amet? Porro neque in atque soluta eum officiis magni doloremque ipsum? Nihil, explicabo voluptates!</p>
        <div className="padding2rem">
            <Link className="link-style" to="/ProductList">
            <Button variant="contained" color="primary">Våra Produkter</Button>
            </Link>
        </div>
        </div>
        {/* </div> */}
        </Grid>
    </Grid>
    
        </>
    );
}

const landingContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/what-the-hex.png)',    
    height: '100%',
}

const infoLandingContainer: CSSProperties = {
    width: '80vw',
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
}

const textLandingContainer: CSSProperties = {
    width: '100%',
    top: 0,
    backgroundColor: '#E2E2E2',
    padding: '1rem 3rem 3rem 3rem'
}

export default Tournaments;