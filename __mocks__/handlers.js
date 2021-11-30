import { rest } from "msw";

import keys from "../Keys";

export const handlers = [
  rest.get(`${keys.serverURL}/classes/todos`, (req, res, ctx) => {
    return res(
      ctx.json([
        { objectId: "objId-1", todo: "todo task 1", done: false },
        { objectId: "objId-2", todo: "todo task 2", done: false },
      ])
    );
  }),
  rest.get(`${keys.serverURL}/classes/todos/objId-1`, (req, res, ctx) => {
    return res(
      ctx.json([{ objectId: "objId-1", todo: "todo task 1", done: false }])
    );
  }),
  rest.post(`${keys.serverURL}/classes/todos`, (req, res, ctx) => {
    return res(
      ctx.json([
        { objectId: "objId-1", todo: "todo task 1", done: false },
        { objectId: "objId-2", todo: "todo task 2", done: false },
      ])
    );
  }),
  rest.get(`${keys.serverURL}/login`, (req, res, ctx) => {
    return res(ctx.json([]));
  }),
  rest.post(`${keys.serverURL}/users`, (req, res, ctx) => {
    return res(ctx.json([]));
  }),
];
