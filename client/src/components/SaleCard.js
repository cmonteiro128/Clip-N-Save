import React from 'react';
import { Image, Icon, Card, Header, Grid } from 'semantic-ui-react';

const SaleCard = props => {
  let logoSource;
  let price = props.salePrice;
  const endDate = new Date(props.endDate);
  if (props.storeName === 'Market Basket') {
    logoSource =
      'https://www.shopmarketbasket.com/sites/default/files/Market-Basket-Logo.png';
  } else if (props.storeName === 'Stop Shop') {
    logoSource = 'https://stopandshop.com/static/rsns/img/opco-logo.svg';
  } else if (props.storeName === 'Shaws') {
    logoSource =
      'https://www.shaws.com/wp-content/uploads/2015/11/shaws_800.jpg';
  }
  if (!price.includes('$')) {
    price = `$${price}`;
  }

  if (price.endsWith('.0')) {
    price += '0';
  }
  return (
    <Grid.Column>
      <Card raised>
        <Image src={props.image} height="200em" />
        <Card.Content>
          <Card.Header>
            <span className="date">
              <Image src={logoSource} height="25em" />
            </span>
            <br />
            {props.productName}
          </Card.Header>
          <Card.Meta />
          <Card.Description>
            <Header as="h3" color="green">
              {props.best ? (
                <Icon.Group>
                  <Icon color="blue" name="certificate" />
                  <Icon name="dollar" corner color="green" />
                </Icon.Group>
              ) : null}
              {price}
            </Header>
            <Header as="h4" color="red">
              Sale Ends: {endDate.toDateString()}
            </Header>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="/#">
            <Icon name="tags" />
            View Deal
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};
export default SaleCard;
