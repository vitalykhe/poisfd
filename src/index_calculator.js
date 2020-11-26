import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/createStore';
import reducer from './redux/reducer';
import { changeRubValue, changeBitcoinValue } from './redux/actionCreators'

const initialState = {
  rub: 0,
  bitcoin: 0
}

const store = createStore(reducer, initialState);

store.dispatch({type : "INIT_APP"})

class MyComp extends React.Component {
  render(){
    
      let state = {
        rub: 0,
        bitcoin: 0,
        text: "sometext"
      }

      if(this.props.updatedState) {
        state = this.props.updatedState;
        console.log(state);
      }

      return(
      <div className="p-3">
        <div className="m-3"><input id="rubbles" type="number" name="rub" placeholder="рубли" 
          onChange={ e => { this.props.dispatch(changeRubValue(e.target.value)) } }
          value={ state.rub }
          
          /></div>
        <div className="m-3"><input id="bitcoins" type="number" placeholder="биткоины"
          onChange={ e => { this.props.dispatch(changeBitcoinValue(e.target.value)) } }
          value={ state.bitcoin }
        /></div>

        <div className="m-3">
          <button type="button" className="btn btn-primary">Back</button>
          <button type="button" className="btn btn-primary ml-2">Update rate</button>
        </div>
      </div>
    );
  }
}

store.subscribe(() => {
  const state = store.getState();
  ReactDOM.render(
    <MyComp  updatedState={state} store={store} dispatch={ store.dispatch } />, 
    document.getElementById('root')
  );

});

console.log(store.getSubscribers());


ReactDOM.render(
  <MyComp  store={store} dispatch={ store.dispatch } />, 
  document.getElementById('root')
);
