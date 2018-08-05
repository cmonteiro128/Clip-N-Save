import React from 'react';
import { Image, Icon, Card, Header, Button } from 'semantic-ui-react';

const SaleCard = props => {
  let logoSource;
  let ellipsis = '';
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
  if (props.productName.length > 50) {
    ellipsis = '...';
  }
  return (
    <div style={{ padding: `${5}px` }}>
      <Card raised>
        <Image src={props.image} height="200em" centered inline />
        <Card.Content>
          <Card.Header>
            <span className="date">
              <Image src={logoSource} height="25em" />
            </span>
            <br />
            {props.productName.substring(0, 50) + ellipsis}
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
        <Card.Content extra textAlign="center">
          {props.isSignedIn ? (
            <Button fluid color="teal" onClick={() => props.addSavedSaleItem()}>
              <Icon name="tags" />
              Save Deal
            </Button>
          ) : (
            <Button fluid color="grey">
              <Icon name="tags" />
              Sign In To Save Deal
            </Button>
          )}
        </Card.Content>
      </Card>
    </div>
  );
};
export default SaleCard;
