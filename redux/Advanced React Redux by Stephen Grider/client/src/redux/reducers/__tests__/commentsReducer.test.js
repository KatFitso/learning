import { addComment } from "../commentsReducer";

describe("addcomments action", () => {
  let action;
  beforeEach(() => {
    action = addComment("testing");
  });
  it("has the correct payload", () => {
    expect(action.payload).toBe("testing");
  });
  it("has the correct type", () => {
    expect(action.type).toBe("commentsList/addComment");
  });
});
