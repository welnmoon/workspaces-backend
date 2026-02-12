// для таблиц
export class ProjectListItemDto {
  id: number;
  name: string;
  description: string | null;
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
  endedAt: Date | null;

  tasksTotal?: number;
  tasksDone?: number;
  Sprint?: { id: number; name: string }[] | null;
}
// {
//     "id": 7,
//     "name": "Nursultan",
//     "description": "",
//     "workspaceId": 20,
//     "createdAt": "2025-11-14T18:16:50.282Z",
//     "updatedAt": "2025-11-14T18:16:50.282Z",
//     "endedAt": null,
//     "Sprint": [],
//     "_count": {
//       "Task": 1
//     },
//     "tasksTotal": 1,
//     "tasksDone": 0
//   },
