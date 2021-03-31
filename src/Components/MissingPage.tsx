import {  Grid } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';

function MissingPage() {
    console.log('tihi');
    return(
        <>
        <Grid container 
        justify="center" 
        alignItems="center" 
        className="landingContainer" 
        style={landingContainer}>

            <Grid container sm={12} lg={12} style={fourOFourStyle}>
                <h1>
                    inget funkar
                </h1>
            </Grid>
        </Grid>
        </>
    );
}

const fourOFourStyle: CSSProperties = {
    paddingTop: '8rem',
    height: '100%'

}

const landingContainer: CSSProperties = {
    backgroundImage: 'url(./assets/imgs/what-the-hex.png)',    
    height: '100%',
    
}

export default MissingPage;