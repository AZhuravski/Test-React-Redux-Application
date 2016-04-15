import $ from 'jquery'

export function loadForPage({ page }) {
    return $.get(`/api/comment?limit=10&offset=${(page - 1) * 10}`)
}