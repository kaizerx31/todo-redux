import { actionTypes, filters } from "../actions";

 const filter = (state=filters.SHOW_ALL,action) => {
    switch(action.type) {
        case actionTypes.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
export default filter;