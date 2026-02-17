const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  try {
    const response = await fetch(USERS_API_URL);

    if (!response.ok) {
      throw new Error("Falha na requisição HTTP");
    }

    return await response.json();
  } catch (error) {
    throw normalizeRequestError(error);
  }
}

function normalizeRequestError(error) {
  if (error instanceof TypeError) {
    return new Error("Falha de rede ao consultar a API", { cause: error });
  }

  if (error instanceof SyntaxError) {
    return new Error("Erro ao interpretar a resposta da API", { cause: error });
  }

  return error;
}
