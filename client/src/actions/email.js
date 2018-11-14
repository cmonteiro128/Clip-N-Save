import apiCall from './apiCall';

const emailActions = () => ({
  emailSavedItems: async state => {
    const response = await apiCall(
      'POST',
      'email/test-email',
      null,
      state.token
    );
    // const savedSearchItems = await response.json();
  },
  emailRecItems: async state => {
    // test 4
    const response = await apiCall(
      'POST',
      'email/send-cart-email',
      null,
      state.token
    );
    // const savedSearchItems = await response.json();
  }
});

export default emailActions;
