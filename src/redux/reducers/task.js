
const taskReducer = (state ={}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'ADD_TASK':
      newState[
        Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
      ] = {
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
        complete:action.payload.complete
      };
      break;
    case 'EDIT_TASK':
      newState[action.payload] ={
        complete:action.payload.complete?? newState[action.payload.key].complete
      }
      break;
    case 'DELETE_TASK':
      delete newState[action.payload];
      break;

    default:
      break;
  }
  return newState;
};



export default taskReducer;