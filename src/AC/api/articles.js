import $ from 'jquery'

export function loadAll() {
    return $.get('/api/article')
}

export function loadById({ id }) {
    return $.get(`/api/article/${id}`)
}