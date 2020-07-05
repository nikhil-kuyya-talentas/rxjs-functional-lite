import {fromEvent, from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texBox = document.getElementById('textbox');
const keyPress$ = fromEvent(texBox,'keypress');

function getWikiPedia(term) {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${encodeURIComponent(term)}`;
    fetch(url).then(function(data) {        
        return data.json();
    }).then((res) => {
        return res[1];
    })
}

function getWikiPediaSearchResult(term) {
    function forEachFn(obs){
        var cancelled = false;
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${encodeURIComponent(term)}`;
        fetch(url).then(function(data) {        
            return data.json();
        }).then((res) => {
            if(!cancelled){                
                obs.next(res[1]);
                obs.complete();
            }                
        })
        
        return {
            dispose : function() {
                cancelled = true;
            }
        }
    }
    return {
        forEach : (observer) => {
            forEachFn(observer);
        }
    };
}
getWikiPediaSearchResult("terminator").forEach({
    next : console.log,
    complete : console.log
})
// onNext, onCompleted and onError







