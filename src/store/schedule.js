const ADD_SECTION_1_DATA = 'ADD_SECTION_1_DATA';
const ADD_SECTION_2_DATA = 'ADD_SECTION_2_DATA';
const ADD_SECTION_3_DATA = 'ADD_SECTION_3_DATA';
const UPDATE_STAFF_DATA_1 = 'UPDATE_STAFF_DATA_1';
const UPDATE_STAFF_DATA_2 = 'UPDATE_STAFF_DATA_2';
const UPDATE_STAFF_DATA_3 = 'UPDATE_STAFF_DATA_3';

export function addSection1Data(data) {
    return { type:  ADD_SECTION_1_DATA, data };
}

export function addSection2Data(data) {
    return { type:  ADD_SECTION_2_DATA, data };
}

export function addSection3Data(data) {
    return { type:  ADD_SECTION_3_DATA, data };
}

export function updateStaffDataInSection1(data) {
    return { type: UPDATE_STAFF_DATA_1, data };
}

export function updateStaffDataInSection2(data) {
    return { type: UPDATE_STAFF_DATA_2, data };
}

export function updateStaffDataInSection3(data) {
    return { type: UPDATE_STAFF_DATA_3, data };
}

const initialState = {
    section1Data: [],
    section2Data: [],
    section3Data: [],
}

export default function schedule(state = initialState, action) {
    switch(action.type) {
        case ADD_SECTION_1_DATA: return { ...state, section1Data: action.data }
        case ADD_SECTION_2_DATA: return { ...state, section2Data: action.data }
        case ADD_SECTION_3_DATA: return { ...state, section3Data: action.data }
        case UPDATE_STAFF_DATA_1: return { ...state, section1Data: updateStaff(action.data, state.section1Data) }
        case UPDATE_STAFF_DATA_2: return { ...state, section2Data: updateStaff(action.data, state.section2Data) }
        case UPDATE_STAFF_DATA_3: return { ...state, section3Data: updateStaff(action.data, state.section3Data) }
        default: return state
    }
}

function updateStaff(data, sectionData) {
    return sectionData.map(el => {
        if(el.id == data.id) {
            el.staff[data.index] = data.value;
        }
        return el;
    })
}