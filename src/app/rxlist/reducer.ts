import { Action } from '@ngrx/store';

interface Word {
    en: string;
    vn: string;
    _id: string;
}
const WORDS: Word[] = [
    {
      '_id': '59f08ff476ab40f4a22b5fa0',
      'en': 'activity',
      'vn': 'hoạt động'
    },
    {
      '_id': '59f08ff476ab40f4a22b5fa1',
      'en': 'active',
      'vn': 'chủ động'
    },
    {
      '_id': '59f08ff476ab40f4a22b5fa3',
      'en': 'bedroom',
      'vn': 'phòng ngủ'
    },
    {
      '_id': '59f32e87bc87844a532224b3',
      'en': 'new',
      'vn': 'mới'
    }
];

const defaultState = {
    words: WORDS,
    isShowForm: false
};

function wordsReducer(state = WORDS, action: Action) {
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word._id !== action.payload._id);
    }
    if (action.type === 'ADD_WORD') {
        const { en, vn, _id } = action.payload;
        return state.concat({ en, vn, _id });
    }
    return state;
}

function isShowFormReducer(state = false, action: Action) {
    if (action.type === 'TOGGLE_IS_SHOW_FORM') {
        return !state;
    }
    return state;
}

const reducer = {
    words: wordsReducer,
    isShowForm: isShowFormReducer
};

export default reducer;

// export const reducer = (state = defaultState, action: Action) => {
//     if (action.type === 'REMOVE_WORD') {
//         const newWords = state.words.filter(word => word._id !== action.payload._id);
//         return { ...state, words: newWords };
//     }
//     if (action.type === 'ADD_WORD') {
//         const { en, vn, _id } = action.payload;
//         const newWords = state.words.concat({ en, vn, _id });
//         return { ...state, words: newWords };
//     }
//     if (action.type === 'TOGGLE_IS_SHOW_FORM') {
//         return { ...state, isShowForm: !state.isShowForm };
//     }
//     return state;
// };
