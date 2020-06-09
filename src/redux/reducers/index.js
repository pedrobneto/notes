import { VisibilityFilters } from '../actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    notes: []
}

function noteApp(state = initialState, action) {

    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state, notes: [
                    ...state.notes,
                    {
                        id: `${action.note.title}_${action.note.text}`,
                        isFavorite: action.note.isFavorite,
                        text: action.note.text,
                        title: action.note.title
                    }
                ]

            }
        default:
            return state;
    }
}

export default noteApp;