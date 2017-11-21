import { getDecks } from '../utils/api';

export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const ADD_NEW_DECK = 'ADD_NEW_DECK';

export function getAllDecks() {
  return (dispatch) => {
    getDecks()
      .then((decks) => {
        dispatch({
          type: GET_ALL_DECKS, 
          payload: decks
        })
      })
  }
}

export function addNewDeck(deck) {
  return {
    type: ADD_NEW_DECK,
    payload: deck
  }
}
