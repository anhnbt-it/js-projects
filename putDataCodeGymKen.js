const YELLOW = "f2d600";
const GREEN = "61bd4f";
const ORGANGE = "ff9f1a";
let color = YELLOW;
let title = "[Bài đọc] Mảng nhiều chiều";
let time_estimated = "15";
let time_estimated_type = "minutes";
console.log(title.search("[Bài đọc]"));
if (title.search("[Bài đọc]") !== -1 
  || title.search("[Bài giảng]") !== -1
  || title.search("[Thực hành]")  !== -1) {
  color = GREEN;
}
if (title.search("[Bài tập]") !== -1) {
  color = ORGANGE;
  time_estimated = "1";
  time_estimated_type = "hours";
}
// POST: https://ken-backend.codegym.vn/boards/6210/tasks
let data = {
  "title": title,
  "description": null,
  "time_estimated": time_estimated,
  "color": "f2d600",
  "swimlane_id": 30759,
  "column_id": 31686,
  "position": 0,
  "board_id": "6210",
  "time_estimated_type": time_estimated_type
}



// PUT https://ken-backend.codegym.vn/boards/6210/tasks/1016652
application/json
// {
//   "title": "[Bài đọc] Mảng nhiều chiều",
//   "description": null,
//   "color": "f2d600",
//   "position": 0,
//   "time_estimated": "15",
//   "time_estimated_type": "minutes",
//   "board_id": "6210",
//   "swimlane_id": 30759,
//   "column_id": 31689,
//   "updated_at": "2020-10-07 01:31:30",
//   "created_at": "2020-10-07 01:31:30",
//   "id": 1016652,
//   "date_started": "2020-10-06T17:00:00.000Z",
//   "date_due": "2020-10-06T17:00:00.000Z"
// }
