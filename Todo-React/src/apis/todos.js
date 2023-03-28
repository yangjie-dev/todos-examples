import api from "./api";

export async function getTodosApi() {
    const response = await api.get("/todos");
    return response
};

export async function addTodoApi(text) {
    const response = await api.post("/todos", { text })
    return response;
}

export async function updateTodoApi(id, todo) {
    const resposne = await api.put(`/todos/${id}`, todo);
    return resposne;
}