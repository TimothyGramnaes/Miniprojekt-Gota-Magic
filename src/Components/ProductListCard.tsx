import React from 'react';
import { Card,
        CardContent,
        CardActions,
        CardMedia,
        Button,
        ButtonGroup,
        Typography, 
        makeStyles} from '@material-ui/core';

interface Props{
    image: string
    productname: string
    price: number

}

const useStyles = makeStyles({
    card: {
        maxWidth: 200,
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem',
    },
    media: {
        height: 230,
    },
    font: {
        textAlign: 'center',
        fontSize: '1rem'
    },
    centerBtn: {
        fontSize: '0.8rem'
    }
});



function ProductListCard(props:Props) {

    const style = useStyles();

    return(
        <Card className={style.card}>
            <CardContent>                
                <CardMedia
                className={style.media}
                image={props.image}/>
                <CardActions>
                    <ButtonGroup >
                        <Button className={style.centerBtn}>Köp</Button>
                        <Button className={style.centerBtn}>Läs mer</Button>
                    </ButtonGroup>
                </CardActions>
                <Typography className={style.font}>
                    {props.productname}
                </Typography>
                <Typography className={style.font}>
                    {props.price} kr
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductListCard