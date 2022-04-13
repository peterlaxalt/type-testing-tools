class c2 {
  constructor() {
    this.dom = {
      wrapper: {
        key: "[data-hm-w]",
        current: null,
      },
      cursor: {
        key: "hm-cx",
        current: null
      }
    };

    this.mode = {
      monochrome: false,
      invert: false,
      autoplay: true,
    };

    this.cursorConfig = {
      blueClass: "--clr-b",
      redClass: "--clr-r",

      width: window.innerHeight * .75,
      height: window.innerHeight * .75
    }

    this.mouseHasMovedOnce = false;

    this.DEBUG_VERBOSE = true;

    this.init();
  }


  generateBodyFilter() {
    let hueRotate = Math.random() * 1000;
    let contrast = Math.floor(Math.random() * (2 - 1) ) + 1;
    let invert = Math.random() > .5 ? 1 : 0;

    let filterCss = `hue-rotate(${hueRotate}deg) contrast(${contrast}) invert(${invert})`;

    document.body.setAttribute("style", `filter: ${filterCss};`);
  }

  handleCursorClick() {
    this.log("handleCursorClick(): fired");

    let cursor = this.dom.cursor.current;

    let { blueClass, redClass } = this.cursorConfig;

    if (cursor.classList.contains(blueClass)) {
      cursor.classList.remove(blueClass);
      cursor.classList.add(redClass);
    } else {
      cursor.classList.remove(redClass);
      cursor.classList.add(blueClass);
    }

    this.generateBodyFilter();
  }

  prependCursorStyleStr(str) {
    let cursorWidth = this.cursorConfig.width + 'px';
    let cursorHeight = this.cursorConfig.height + 'px';

    let prepend = `width: ${cursorWidth}; height: ${cursorHeight}; `;

    return prepend + str;
  }

  handleCursorMove(e) {
    this.log("handleCursorMove(): fired", e);

    let cursor = this.dom.cursor.current;
    let cW = this.cursorConfig.width;
    let cH = this.cursorConfig.height;

    let cX = e.clientX;
    let cY = e.clientY;

    let finalX = cX - (cW / 2);
    let finalY = cY - (cH / 2);

    if (!this.mouseHasMovedOnce && !cursor.classList.contains('--a')) {
      cursor.classList.add('--a');
    }

    let styleStr = `transform: translate(${finalX}px, ${finalY}px)`;

    cursor.setAttribute('style', this.prependCursorStyleStr(styleStr));
  }

  createCursor() {

    function updateCursor() {
      this.log("createCursor(): creating cursor");
  
      let cursor = document.createElement("span");
      cursor.classList.add(this.dom.cursor.key);
  
      let isBlueClass = Math.random() < 0.5;
  
      if (isBlueClass) {
        cursor.classList.add(this.cursorConfig.blueClass);
      } else {
        cursor.classList.add(this.cursorConfig.redClass);
      }
  
      cursor.setAttribute('style', this.prependCursorStyleStr(''));
  
      document.body.addEventListener("click", this.handleCursorClick.bind(this));
      document.body.addEventListener("mousemove", this.handleCursorMove.bind(this));
  
      document.body.appendChild(cursor);
      this.dom.cursor.current = cursor;
    }

    requestAnimationFrame(updateCursor.bind(this));
  }


  createDOM() {
    this.log("createDOM(): creating dom");

    this.createCursor();
  }

  log(msg, extras = " ", isError = false) {
    if (!this.DEBUG_VERBOSE) return;

    if (!isError) {
      console.log("c2 ~ " + msg, extras);
    } else {
      console.error("c2 ~ " + msg, extras);
    }
  }

  init() {
    this.log("init(): initialized");

    this.createDOM();
  }
}

let init = new c2();
