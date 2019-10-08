import ActionTypes from '../contants/constant';


export function changeUser_name(updatedUsername) {
    return dispatch => {
        dispatch({ type: ActionTypes.CHANGE_U_name, payload: updatedUsername })
    }
}
export function change_Roll_no(updatedRollNo) {
    return dispatch => {
        dispatch({ type: ActionTypes.CHANGE_ROLL_nO, payload: updatedRollNo })
    }
}
export function change_Class(updatedClass) {
    return dispatch => {
        dispatch({ type: ActionTypes.CHANGE_CLASS, payload: updatedClass })
    }
}
export function increment() {
    return dispatch => {
        dispatch({ type: ActionTypes.INCREMENT, payload: 1 })
    }
}
export function decrement() {
    return dispatch => {
        dispatch({ type: ActionTypes.DECREMENT, payload: 1 })
    }
}