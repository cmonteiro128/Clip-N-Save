import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import { Grid } from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';
import SaleCard from '../components/SaleCard';
import combineActions from '../actions/combineActions';
import authActions from '../actions/auth';
import saleItemActions from '../actions/saleItem';

const cards = '';
// savedSaleItems.length > 0 ? (
//   savedSaleItems.map((element, index) => {
//     console.log(element);
//     /* eslint-disable no-underscore-dangle */
//     const item = element._source;
//     let best;
//     if (index === 0) best = true;
//     return (
//       <SaleCard
//         productName={item.productName}
//         endDate={item.endDate}
//         image={item.image}
//         salePrice={item.salePrice}
//         storeName={item.storeName}
//         best={best}
//         isSignedIn={isSignedIn}
//       />
//     );
//   })
// ) : (
//   <div />
// );

class SavedDeals extends React.Component {
  componentDidMount() {
    this.props.getSavedSaleItems();
  }

  render() {
    const { savedSaleItems } = this.props;

    console.log(savedSaleItems);

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
