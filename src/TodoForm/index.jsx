import { Button } from "../Button";
import { TextInput } from "../components/Textinput";

import "./Todo-Form.style.css";

export function TodoForm(Props) {
  return (
    <form action={Props.onSubmit} className="todo-form">
      <TextInput placeholder="Digite o item que deseja adicionar" required />
      <Button>Salvar item</Button>
    </form>
  );
}
