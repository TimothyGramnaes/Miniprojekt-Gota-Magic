import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../main.css';
import Button from '@material-ui/core/Button';
// import background from './assets/imgs/Rectangle.png';
// import { url } from 'node:inspector';


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
                    className="white">Våra Produkter</h3>
                    <p
                    className="white flex centered" 
                    style={heroP}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Unde quae nihil quod nam similique ducimus beatae 
                        laboriosam cumque exercitationem excepturi repellat, 
                        nostrum atque vitae voluptate dignissimos adipisci 
                        reiciendis ex earum?</p>

                    <Button variant="contained" color="primary">Våra Produkter</Button>
            </div>
        </div>
            <div className="* flex centered" style={landingContainer}>

                <div className="flex centered" style={infoLandingContainer}>
                    <div>
                        <img style={infoLandingContainerImage} src="./assets/imgs/planeswalkers.png" alt="planeswalkers" />
                    </div>

                </div>
                            
            </div>
        </div>
        </>
    )
}



const heroContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/Hero-Image.png)',
    textAlign: 'center',
    backgroundSize: 'cover',
    marginTop: '0rem',
    position: 'relative',
    flexDirection: 'column',
    zIndex: 2,
    padding: '4rem'
}

const heroP: CSSProperties = {
    padding: '1rem',
    textAlign: 'center',
    margin: '1rem 0 2rem 0'
}

const mainStyle: CSSProperties = {
    
}

const landingContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/Rectangle.png)',    
    height: '100%',
}

const infoLandingContainer: CSSProperties = {
    width: '100%',

    padding: '4rem 2rem 2rem 2rem'
}

const infoLandingContainerImage: CSSProperties = {
    width: '80vw',
    //height: 'auto',
    objectFit: 'cover'
}

export default LandingPage;