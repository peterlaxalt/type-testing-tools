class VariableFontTools {
  constructor() {
    this.dom = {
      wrapper: {
        key: "[data-vf-wrapper]",
        current: null,
      },
      loader: {
        key: "[data-vf-loader]",
        current: null,
      },
    };

    this.mode = {};

    this.cursorConfig = {};

    this.DEBUG_VERBOSE = true;

    this.init();
  }

  updateFont(data) {
    console.log("vf ~ handleFontUpload(e)", data);

    let styleTag = document.createElement("style");
    let fontName = "TestFont";

    let fontDeclaration = `@font-face { font-family: ${fontName}; src: url('${data}')}`;

    styleTag.appendChild(document.createTextNode(fontDeclaration));

    document.head.appendChild(styleTag);
  }

  handleFontUpload(e) {
    console.log("vf ~ handleFontUpload(e)", e);

    let fontData = null;

    let uploadedFiles = e.target.files;
    let uploadedFileFirstChild = uploadedFiles[0];

    let reader = new FileReader();

    const _self = this;

    reader.readAsDataURL(uploadedFileFirstChild);

    function readAndUpdateFont(data) {
      console.log("vf ~ handleFontUpload().readAndUpdateFont()", data);
  
      _self.updateFont(data);
    }

    reader.onloadend = () => readAndUpdateFont(reader.result).bind(this);

    return;
  }

  addLoaderEventListeners(el) {
    console.log("vf ~ addLoaderEventListeners()");

    let _self = this;

    el.addEventListener("change", (e) => _self.handleFontUpload(e).bind(this), false);
  }

  createDOM() {
    console.log("vf ~ createDOM()");

    let loaderElement = document.querySelector(this.dom.loader.key);

    if (loaderElement) {
      console.log("vf ~ createDOM(): loaderElement detected");
      this.addLoaderEventListeners(loaderElement);
    }

    return;
  }

  log(msg, extras = " ", isError = false) {
    if (!this.DEBUG_VERBOSE) return;

    if (!isError) {
      console.log("vf ~ " + msg, extras);
    } else {
      console.error("vf ~ " + msg, extras);
    }
  }

  init() {
    this.log("init(): initialized");

    this.createDOM();
  }
}

let init = new VariableFontTools();
