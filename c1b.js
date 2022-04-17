var randomColor = require("randomcolor");
class c1 {
  constructor() {
    this.dom = {
      brandmark: {
        key: "[data-hm-bm]",
        current: null,
      },
      grid: {
        key: "[data-hm-g]",
        current: null,
      },
      wrapper: {
        key: "[data-hm-w]",
        current: null,
      },
      toggles: {
        key: "[data-hm-mode-toggle]",
        elements: [],
      },
    };

    this.mode = {
      monochrome: false,
      invert: false,
      autoplay: true,
    };

    this.cells = [
      {
        col: 0,
        row: 0,
        asset: "/assets/arrow.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 1,
        row: 0,
        asset: "/assets/h.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 2,
        row: 0,
        asset: "/assets/e.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 0,
        row: 1,
        asset: "/assets/a.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 1,
        row: 1,
        asset: "/assets/d.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 2,
        row: 1,
        asset: "/assets/m.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 0,
        row: 2,
        asset: "/assets/a.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 1,
        row: 2,
        asset: "/assets/z.svg",
        deg: 0,
        bg: "transparent",
      },
      {
        col: 2,
        row: 2,
        asset: "/assets/e.svg",
        deg: 0,
        bg: "transparent",
      },
    ];

    this.DEBUG_VERBOSE = true;

    this.init();
  }

  generateStyles(cell) {
    let styles = [
      `--c: ${cell.col};`,
      `--r: ${cell.row};`,
      `--a: url('${cell.asset}');`,
      `--d: ${cell.deg}deg;`,
      `--b: ${cell.bg};`,
    ];

    return styles.join(" ");
  }

  updateCell(e) {
    this.log("createCells(): updating cell", e);

    let currentCell = e.target;

    let newStyles = {
      col: this.cells[currentCell.dataset.idx].col,
      row: this.cells[currentCell.dataset.idx].row,

      asset: "/assets/arrow.svg",
      deg: 90 * Math.floor(Math.random() * 10),
      bg: randomColor(),
    };

    this.dom.wrapper.current.setAttribute(
      "style",
      `background-color: ${randomColor()}`
    );

    currentCell.setAttribute("style", this.generateStyles(newStyles));
  }

  createCells() {
    this.log("createCells(): adding cells", this.dom.grid);

    this.cells.forEach((cell, idx) => {
      let cellElement = document.createElement("div");
      cellElement.classList.add("c");
      cellElement.setAttribute("style", this.generateStyles(cell));
      cellElement.setAttribute("data-idx", idx);
      cellElement.addEventListener("mouseover", this.updateCell.bind(this));
      cellElement.addEventListener("click", this.updateCell.bind(this));

      this.dom.grid.current.appendChild(cellElement);
    });
  }

  addBrandmark() {
    this.log("addBrandmark(): adding brandmark", this.dom.brandmark);

    let img = document.createElement("img");
    img.setAttribute("src", "/assets/logomark.svg");

    this.dom.brandmark.current.appendChild(img);
  }

  updateMonochrome(is) {
    let modifier = "--mc";

    if (is == true) {
      document.body.classList.add(modifier);
    } else {
      document.body.classList.remove(modifier);
    }
  }

  updateInvert(is) {
    let modifier = "--inv";

    if (is == true) {
      document.body.classList.add(modifier);
    } else {
      document.body.classList.remove(modifier);
    }
  }

  updateTimer(is) {
    let modifier = "--ap";

    if (is == true) {
      document.body.classList.add(modifier);

      this.startTimer();
    } else {
      document.body.classList.remove(modifier);
    }
  }

  checkModes() {
    if (this.mode.monochrome) {
      this.updateMonochrome(true);
    } else {
      this.updateMonochrome(false);
    }

    if (this.mode.invert) {
      this.updateInvert(true);
    } else {
      this.updateInvert(false);
    }

    if (this.mode.autoplay) {
      this.updateTimer(true);
    } else {
      this.updateTimer(false);
    }
  }

  handleModeToggle(e) {
    this.log("handleModeToggle(): fired", e);

    e.preventDefault();

    let modeKey = e.target.dataset.hmModeToggle;

    if (this.mode[modeKey]) {
      this.log(
        `handleModeToggle(): this.mode[${modeKey}] toggle from`,
        this.mode[modeKey]
      );

      this.mode[modeKey] = false;
      this.checkModes();

      this.log(
        `handleModeToggle(): this.mode[${modeKey}] toggle to`,
        this.mode[modeKey]
      );
    } else {
      this.log(
        `handleModeToggle(): this.mode[${modeKey}] toggle from`,
        this.mode[modeKey]
      );

      this.mode[modeKey] = true;
      this.checkModes();

      this.log(
        `handleModeToggle(): this.mode[${modeKey}] toggle to`,
        this.mode[modeKey]
      );
    }
  }

  createDOM() {
    this.log("createDOM(): creating dom");

    const brandmark = document.querySelector(this.dom.brandmark.key);
    const grid = document.querySelector(this.dom.grid.key);
    const wrapper = document.querySelector(this.dom.wrapper.key);
    const toggles = document.querySelectorAll(this.dom.toggles.key);

    if (brandmark) {
      this.log("createDOM(): added brandmark", brandmark);

      this.dom.brandmark.current = brandmark;
      this.addBrandmark();
    }

    if (grid) {
      this.log("createDOM(): added grid", grid);

      this.dom.grid.current = grid;
      this.createCells();

      grid.addEventListener("mouseenter", this.handleGridEnter.bind(this));
      grid.addEventListener("mouseleave", this.handleGridExit.bind(this));
    }

    if (wrapper) {
      this.log("createDOM(): added wrapper", wrapper);

      this.dom.wrapper.current = wrapper;
    }

    if (toggles) {
      toggles.forEach((toggle) => {
        toggle.addEventListener("click", this.handleModeToggle.bind(this));
      });
    }

    this.checkModes();
  }

  handleGridEnter() {
    this.gridHovered = true;
  }

  handleGridExit() {
    this.gridHovered = false;

    if (this.mode.autoplay) {
      this.startTimer();
    }
  }

  updateRandomCell() {
    if (this.mode.autoplay && !this.gridHovered) {
      const randomQuery = `[data-idx="${Math.floor(Math.random() * 9)}"]`;
      let randomCell = document.querySelector(randomQuery);

      this.log(`updateRandomCell(): selected cell ${randomQuery}`, randomCell);
      this.updateCell({ target: randomCell });

      this.startTimer();
    }
  }

  startTimer() {
    this.log("startTimer(): fired");

    if (this.mode.autoplay && !this.gridHovered) {
      this.log("startTimer(): timer started");

      setTimeout(this.updateRandomCell.bind(this), 3000);
    }
  }

  log(msg, extras = " ", isError = false) {
    if (!this.DEBUG_VERBOSE) return;

    if (!isError) {
      console.log(msg, extras);
    } else {
      console.error(msg, extras);
    }
  }

  init() {
    this.log("init(): initialized");

    this.createDOM();
  }
}

let init = new c1();
