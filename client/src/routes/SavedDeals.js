import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import { Grid } from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';
import SaleCard from '../components/SaleCard';
import combineActions from '../actions/combineActions';
import authActions from '../actions/auth';
import saleItemActions from '../actions/saleItem';

class SavedDeals extends React.Component {
  componentDidMount() {
    this.props.getSavedSaleItems();
  }

  render() {
    const { savedSaleItems } = this.props;

    const cards =
      savedSaleItems != null ? (
        savedSaleItems.map(element => {
          return (
            <SaleCard
              productName={element.productName}
              endDate={element.endDate}
              image={element.image}
              salePrice={element.salePrice}
              storeName={element.storeName}
              best={false}
              isSignedIn
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
  }
}

const allActions = combineActions(authActions, saleItemActions);
export default connect(
  ['savedSaleItems', 'isSignedIn'],
  allActions
)(SavedDeals);
