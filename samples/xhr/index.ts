import {fromEvent, from } from 'rxjs';
import * as $ from 'jquery';
import { data } from 'jquery';

const texBox = document.getElementById('textbox');
const keyPress$ = fromEvent(texBox,'keypress');

function getWikiPedia(term){
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${encodeURIComponent(term)}&callback=?`;
    $.getJSON(url,(data) => {
        console.log('res',data);
    })
}

keyPress$.pipe(
    map((event : KeyboardEvent) => {
        return getWikiPedia(event.key);
    })
).forEach(console.log);
