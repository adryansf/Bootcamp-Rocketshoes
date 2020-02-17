import produce from 'immer';

export default function cart(state = [], { type, product, id, amount }) {
  switch (type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(amount);
        }
      });
    }

    default:
      return state;
  }
}
