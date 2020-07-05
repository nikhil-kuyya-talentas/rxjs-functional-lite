import { lists, videos } from './input';
import { output } from './output';
import { from } from 'rxjs';
import { map, filter, concatMap, scan, reduce, take, tap } from 'rxjs/operators';
const test = require('tape');

const result = lists.map(list => {
    const listVideos = videos.filter(video => video.listId === list.id).map(video => {
        return {
            id : video.id,
            title : video.title
        }
    })
    return {
        name : list.name,
        videos : listVideos
    }
})
const list$ = from(lists);
const videos$ = from(videos);

const result$ = list$.pipe(
    concatMap((list) => {
        return videos$.pipe(
            filter(video => video.listId === list.id),
            map(video => {
                return {
                    id : video.id,
                    title : video.title
                };
            }),
            scan((acc,value) => {
                return acc.concat(value);
            },[]),
            map((value) => {
                return {
                    name : list.name,
                    videos : value
                }
            })
        )
    }),
    scan((acc,value) => {        
        const nonValueData = acc.filter((val) => {
            return val.name !== value.name;
        });        
        return [ ...nonValueData,value];        
    },[]),
);


test('Relation List -> Hiearchical Data Simple',(t) => {
    t.plan(2);
    t.deepEquals(output,result);
    result$.forEach((value) => {
        t.deepEquals(output,value);
    })
})

