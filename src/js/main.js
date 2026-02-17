import { fetchUsers } from "./api.js";
import { clearUserList, renderUserList } from "./dom.js";
import {
  clearErrorMessage,
  setLoadingState,
  showFriendlyError,
} from "./ui.js";

const buttonElement = document.querySelector("#btnLoadUsers");
const userListElement = document.querySelector("#userList");
const errorElement = document.querySelector("#errorMessage");

buttonElement.addEventListener("click", async () => {
  await handleUsersLoading();
});

async function handleUsersLoading() {
  clearErrorMessage(errorElement);
  clearUserList(userListElement);
  setLoadingState(buttonElement, true);

  try {
    const users = await fetchUsers();
    renderUserList(userListElement, users);
  } catch {
    showFriendlyError(errorElement);
  } finally {
    setLoadingState(buttonElement, false);
  }
}
