
const taskReducer = (state ={}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'ADD_TASK':
      newState[
        Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
      ] = {
        complete:false,
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
        image: action.payload.image
      };
      break;
    case 'EDIT_TASK':
      newState[action.payload.key] = {
        ...action.payload,
        complete: action.payload.complete ?? newState[action.payload.key].complete,
        title: action.payload.title ?? newState[action.payload.key].title,
        dueDate: action.payload.dueDate ?? newState[action.payload.key].dueDate,
        description: action.payload.description ?? newState[action.payload.key].description,
        image: action.payload.image ?? newState[action.payload.key].image,
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