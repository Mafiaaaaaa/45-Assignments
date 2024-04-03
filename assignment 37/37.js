function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("You ordered a ".concat(size, " size shirt with ").concat(text, " print on it."));
}
;
make_shirt("Small", "Mafiaaa");
make_shirt("Medium");
make_shirt("Small", "I m legend");
