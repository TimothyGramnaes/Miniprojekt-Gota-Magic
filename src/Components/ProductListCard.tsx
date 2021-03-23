import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  ButtonGroup,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
// import { Link, Route } from "react-router-dom";
import "../main.css";
import { useProductContext } from "../Context/ProductContext";
import { useCart } from "../Context/CartContext";
import { Link } from 'react-router-dom';
interface Props {
  image: string;
  productname: string;
  price: number;
  id: number;
}

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    margin: "1rem",
  },
  cardContent: {
    padding: "1rem 2rem",
  },
  media: {
    height: 230,
  },
  font: {
    textAlign: "center",
    fontSize: "1rem",
  },
  centerBtn: {
    fontSize: "0.8rem",
  },
});

function ProductListCard(props: Props) {
  const getProductId = useProductContext();
  const usecart = useCart();
  const style = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={style.card}>
          <CardContent className={style.cardContent}>
            <CardMedia className={style.media} image={props.image} />
            <CardActions>
              <ButtonGroup>
              
                <Button
                  onClick={() =>
                    usecart.addToCart(
                      props.productname,
                      props.price,
                      props.image
                    )
                  }
                  className={style.centerBtn}
                >
                  Köp
                </Button>
                
                <Link to={`/ProductPage/${props.id}`}>
                  <Button
                    className={style.centerBtn}
                    onClick={() => {
                      getProductId.getIdFromProductList(props.id);
                    }}
                  >
                    Läs mer
                  </Button>
                </Link>
              </ButtonGroup>
            </CardActions>
            <Typography className={style.font}>{props.productname}</Typography>
            <Typography className={style.font}>{props.price} kr</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductListCard;
