import "./style.css";
import { DynamicInput } from "./components/DynamicInput";
import { ProductInputType, SetupProductInput } from "./components/ProductInput";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class="products">Products</h1>
    <div class="dynamic-input" id="dynamic-input"></div>
    <div>
      <button class="add" id="add">Add Product</button>
    </div>
  </div>
`;

const DynamicProductInput = new DynamicInput<ProductInputType>({
  addButton: document.querySelector("#add")!,
  display: document.querySelector("#dynamic-input")!,
  createInput: SetupProductInput,
}).Setup();
