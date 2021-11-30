import { rest } from "msw";

import keys from "../Keys";

export const handlers = [
  rest.get(`${keys.serverURL}/todos`, (req, res, ctx) => {
    return res(
      ctx.json([
        { objectId: "objId-1", todo: "todo task 1", done: false },
        { objectId: "objId-2", todo: "todo task 2", done: false },
      ])
    );
  }),
];
