import React from 'react';
import { css } from 'emotion';
import { connect } from 'unistore/react';
import {
  Grid,
  Divider,
  Header,
  Button,
  Icon,
  Message
} from 'semantic-ui-react';
import HeaderBar from '../components/HeaderBar';
import SaleCard from '../components/SaleCard';
import combineActions from '../actions/combineActions';
import authActions from '../actions/auth';
import saleItemActions from '../actions/saleItem';
// import emailActions from '../actions/email';

class SavedDeals extends React.Component {
  componentDidMount() {
    this.props.getSavedSaleItems();
  }

  render() {
    const { savedSaleItems, removeSavedSaleItem, emailRecItems } = this.props;

    const cards =
      savedSaleItems != null ? (
        savedSaleItems.map(element => (
          <SaleCard
            productName={element.productName}
            endDate={element.endDate}
            image={element.image}
            salePrice={element.salePrice}
            storeName={element.storeName}
            best={false}
            removeSavedSaleItem={() => removeSavedSaleItem({ id: element.id })}
            isSignedIn
            isSaved
          />
        ))
      ) : (
        <Message
          className={css`
            position: absolute;
            top: 50% !important;
          `}
        >
          You have no saved deals. Save a deal to view items
        </Message>
      );

    return (
      <div
        className={css`
          margin-top: 10px;
        `}
      >
        <HeaderBar />
        <div
          className={css`
            align-items: flex-end;
            margin-top: 25px;
          `}
        >
          <Header
            as="h2"
            className={css`
              float: left;
            `}
          >
            <Header.Content>
              Saved Deals
              <Header.Subheader>
                Your saved search items appear here
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Button
            className={css`
              float: right;
            `}
            icon
            color="teal"
            labelPosition="left"
            onClick={() => emailRecItems()}
          >
            <Icon name="mail" />
            Email List
          </Button>
          <br />
        </div>
        <Divider
          className={css`
            clear: both;
          `}
        />
        <br />
        <Grid centered>{cards}</Grid>
      </div>
    );
  }
}

const allActions = combineActions(authActions, saleItemActions);
export default connect(
  ['savedSaleItems', 'isSignedIn'],
  allActions
)(SavedDeals);
