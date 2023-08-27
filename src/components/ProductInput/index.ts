export type ProductInputType = {
  quantityInput: HTMLInputElement;
  nameInput: HTMLInputElement;
};

export type Product = {
  quantity: number;
  name: string;
};

export const SetupProductInput = (): ProductInputType => {
  const nameInput = document.createElement("input");
  const quantityInput = document.createElement("input");

  nameInput.setAttribute("placeholder", "What is the product name");
  quantityInput.setAttribute("placeholder", "How many do you want");

  nameInput.value = "";
  quantityInput.value = `${1}`;

  return {
    nameInput,
    quantityInput,
  };
};
