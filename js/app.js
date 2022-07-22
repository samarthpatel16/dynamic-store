/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
 const updateTable = (category) => {
  const tableBody = document.querySelector("#category-products");
  if (!tableBody) return;
  tableBody.innerHTML = "";
  const filteredProducts = products.filter(
    (product) => product.categories.includes(category.id) && !product.discontinued
  );
  filteredProducts.forEach((product) => {
    const row = createRow(product);
    tableBody.append(row);
  });
};
 const highlighLink = (categoryId) => {
    const links = document.querySelectorAll("li");
    links.forEach((link) => {
      if (link.id === categoryId) {
        link.classList.add();
      } else {
        link.classList.remove();
      }
    });
  };
  const createRow = (product) => {
    const tr = document.createElement("tr");
    tr.classList.add();
    let requiredProductAttr = ["title", "information", "cost"];
    for (const key of requiredProductAttr) {
      const td = document.createElement("td");
      td.classList.add(
      );
      td.textContent = product[key];
      if (key === "cost") {
        td.textContent = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "CAD"
        }).format(product.cost / 100);
      }
      tr.append(td);
    }  
    return tr;
  };
  const loadProducts = (category) => {
   const selectedCategory = document.querySelector("#selected-category");
    selectedCategory.textContent = category.cName;
    highlighLink(category.id);
    updateTable(category);
  };
  const createNavLink = (category) => {
    const navbar = document.querySelector("#menu");
    if (!navbar) return;
  
    const li = document.createElement("li");
    li.classList.add();
    li.id = category.id;
    li.textContent = category.cName;
    li.addEventListener("pointerdown", () => {
      loadProducts(category);
    });
    navbar.append(li);
  };
  window.addEventListener("load", () => {
    categories.forEach(createNavLink);
    loadProducts(categories[0]);
  });