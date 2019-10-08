import ActionTypes from '../contants/constant';

const INITIAL_STATE = {
    user_name: "Muhammad Bilal",
    roll_no: 904429,
    class: "XII",
    counter: 0
}

const reducer = (states = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_U_name:
            return {
                ...states,
                user_name: action.payload
            };
        case ActionTypes.CHANGE_ROLL_nO:
            return {
                ...states,
                roll_no: action.payload
            };
        case ActionTypes.CHANGE_CLASS:
            return {
                ...states,
                class: action.payload
            };
        case ActionTypes.INCREMENT:
            return {
                ...states,
                counter: states.counter + action.payload
            }
        case ActionTypes.DECREMENT:
            return {
                ...states,
                counter: states.counter - action.payload
            }
        default:
            return states;

    }
}

export default reducer;