import React from 'react';
import { css } from 'emotion';
import { Grid } from 'semantic-ui-react';
import { connect } from 'unistore/react';
import HeaderBar from '../components/HeaderBar';
import SaleCard from '../components/SaleCard';
import saleItemActions from '../actions/saleItem';

const Home = connect(
  ['searchResults', 'isSignedIn'],
  saleItemActions
)(({ searchResults, isSignedIn, addSavedSaleItem }) => {
  console.log(`results: ${searchResults.length}`);
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
      <div />
    );

  return (
    <div
      className={css`
        margin-top: 10px;
      `}
    >
      <HeaderBar />
      <Grid columns={6}>{cards}</Grid>
    </div>
  );
});
export default Home;
