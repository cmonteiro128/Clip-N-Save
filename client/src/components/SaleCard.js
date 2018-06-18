import React from 'react';
import { Image, Icon, Card, Grid } from 'semantic-ui-react';

const SaleCard = (props) => {
  let logoSource;
  if (props.storeName === 'Market Basket') {
    logoSource = 'https://www.shopmarketbasket.com/sites/default/files/Market-Basket-Logo.png';
  } else if (props.storeName === 'Stop Shop') {
    logoSource = 'https://stopandshop.com/static/rsns/img/opco-logo.svg';
  } else if (props.storeName === 'Shaws') {
    logoSource = 'https://www.shaws.com/wp-content/uploads/2015/11/shaws_800.jpg';
  }
  return (
    <Grid.Column>
      <Card raised>
        <Image src={props.image} height="200em" />
        <Card.Content>
          <Card.Header>{props.productName}</Card.Header>
          <Card.Meta>
            <span className="date">
              <Image src={logoSource} height="25em" />
            </span>
          </Card.Meta>
          <Card.Description>
            Price: {props.salePrice} <br />Sale Ends: {props.endDate} <br />
            {props.best ? <p>Best Deal</p> : null}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="tags" />
            View Deal
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};
export default SaleCard;
