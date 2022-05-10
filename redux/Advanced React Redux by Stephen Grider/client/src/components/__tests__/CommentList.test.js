import { Provider } from "react-redux";
import { store } from "redux/store";
import App from "App";
import { render, waitFor } from "@testing-library/react";
import { useSelector } from "react-redux";
import { addComment, selectComments } from "redux/reducers/commentsReducer";

let appContainer;

beforeEach(() => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  appContainer = container;
});

it("adds an item to the store when submitted", async () => {
  console.log(store.getState().commentsList.comments);
  expect(store.getState().commentsList.comments).toStrictEqual([]);
  // await waitFor(() => addComment("testing"), { timeout: 50 });

  // expect(store.getState().commentsList.comments).toStrictEqual(["testing"]);
});
