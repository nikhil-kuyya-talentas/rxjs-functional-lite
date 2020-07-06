import { lists, videos } from "./input";
import { output } from "./output";
const test = require("tape");

const result = lists.map((list) => {
  const listVideos = videos
    .filter((video) => video.listId === list.id)
    .map((video) => {
      return {
        id: video.id,
        title: video.title,
      };
    });
  return {
    name: list.name,
    videos: listVideos,
  };
});

test("Relation List -> Hiearchical Data Simple", (t) => {
  t.plan(1);
  t.deepEquals(output, result);
});
