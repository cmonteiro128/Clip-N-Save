import React from 'react';
import { css } from 'emotion';
import { Grid, Message, Header, Divider } from 'semantic-ui-react';
import { connect } from 'unistore/react';
import HeaderBar from '../components/HeaderBar';
import SaleCard from '../components/SaleCard';
import saleItemActions from '../actions/saleItem';

const Home = connect(
  ['searchResults', 'isSignedIn'],
  saleItemActions
)(({ searchResults, isSignedIn, addSavedSaleItem }) => {
  const cards =
    searchResults.length > 0 ? (
      searchResults.map((element, index) => {
        console.log(element);
        /* eslint-disable no-underscore-dangle */
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
            addSavedSaleItem={() => addSavedSaleItem({ id: item.mongoID })}
            isSignedIn={isSignedIn}
          />
        );
      })
    ) : (
      <Message
        className={css`
          position: absolute;
          top: 50% !important;
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
      <Header as="h2">
        <Header.Content>
          Search Deals
          <Header.Subheader>
            Search for weekly available deals here
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Divider />
      <br />
      {/* <WelcomeMessage /> */}
      <Grid
        className={css`
          margin-top: 15px !important;
        `}
        centered
      >
        {cards}
      </Grid>
    </div>
  );
});
export default Home;
