import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value:0 }

export default (state = initialState, action) => {
  switch (action.type){
    case INCREMENT:
      return { value: stete.value + 1 }
    case DECREMENT:
      return { value: stete.value - 1 }
    default:
    return state
  }
}
