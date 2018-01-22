import { LOAD_QUESTIONS } from "../Actions/actionTypes";

const initialState = { questions: [] };

const QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
    case incrementCounter:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case decrementCounter:
      return {
        ...state,
        counter: state.counter - 1
      };
    */

    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.data.questions
      };

    default:
      return state;
  }
};

export default QuestionsReducer;
