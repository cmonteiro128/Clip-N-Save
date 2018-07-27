import React, { Component } from 'react';
import { Message, Icon, List, Input, Card } from 'semantic-ui-react';
import { css } from 'emotion';

export default class SavedSearches extends Component {
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  render() {
    //const { value } = this.state;
    const { savedSearchItems } = this.props;

    let searchItemsList;
    if (savedSearchItems !== null) {
      searchItemsList = savedSearchItems.map(x => (
        <Message floating>{x}</Message>
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
              className={css`
                display: block !important;
                margin: 0 auto;
              `}
              placeholder="Search Name"
            />
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
