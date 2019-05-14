export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (options ={}) => {
  if(isFinite(options)){
    options = { value:options };
  } else if (options.value == null || options.value == undefined){
    options.value = 1;
  }
  return {
    type:INCREMENT, 
    payload:
    {
      options: options
    }
  };
}
export const decrement = (options ={}) => {
  if(isFinite(options)){
    options = { value:options };
  } else if (options.value == null || options.value == undefined){
    options.value = 1;
  }
  return {
    type:DECREMENT, 
    payload:
    {
      options: options
    }
  };
}