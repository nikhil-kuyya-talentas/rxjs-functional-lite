import { bookmarks,boxarts,lists,videos} from './input';
import { output } from './output';
import { of, from, zip } from 'rxjs';
import { map, filter, reduce, concatAll, concatMap} from 'rxjs/operators';

from(lists).pipe(
    concatMap(list => {
        return from(videos).pipe(filter((video) => {
        return video.listId === list.id
        }),concatMap((video) => {
            return zip(
                from(boxarts).pipe(
                    filter(boxart => boxart.videoId === video.id),reduce(
                        (smallestBoxArtSoFar,boxart) => {
                        return smallestBoxArtSoFar.height * smallestBoxArtSoFar.width < boxart.height * boxart.width ? smallestBoxArtSoFar : boxart;
                    }
                )
            ),from(bookmarks).pipe(filter(bookmark => bookmark.videoId === video.id))
            ).pipe(map(([boxart,bookmark]) => {
                return {
                    listId : list.id,
                    name : list.name,
                    id : video.id,
                    title : video.title,
                    boxart : boxart.url,
                    time : bookmark.time
                }
            }))
        })
        )
    })
).forEach(console.log);

// from(lists).forEach(console.log);
// of(lists).forEach(console.log)







