
const ADD_NOTE = 'ADD_NOTE'
const TOGGLE_FAV = 'TOGGLE_FAV'
const CHANGE_FILTER = 'CHANGE_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_FAV: 'SHOW_FAV'
}

export function changeFilter() {
    return {
        type: CHANGE_FILTER
    }
}

export function toggleFavorite() {
    return {
        type: TOGGLE_FAV
    }
}

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    }
}
