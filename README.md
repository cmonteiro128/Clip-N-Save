# Clip 'N Save - API & Client

Repository for Clip 'N Save, an application that allows shoppers to save money every week by finding top supermarket deals.

**Technologies**
API Server: SailsJS (Node, Express)
Client: React, Unistore
DB: Mongo
Search: ElasticSearch
Auth: Firebase Authentication

## Table of Contents

- [Install](#install)
- [User Guide](#user-guide)
  * [Searching Deals](#searching-deals)
  * [Account Management](#account-management)
  * [Saving Deals](#saving-deals)
  * [Search Suggestions](#search-suggestions)
- [Links](#links)

## Install
To run a development environment

```bash
npm install
sails lift
cd client
yarn install
yarn start
```

To run a production version locally

`docker compose up`

## User Guide
### Searching Deals
The search deals page allows a shopper to browse currently available deals at local supermarkets (currently Shaws / Star Market, Stop & Shop, and Market Basket). To search, a user should enter a search term in the search box located on the far right side of the application's menu bar. Items matching the search will automatically populate in the area below the menu bar.

### Account Management
To access other features of Clip 'N Save, like saving deals and suggested search, a user needs to create an account. To do this, a user should click on the "My Account" link in the menu bar, which will then redirect to the login page. A user can then create an account with their desired username and password, or login with an already created Google account.

### Saving Deals
Once a user is signed in, they have the ability to save deals to their account. This can be done by navigating back to the Search Deals page and searching for an item. Each item should now contain a button with the text "Save Deal". Clicking this button will add that specific item to their saved deals section. A user can now navigate to the Saved Deals page, and view all items they have saved. Clikcing the "Email List" button will send an email with all the saved deals the user has saved to the email address associated with their account.

### Search Suggestions
The user also has the ability to include the names of items they wish to purchase every week into a recurring search service. On the My Account page, the user can enter as many item names as they wish in the Saved Searches box. Based off of these search terms, the recommended items section of the My Account page will automatically be repopulated with deals that are most releveant to what the user is looking for. The user can then proceed to save any of these deals to their Saved Seals section as well.

## Links

- [Production site](https://clipnsave.now.sh)
