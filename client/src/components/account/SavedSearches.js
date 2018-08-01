import React, { Component } from 'react';
import { Icon, Grid, Input, Card, Button, Segment } from 'semantic-ui-react';
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
        margin: 0 auto;
        margin-right: 5px;
        width: 80%;
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
        <Grid.Row>
          <Grid.Column width={12}>
            <Segment>{x.query}</Segment>
          </Grid.Column>
          <Grid.Column width={4} verticalAlign="middle">
            <Button
              icon
              onClick={() => {
                removeSavedSearchItem({ id: x.id });
              }}
            >
              <Icon name="remove" />
            </Button>
          </Grid.Column>
        </Grid.Row>
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
              <Grid columns={2} container divided stackable>
                {searchItemsList}
              </Grid>
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
