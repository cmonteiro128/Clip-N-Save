/* eslint-disable */
export default function combineActions(...allActions) {
  return store =>
    allActions.reduce((combined, actions) => {
      for (const i in actions) {
        let action = actions[i];
        const value = action.name;
        if (typeof action === 'function')
          action = Object.defineProperty(action(store), 'name', {
            value
          });
        combined[i] = action;
      }
      return combined;
    }, {});
}
