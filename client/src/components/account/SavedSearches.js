import React, { Component } from 'react';
import { Message, Icon, List, Input, Card, Button } from 'semantic-ui-react';
import { css, injectGlobal } from 'emotion';

export default class SavedSearches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedSearchBoxInput: ''
    };
  }

  handleSearchesInput = e =>
    this.setState({ savedSearchBoxInput: e.target.value });

  render() {
    // Style Changes
    injectGlobal(`
      .savedSearchesBox {
        display: block !important;
        margin: 0 auto;
        margin-right: 5px;
        width: 190px;
        float: left;
      }
      
      div.savedSearchesBox > input {
        width: inherit;
      }
    `);

    const { savedSearchBoxInput } = this.state;
    const {
      savedSearchItems,
      addSavedSearchItem,
      removeSavedSearchItem
    } = this.props;

    let searchItemsList;
    if (savedSearchItems !== []) {
      searchItemsList = savedSearchItems.map(x => (
        <Message floating>
          {x.query}
          <Button
            icon
            onClick={() => {
              removeSavedSearchItem({ id: x.id });
            }}
            className={css`
              position: absolute;
              top: 13%;
              left: 75%;
            `}
          >
            <Icon name="delete" />
          </Button>
        </Message>
      ));
    }

    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Card.Header>
              <Icon name="search" /> Saved Searches
            </Card.Header>
            <Card.Meta>Add a new saved search below</Card.Meta>
            <Card.Description>
              <List>{searchItemsList}</List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Input
              onChange={this.handleSearchesInput}
              value={savedSearchBoxInput}
              className="savedSearchesBox"
              placeholder="Search Name"
            />
            <Button
              className={css`
                margin-top: 1px !important;
              `}
              animated="vertical"
              onClick={() => {
                addSavedSearchItem({ query: savedSearchBoxInput });
                this.setState({ savedSearchBoxInput: '' });
              }}
            >
              <Button.Content hidden>Add</Button.Content>
              <Button.Content visible>
                <Icon name="plus" />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
