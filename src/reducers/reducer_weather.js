import {FETCH_WEATHER} from '../actions/index.js';

//never mutate state inside reducers
export default function(state = [], action) {
  console.log('Action recieved', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); //same 
      return [action.payload.data, ...state]; //same as above
  }
  return state;
}
