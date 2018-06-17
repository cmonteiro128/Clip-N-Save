import React from 'react';
import { Image, Icon, Card } from 'semantic-ui-react';

const SaleCard = () => (
  <Card raised>
    <Image src="https://d2w079qmvzh0vc.cloudfront.net/opportunities/925/blog_images/updated_pack_shot.png" />
    <Card.Content>
      <Card.Header>Chicken Breast</Card.Header>
      <Card.Meta>
        <span className="date">
          <Image
            src="https://www.shopmarketbasket.com/sites/default/files/Market-Basket-Logo.png"
            height="25em"
          />
        </span>
      </Card.Meta>
      <Card.Description>15% off this week only</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="tags" />
        View Deal
      </a>
    </Card.Content>
  </Card>
);
export default SaleCard;
