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
                    className="white">Göta Magic</h3>
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
            <div className="* flex centered column" style={landingContainer}>

                <div className="flex centered column" style={infoLandingContainer}>
                  
                        <img style={infoLandingContainerImage} src="./assets/imgs/mtg" alt="planeswalkers" />                   
                    <div className="flex centered column" style={textLandingContainer}>
                        <h2 className="padding2rem">Om oss</h2>
                        <span></span>
                        <p className="paragraphs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis! Iusto, fugiat vitae pariatur dolor explicabo veritatis commodi? Dignissimos facere error in ad, minima quidem nam. Doloribus minus ducimus exercitationem.</p>
                        <h3 className="padding2rem">
                            Underrubrik igen
                        </h3>
                        <p className="paragraphs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse odio minima ipsa hic, nobis architecto amet? Porro neque in atque soluta eum officiis magni doloremque ipsum? Nihil, explicabo voluptates!</p>
                        <div className="padding2rem">
                            <Button variant="contained" color="primary">Våra Produkter</Button>
                        </div>
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
    margin: '1rem 0 2rem 0',
    maxWidth: '75ch'
}

const mainStyle: CSSProperties = {
    
}

const landingContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/Rectangle.png)',    
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