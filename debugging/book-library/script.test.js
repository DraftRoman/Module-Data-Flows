import { preSet, Book, getLibrary, resetLibrary } from "./script.js";

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