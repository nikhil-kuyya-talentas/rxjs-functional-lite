export const zip =function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		results.push(combinerFunction(left[counter],right[counter]));
	}

	return results;
}

export const reduce = function(list,combiner, initialValue? : any) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (list.length === 0) {
		return list;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 2) {
			counter = 1;
			accumulatedValue = list[0];
		}
		else if (arguments.length >= 3) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one function.
		while(counter < list.length) {
			accumulatedValue = combiner(accumulatedValue, list[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};



// .map(list => {
//     return {  name : list.name,
//         videos : videos.filter(video =>  video.listId === list.id).map(video => {        
//             return zip(reduce(boxarts.filter(boxart => boxart.videoId === video.id),(smallestBoxArtSoFar,boxart) => {
//                 return smallestBoxArtSoFar.height * smallestBoxArtSoFar.width < boxart.height * boxart.width ? smallestBoxArtSoFar : boxart;
//             }),
//             bookmarks.filter(bookmark => bookmark.videoId === video.id),(smallestBoxArt,bookmark) => {
//                 return {
//                     id : video.id,
//                     title : video.title,
//                     time : bookmark.time,
//                     boxart : smallestBoxArt.url
//                 }
//             })
//         })
//     }
// })

// test('Multiple List test',(t) => {
//     t.plan(1);
//     t.deepEquals(output,result);
// })
// debugger;
// console.log(output,result);