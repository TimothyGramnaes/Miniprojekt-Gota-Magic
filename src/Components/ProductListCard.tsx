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
import "../main.css";
import { useProductContext } from "../Context/ProductContext";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
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
  centerBtnLeft: {
    fontSize: "0.8rem",
    border: '1px solid grey',
    background: '#FF7A2F',
  },
  centerBtnRight: {
    fontSize: "0.8rem",
    border: '1px solid grey',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  },
  linkStyle: {
    textDecoration: 'none'
  }
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
                      props.image,
                      props.id
                    )
                  }
                  className={style.centerBtnLeft}
                >
                  Köp
                </Button>

                <Link to={`/ProductPage/${props.id}`} className={style.linkStyle}>
                  <Button
                    className={style.centerBtnRight}
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
