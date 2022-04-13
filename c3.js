class c3 {
  constructor() {
    this.dom = {
      wrapper: {
        key: "[data-hm-dot-grid]",
        current: null,
      },
      cursor: {
        key: "hm-cx",
        current: null,
      },
    };

    this.mode = {
      monochrome: false,
      invert: false,
      autoplay: true,
    };

    this.controls = {
      grid: {
        rows: 48,
        cols: 48,

        width: window.innerWidth,
        height: window.innerWidth,
      },
      cells: {
        activeClass: "--a",
        radius: 2,
        gradient: {
          type: "conic",
          active: true,
        },
        rotation: {
          animate: true,
          amount: 0,
          speed: 20,
        },
        blur: 0,
        gap: 0,
        contrast: 1,
      },
    };

    // this.activeCoords = [{ x: 0, y: 0 }];

    this.activeCoords = [
      {
        x: 4,
        y: 20,
        id: "x4-y20",
      },
      {
        x: 4,
        y: 21,
        id: "x4-y21",
      },
      {
        x: 4,
        y: 22,
        id: "x4-y22",
      },
      {
        x: 4,
        y: 23,
        id: "x4-y23",
      },
      {
        x: 4,
        y: 24,
        id: "x4-y24",
      },
      {
        x: 4,
        y: 25,
        id: "x4-y25",
      },
      {
        x: 4,
        y: 26,
        id: "x4-y26",
      },
      {
        x: 4,
        y: 27,
        id: "x4-y27",
      },
      {
        x: 4,
        y: 28,
        id: "x4-y28",
      },
      {
        x: 5,
        y: 24,
        id: "x5-y24",
      },
      {
        x: 6,
        y: 24,
        id: "x6-y24",
      },
      {
        x: 7,
        y: 28,
        id: "x7-y28",
      },
      {
        x: 7,
        y: 27,
        id: "x7-y27",
      },
      {
        x: 7,
        y: 26,
        id: "x7-y26",
      },
      {
        x: 7,
        y: 25,
        id: "x7-y25",
      },
      {
        x: 7,
        y: 24,
        id: "x7-y24",
      },
      {
        x: 7,
        y: 23,
        id: "x7-y23",
      },
      {
        x: 7,
        y: 22,
        id: "x7-y22",
      },
      {
        x: 7,
        y: 21,
        id: "x7-y21",
      },
      {
        x: 7,
        y: 20,
        id: "x7-y20",
      },
      {
        x: 9,
        y: 21,
        id: "x9-y21",
      },
      {
        x: 9,
        y: 22,
        id: "x9-y22",
      },
      {
        x: 9,
        y: 23,
        id: "x9-y23",
      },
      {
        x: 9,
        y: 24,
        id: "x9-y24",
      },
      {
        x: 9,
        y: 25,
        id: "x9-y25",
      },
      {
        x: 9,
        y: 26,
        id: "x9-y26",
      },
      {
        x: 9,
        y: 27,
        id: "x9-y27",
      },
      {
        x: 10,
        y: 28,
        id: "x10-y28",
      },
      {
        x: 11,
        y: 28,
        id: "x11-y28",
      },
      {
        x: 12,
        y: 28,
        id: "x12-y28",
      },
      {
        x: 10,
        y: 24,
        id: "x10-y24",
      },
      {
        x: 11,
        y: 24,
        id: "x11-y24",
      },
      {
        x: 12,
        y: 24,
        id: "x12-y24",
      },
      {
        x: 10,
        y: 20,
        id: "x10-y20",
      },
      {
        x: 11,
        y: 20,
        id: "x11-y20",
      },
      {
        x: 12,
        y: 20,
        id: "x12-y20",
      },
      {
        x: 14,
        y: 28,
        id: "x14-y28",
      },
      {
        x: 14,
        y: 27,
        id: "x14-y27",
      },
      {
        x: 14,
        y: 26,
        id: "x14-y26",
      },
      {
        x: 14,
        y: 25,
        id: "x14-y25",
      },
      {
        x: 14,
        y: 24,
        id: "x14-y24",
      },
      {
        x: 14,
        y: 23,
        id: "x14-y23",
      },
      {
        x: 14,
        y: 22,
        id: "x14-y22",
      },
      {
        x: 14,
        y: 21,
        id: "x14-y21",
      },
      {
        x: 15,
        y: 20,
        id: "x15-y20",
      },
      {
        x: 16,
        y: 20,
        id: "x16-y20",
      },
      {
        x: 17,
        y: 21,
        id: "x17-y21",
      },
      {
        x: 17,
        y: 22,
        id: "x17-y22",
      },
      {
        x: 17,
        y: 23,
        id: "x17-y23",
      },
      {
        x: 17,
        y: 24,
        id: "x17-y24",
      },
      {
        x: 17,
        y: 25,
        id: "x17-y25",
      },
      {
        x: 17,
        y: 26,
        id: "x17-y26",
      },
      {
        x: 17,
        y: 27,
        id: "x17-y27",
      },
      {
        x: 17,
        y: 28,
        id: "x17-y28",
      },
      {
        x: 15,
        y: 24,
        id: "x15-y24",
      },
      {
        x: 16,
        y: 24,
        id: "x16-y24",
      },
      {
        x: 19,
        y: 28,
        id: "x19-y28",
      },
      {
        x: 19,
        y: 27,
        id: "x19-y27",
      },
      {
        x: 19,
        y: 26,
        id: "x19-y26",
      },
      {
        x: 19,
        y: 25,
        id: "x19-y25",
      },
      {
        x: 19,
        y: 24,
        id: "x19-y24",
      },
      {
        x: 19,
        y: 23,
        id: "x19-y23",
      },
      {
        x: 19,
        y: 22,
        id: "x19-y22",
      },
      {
        x: 19,
        y: 21,
        id: "x19-y21",
      },
      {
        x: 19,
        y: 20,
        id: "x19-y20",
      },
      {
        x: 20,
        y: 20,
        id: "x20-y20",
      },
      {
        x: 21,
        y: 20,
        id: "x21-y20",
      },
      {
        x: 22,
        y: 21,
        id: "x22-y21",
      },
      {
        x: 22,
        y: 22,
        id: "x22-y22",
      },
      {
        x: 22,
        y: 23,
        id: "x22-y23",
      },
      {
        x: 22,
        y: 24,
        id: "x22-y24",
      },
      {
        x: 22,
        y: 25,
        id: "x22-y25",
      },
      {
        x: 22,
        y: 26,
        id: "x22-y26",
      },
      {
        x: 22,
        y: 27,
        id: "x22-y27",
      },
      {
        x: 21,
        y: 28,
        id: "x21-y28",
      },
      {
        x: 20,
        y: 28,
        id: "x20-y28",
      },
      {
        x: 24,
        y: 28,
        id: "x24-y28",
      },
      {
        x: 24,
        y: 27,
        id: "x24-y27",
      },
      {
        x: 24,
        y: 26,
        id: "x24-y26",
      },
      {
        x: 24,
        y: 25,
        id: "x24-y25",
      },
      {
        x: 24,
        y: 24,
        id: "x24-y24",
      },
      {
        x: 24,
        y: 23,
        id: "x24-y23",
      },
      {
        x: 24,
        y: 22,
        id: "x24-y22",
      },
      {
        x: 24,
        y: 21,
        id: "x24-y21",
      },
      {
        x: 25,
        y: 20,
        id: "x25-y20",
      },
      {
        x: 26,
        y: 20,
        id: "x26-y20",
      },
      {
        x: 27,
        y: 21,
        id: "x27-y21",
      },
      {
        x: 27,
        y: 22,
        id: "x27-y22",
      },
      {
        x: 27,
        y: 23,
        id: "x27-y23",
      },
      {
        x: 27,
        y: 24,
        id: "x27-y24",
      },
      {
        x: 27,
        y: 25,
        id: "x27-y25",
      },
      {
        x: 27,
        y: 26,
        id: "x27-y26",
      },
      {
        x: 27,
        y: 27,
        id: "x27-y27",
      },
      {
        x: 27,
        y: 28,
        id: "x27-y28",
      },
      {
        x: 28,
        y: 20,
        id: "x28-y20",
      },
      {
        x: 29,
        y: 20,
        id: "x29-y20",
      },
      {
        x: 30,
        y: 21,
        id: "x30-y21",
      },
      {
        x: 30,
        y: 22,
        id: "x30-y22",
      },
      {
        x: 30,
        y: 23,
        id: "x30-y23",
      },
      {
        x: 30,
        y: 24,
        id: "x30-y24",
      },
      {
        x: 30,
        y: 27,
        id: "x30-y27",
      },
      {
        x: 30,
        y: 28,
        id: "x30-y28",
      },
      {
        x: 30,
        y: 26,
        id: "x30-y26",
      },
      {
        x: 30,
        y: 25,
        id: "x30-y25",
      },
      {
        x: 32,
        y: 28,
        id: "x32-y28",
      },
      {
        x: 32,
        y: 27,
        id: "x32-y27",
      },
      {
        x: 32,
        y: 26,
        id: "x32-y26",
      },
      {
        x: 32,
        y: 25,
        id: "x32-y25",
      },
      {
        x: 32,
        y: 24,
        id: "x32-y24",
      },
      {
        x: 32,
        y: 23,
        id: "x32-y23",
      },
      {
        x: 32,
        y: 22,
        id: "x32-y22",
      },
      {
        x: 32,
        y: 21,
        id: "x32-y21",
      },
      {
        x: 33,
        y: 20,
        id: "x33-y20",
      },
      {
        x: 34,
        y: 20,
        id: "x34-y20",
      },
      {
        x: 35,
        y: 21,
        id: "x35-y21",
      },
      {
        x: 35,
        y: 22,
        id: "x35-y22",
      },
      {
        x: 35,
        y: 23,
        id: "x35-y23",
      },
      {
        x: 35,
        y: 24,
        id: "x35-y24",
      },
      {
        x: 35,
        y: 25,
        id: "x35-y25",
      },
      {
        x: 35,
        y: 26,
        id: "x35-y26",
      },
      {
        x: 35,
        y: 27,
        id: "x35-y27",
      },
      {
        x: 35,
        y: 28,
        id: "x35-y28",
      },
      {
        x: 33,
        y: 24,
        id: "x33-y24",
      },
      {
        x: 34,
        y: 24,
        id: "x34-y24",
      },
      {
        x: 37,
        y: 20,
        id: "x37-y20",
      },
      {
        x: 38,
        y: 20,
        id: "x38-y20",
      },
      {
        x: 39,
        y: 20,
        id: "x39-y20",
      },
      {
        x: 40,
        y: 21,
        id: "x40-y21",
      },
      {
        x: 40,
        y: 22,
        id: "x40-y22",
      },
      {
        x: 40,
        y: 23,
        id: "x40-y23",
      },
      {
        x: 39,
        y: 24,
        id: "x39-y24",
      },
      {
        x: 38,
        y: 24,
        id: "x38-y24",
      },
      {
        x: 37,
        y: 25,
        id: "x37-y25",
      },
      {
        x: 37,
        y: 26,
        id: "x37-y26",
      },
      {
        x: 37,
        y: 27,
        id: "x37-y27",
      },
      {
        x: 38,
        y: 28,
        id: "x38-y28",
      },
      {
        x: 39,
        y: 28,
        id: "x39-y28",
      },
      {
        x: 40,
        y: 28,
        id: "x40-y28",
      },
      {
        x: 42,
        y: 27,
        id: "x42-y27",
      },
      {
        x: 42,
        y: 26,
        id: "x42-y26",
      },
      {
        x: 42,
        y: 25,
        id: "x42-y25",
      },
      {
        x: 42,
        y: 24,
        id: "x42-y24",
      },
      {
        x: 42,
        y: 23,
        id: "x42-y23",
      },
      {
        x: 42,
        y: 22,
        id: "x42-y22",
      },
      {
        x: 42,
        y: 21,
        id: "x42-y21",
      },
      {
        x: 43,
        y: 20,
        id: "x43-y20",
      },
      {
        x: 44,
        y: 20,
        id: "x44-y20",
      },
      {
        x: 45,
        y: 20,
        id: "x45-y20",
      },
      {
        x: 43,
        y: 24,
        id: "x43-y24",
      },
      {
        x: 44,
        y: 24,
        id: "x44-y24",
      },
      {
        x: 45,
        y: 24,
        id: "x45-y24",
      },
      {
        x: 43,
        y: 28,
        id: "x43-y28",
      },
      {
        x: 44,
        y: 28,
        id: "x44-y28",
      },
      {
        x: 45,
        y: 28,
        id: "x45-y28",
      },
    ];

    this.DEBUG_VERBOSE = true;

    this.init();
  }

  getGridStylesFromControls() {
    this.log("getGridStylesFromControls(): generating styles");

    let controls = this.controls;

    let gridRows = controls.grid.rows;
    let gridCols = controls.grid.cols;

    let gridWidth = controls.grid.width;
    let gridHeight = controls.grid.height;

    let gridGap = controls.cells.gap;
    let gridRadius = controls.cells.radius;

    let gridCellRotation = controls.cells.rotation.amount;
    let gridCellRotationSpeed = controls.cells.rotation.speed;

    let styles = [
      `--rows: ${gridRows}`,
      `--cols: ${gridCols}`,
      `--g: ${gridGap}px`,
      `--r: ${gridRadius}px`,
      `--deg: ${gridCellRotation}deg`,
      `--rS: ${gridCellRotationSpeed}s`,
      `--w: ${gridWidth}px`,
      `--h: ${gridHeight}px`,
    ];

    return styles.join(";");
  }

  getCoordsFromClick(el) {
    this.log(`getCoordsFromClick(el): fired`, el);
    this.log(`getCoordsFromClick(el): col`, el.getAttribute("hm-col"));
    this.log(`getCoordsFromClick(el): row`, el.getAttribute("hm-row"));

    return {
      x: parseInt(el.getAttribute("hm-col")),
      y: parseInt(el.getAttribute("hm-row")),
      id: el.getAttribute("hm-id"),
    };
  }

  createCoordId(x, y) {
    return `x${x}-y${y}`;
  }

  storeCoords(coords, remove = false) {
    this.log(`storeCoords(coords): fired`, coords);
    this.log(`storeCoords(): current coords stored`, this.activeCoords);

    if (!remove) {
      this.activeCoords.push(coords);

      this.log(
        `storeCoords(coords): activeCoords Updated [added]`,
        this.activeCoords
      );
    } else {
      function checkCoordRemoveOrNot(store) {
        return store.id !== coords.id;
      }

      let filteredCoords = this.activeCoords.filter((storedCoords) =>
        checkCoordRemoveOrNot(storedCoords)
      );

      this.activeCoords = filteredCoords;

      this.log(
        `storeCoords(coords): activeCoords Updated [removed]`,
        filteredCoords
      );
    }
  }

  handleCellClick(e) {
    this.log(`handleCellClick(e): fired`, e);

    let coords = this.getCoordsFromClick(e.target);

    if (e.target.classList.contains(this.controls.cells.activeClass)) {
      e.target.classList.remove(this.controls.cells.activeClass);

      this.storeCoords(coords, true);
    } else {
      e.target.classList.add(this.controls.cells.activeClass);

      this.storeCoords(coords);
    }
  }

  createGridCell(x, y, active) {
    // this.log(`createGridCell(x: ${x}, y: ${y}, active: ${active}): creating grid cell`);

    let cell = document.createElement("button");
    let styles = [`--cX: ${x}`, `--cY: ${y}`];

    cell.setAttribute("hm-col", x);
    cell.setAttribute("hm-row", y);
    cell.setAttribute("hm-id", this.createCoordId(x, y));

    if (active) {
      cell.classList.add(this.controls.cells.activeClass);
    }

    cell.addEventListener("click", this.handleCellClick.bind(this));
    cell.setAttribute("style", styles.join(";"));

    return cell;
  }

  updateGridClasses() {
    let controls = this.controls;
    let grid = this.dom.wrapper.current;

    let gridCellRotation = controls.cells.rotation.animate;
    let gridCellGradient = controls.cells.gradient.type;

    if (gridCellRotation) {
      grid.classList.add("--rotate");
    }

    if (gridCellGradient) {
      grid.classList.add(`--gr-${gridCellGradient}`);
    }
  }

  createInitialActiveCells() {
    this.log("setupGrid(): setting up initial active cells");

    if (this.activeCoords) {
      this.activeCoords.forEach((cell) => {
        let cellNode = document.querySelector(`[hm-id="${cell.id}"]`);

        cellNode.classList.add('--a');
      })
    }
  }

  setupGrid() {
    this.log("setupGrid(): setting up grid");

    let grid = this.dom.wrapper.current;
    let controls = this.controls;

    let rows = controls.grid.rows;
    let cols = controls.grid.cols; 

    let rowsArray = [...Array(rows + 1).keys()].slice(1);
    let colsArray = [...Array(cols + 1).keys()].slice(1);

    let _self = this;

    let styles = this.getGridStylesFromControls();

    grid.setAttribute("style", styles);

    let cells = [];

    rowsArray.map((row, rIdx) => {
      colsArray.map((col, cIdx) => {
        cells.push(_self.createGridCell(cIdx + 1, rIdx + 1, false));
      });
    });

    cells.forEach((cell) => {
      grid.appendChild(cell);
    });

    this.createInitialActiveCells();

    this.updateGridClasses();
  }

  createGrid() {
    this.log("createGrid(): creating grid");

    let dotGrid = document.querySelector(this.dom.wrapper.key);

    if (dotGrid) {
      this.dom.wrapper.current = dotGrid;

      this.setupGrid();
    }
  }

  createDOM() {
    this.log("createDOM(): creating dom");

    this.createGrid();
  }

  log(msg, extras = " ", isError = false) {
    if (!this.DEBUG_VERBOSE) return;

    if (!isError) {
      console.log("c3 ~ " + msg, extras);
    } else {
      console.error("c3 ~ " + msg, extras);
    }
  }

  init() {
    this.log("init(): initialized");

    this.createDOM();
  }
}

let init = new c3();
