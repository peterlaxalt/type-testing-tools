class HeadMaze {
  constructor() {
    this.dom = {
      nav: {
        key: "hm-n",
        current: null,
      },
    };

    this.pages = [
      {
        name: "01",
        href: "/index.html",
      },
      {
        name: "02",
        href: "/c2.html",
      },
      {
        name: "03",
        href: "/c3.html",
      },
    ];

    this.DEBUG_VERBOSE = true;

    this.init();
  }

  log(msg, extras = " ", isError = false) {
    if (!this.DEBUG_VERBOSE) return;

    if (!isError) {
      console.log(msg, extras);
    } else {
      console.error(msg, extras);
    }
  }

  createNavigation() {
    this.log("HeadMaze.createNavigation(): adding nav");

    let navWrapper = document.createElement("nav");
    navWrapper.classList.add(this.dom.nav.key);

    let navList = document.createElement("ul");
    navWrapper.appendChild(navList);

    function createNavItem(item) {
      let navItem = document.createElement("li");
      let navLink = document.createElement("a");

      navLink.innerHTML = item.name;
      navLink.setAttribute("href", item.href);

      if (window.location.pathname.includes(item.href)) {
        navItem.classList.add("--a");
      } else {
        if (window.location.pathname == "/" && item.href == "/index.html") {
          navItem.classList.add("--a");
        }
      }

      navItem.appendChild(navLink);
      navList.appendChild(navItem);
    }

    this.pages.forEach((page) => {
      createNavItem(page);
    });

    document.body.appendChild(navWrapper);

    this.dom.nav.current = navWrapper;
  }

  createDOM() {
    this.log("HeadMaze.createDOM(): fired");

    this.createNavigation();
  }

  init() {
    this.log("HeadMaze.init(): initialized");

    this.createDOM();
  }
}

let init = new HeadMaze();
