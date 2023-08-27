type DynamicInputProps<T> = {
  display: HTMLDivElement;
  addButton: HTMLButtonElement;
  createInput: () => T;
};

export class DynamicInput<T extends { [key: string]: HTMLInputElement }> {
  display: HTMLDivElement;
  addButton: HTMLButtonElement;
  inputs!: T[];
  createInput: () => T;

  constructor({ addButton, display, createInput }: DynamicInputProps<T>) {
    this.addButton = addButton;
    this.display = display;
    this.createInput = createInput;
  }

  CreateNewInput() {
    const input = this.createInput();
    const div = document.createElement("div");

    div.setAttribute("class", "input");

    Object.keys(input).forEach((key) => {
      div.appendChild(input[key]);
    });

    document.querySelector<HTMLDivElement>("#dynamic-input")!.appendChild(div);
  }

  Setup() {
    this.addButton.addEventListener("click", () => this.CreateNewInput());
  }
}
