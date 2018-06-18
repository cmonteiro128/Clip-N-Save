import React from 'react';
import { css } from 'emotion';
import { Grid, Message } from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';
import WelcomeMessage from '../components/WelcomeMessage';
import SaleCard from '../components/SaleCard';
import { connect } from 'unistore/react';

const Home = connect('searchResults')(({ searchResults }) => {
  const cards =
    searchResults.length > 0 ? (
      searchResults.map((element, index) => {
        console.log(element);
        const item = element._source;
        let best;
        if (index === 0) best = true;
        return (
          <SaleCard
            productName={item.productName}
            endDate={item.endDate}
            image={item.image}
            salePrice={item.salePrice}
            storeName={item.storeName}
            best={best}
          />
        );
      })
    ) : (
      <Message
        className={css`
          position: absolute;
          top: 50% !important;
          left: 40%;
        `}
      >
        No Results. Please enter a search term in the box above
      </Message>
    );

  return (
    <div
      className={css`
        margin-top: 10px;
      `}
    >
      <HeaderBar />
      <WelcomeMessage />
      <Grid columns={3}>{cards}</Grid>
    </div>
  );
});
export default Home;
