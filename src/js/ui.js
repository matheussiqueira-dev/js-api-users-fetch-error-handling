const DEFAULT_BUTTON_TEXT = "Carregar Usuários";
const LOADING_BUTTON_TEXT = "Carregando...";

export function setLoadingState(buttonElement, isLoading) {
  buttonElement.disabled = isLoading;
  buttonElement.textContent = isLoading
    ? LOADING_BUTTON_TEXT
    : DEFAULT_BUTTON_TEXT;
}

export function showFriendlyError(errorElement) {
  errorElement.textContent =
    "Erro ao carregar os usuários, tente novamente mais tarde.";
}

export function clearErrorMessage(errorElement) {
  errorElement.textContent = "";
}
