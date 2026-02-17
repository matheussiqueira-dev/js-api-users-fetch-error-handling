export function clearUserList(userListElement) {
  userListElement.replaceChildren();
}

export function renderUserList(userListElement, users) {
  const fragment = document.createDocumentFragment();

  users.forEach((user) => {
    const item = document.createElement("li");
    item.textContent = `${user.name} - ${user.email}`;
    fragment.appendChild(item);
  });

  userListElement.appendChild(fragment);
}
