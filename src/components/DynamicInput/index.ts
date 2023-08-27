type DynamicInputProps<T> = {
  display: HTMLDivElement;
  addButton: HTMLButtonElement;
  createInput: () => T;
};

export class DynamicInput<
  T extends { [key: string]: HTMLInputElement },
  K extends { [V in keyof K]: K[V] }
> {
  display: HTMLDivElement;
  addButton: HTMLButtonElement;
  inputs: T[];
  createInput: () => T;

  constructor({ addButton, display, createInput }: DynamicInputProps<T>) {
    this.addButton = addButton;
    this.display = display;
    this.createInput = createInput;
    this.inputs = [];
  }

  getInputValues(): K[] {
    var values: K[] = [];
    this.inputs.forEach((input) => {
      Array<keyof K>().forEach((key) => {
        values.push({ [key]: input[key].innerHTML! });
      });
    });
    return values;
  }

  deleteInput(id: number) {
    document.querySelector<HTMLDivElement>(`#input-${id}`)!.remove();
  }

  createNewInput() {
    const input = this.createInput();
    const div = document.createElement("div");
    const removeButton = document.createElement("button");

    div.setAttribute("class", "input");

    this.inputs.push(input);
    Object.keys(input).forEach((key) => {
      div.appendChild(input[key]);
    });

    removeButton.addEventListener("click", () =>
      this.deleteInput(this.inputs.length)
    );
    removeButton.innerHTML = `Remove Product`;

    div.id = `input-${this.inputs.length}`;
    div.appendChild(removeButton);

    document.querySelector<HTMLDivElement>("#dynamic-input")!.appendChild(div);
  }

  Setup() {
    this.addButton.addEventListener("click", () => this.createNewInput());
  }
}
