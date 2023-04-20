const ADD_ALL_STAFF = 'ADD_ALL_STAFF';

export function addAllStaff(staff) {
    return { type:  ADD_ALL_STAFF, staff };
}

const initialState = {
    allStaff: [],
}

export default function staff(state = initialState, action) {
    switch(action.type) {
        case ADD_ALL_STAFF: return { ...state, allStaff: action.staff }
        default: return state
    }
}