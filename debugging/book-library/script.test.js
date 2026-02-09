import { preSet, Book, getLibrary, isFormValid } from "./script.js";

test("adds two default books when library is empty", () => {
  preSet();
  const Library = getLibrary();

  expect(Library.length).toBe(2);
  expect(Library[0].title).toBe("Robison Crusoe");
  expect(Library[1].author).toBe("Ernest Hemingway");
});

test("does NOT add books if library is not empty", () => {
  preSet();
  preSet();

  const Library = getLibrary();
  expect(Library.length).toBe(2);
});

describe("Book class", () => {
  test("creates a book with correct properties", () => {
    const b = new Book("Dune", "Frank Herbert", 412, true);

    expect(b.title).toBe("Dune");
    expect(b.author).toBe("Frank Herbert");
    expect(b.pages).toBe(412);
    expect(b.wasRead).toBe(true);
  });
});

describe("Form validation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="title" />
      <input id="author" />
      <input id="pages" />
      <input id="check" type="checkbox" />
    `;
  });

  test("form is valid with correct data", () => {
    document.getElementById("title").value = "Dune";
    document.getElementById("author").value = "Frank";
    document.getElementById("pages").value = "300";

    expect(isFormValid()).toBe(true);
  });

  test("form is valid with incorrect data", () => {
    document.getElementById("title").value = "Dune";
    document.getElementById("author").value = "Frank";
    document.getElementById("pages").value = "-6";

    expect(isFormValid()).toBe(false);
  });
});