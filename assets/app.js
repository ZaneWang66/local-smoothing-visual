/* ============================================================
   Visual Paper · 应用逻辑（Cytoscape + KaTeX，原生 JS）
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- 基础映射 ---------------- */
  const resultById = Object.create(null);
  VP.results.forEach(r => { resultById[r.id] = r; });
  const sectionById = Object.create(null);
  VP.sections.forEach(s => { sectionById[s.id] = s; });

  const depsOf = {}, usedByOf = {};
  VP.results.forEach(r => { depsOf[r.id] = []; usedByOf[r.id] = []; });
  VP.edges.forEach(([from, to]) => {
    usedByOf[from].push(to);
    depsOf[to].push(from);
  });

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ---------------- 主题 ---------------- */
  const root = document.documentElement;
  const urlTheme = new URLSearchParams(location.search).get("theme");
  if (urlTheme === "dark" || urlTheme === "light") {
    root.setAttribute("data-theme", urlTheme);
  } else {
    try {
      const saved = localStorage.getItem("vp-theme");
      if (saved) root.setAttribute("data-theme", saved);
    } catch (e) {}
  }
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", cur);
    try { localStorage.setItem("vp-theme", cur); } catch (e) {}
    colorGraph();
  });

  /* ---------------- 富文本 → KaTeX ---------------- */
  function renderKatex(container, tex, display) {
    try {
      katex.render(tex, container, {
        displayMode: display, throwOnError: false,
        strict: "ignore", trust: false, output: "htmlAndMathml"
      });
    } catch (e) {
      container.textContent = tex;
    }
  }

  // 处理 \[...\] 显示公式与 $...$ 行内公式
  function rich(el, str) {
    el.innerHTML = "";
    const re = /\\\[([\s\S]+?)\\\]|\$([^$]+?)\$/g;
    let last = 0, m;
    while ((m = re.exec(str)) !== null) {
      if (m.index > last) el.appendChild(document.createTextNode(str.slice(last, m.index)));
      if (m[1] !== undefined) {
        const box = document.createElement("div");
        renderKatex(box, m[1], true);
        el.appendChild(box);
      } else {
        const span = document.createElement("span");
        renderKatex(span, m[2], false);
        el.appendChild(span);
      }
      last = re.lastIndex;
    }
    if (last < str.length) el.appendChild(document.createTextNode(str.slice(last)));
  }

  /* ============================================================
     Cytoscape 图
     ============================================================ */
  if (window.cytoscape && window.cytoscapeDagre) cytoscape.use(cytoscapeDagre);

  const mainIds = new Set(["t11", "t12"]);
  const expanded = new Set();
  const mobile = matchMedia("(max-width: 860px)");
  let mode = "map";
  let selected = null;
  let hopCount = 1;

  function graphElements() {
    let keep;
    if (mode === "essentials") keep = new Set(VP.spine);
    if (mode === "focus" && selected) {
      keep = new Set([selected]);
      for (let hop = 0; hop < hopCount; hop++) {
        Array.from(keep).forEach(id => {
          for (const next of [...depsOf[id], ...usedByOf[id]]) keep.add(next);
        });
      }
    }
    const elements = [];
    const representative = new Map();
    if (mode === "map") {
      for (const section of VP.sections) {
        if (section.id === "s1") continue;
        elements.push({data:{
          id:section.id, type:"section", directions:section.directions,
          label:"§ " + section.number + "\n" + section.short
        }});
      }
    }
    for (const result of VP.results) {
      if (keep && !keep.has(result.id)) continue;
      const inSection = mode === "map" && !mainIds.has(result.id);
      if (inSection && !expanded.has(result.parent)) {
        representative.set(result.id, result.parent);
        continue;
      }
      const title = result.title.length > 12 ? result.title.slice(0,11) + "…" : result.title;
      elements.push({data:{
        id:result.id, parent:inSection ? result.parent : undefined, type:"result",
        directions:result.directions, label:result.number + "  " + title
      }});
      representative.set(result.id, result.id);
    }
    const seen = new Set();
    for (const [from,to] of VP.edges) {
      const source = representative.get(from), target = representative.get(to);
      if (!source || !target || source === target) continue;
      const id = source + "-" + target;
      if (seen.has(id)) continue;
      seen.add(id);
      elements.push({data:{id:"e:" + id, source, target}});
    }
    return elements;
  }

  function directionColor(direction, suffix = "") {
    return cssVar("--direction-" + direction + suffix);
  }

  const cy = cytoscape({
    container: document.getElementById("cy"),
    elements: [],
    minZoom: 0.15, maxZoom: 4,
    style: [
      {
        selector: "node[type='section']",
        style: {
          shape: "round-rectangle",
          "background-color": cssVar("--surface-2"),
          "border-color": cssVar("--border"), "border-width": 1.4,
          label: "data(label)",
          "text-valign": "center", "text-halign": "center",
          "font-family": cssVar("--font-ui"), "font-size": 13, "font-weight": 600,
          color: cssVar("--text-dim"),
          "text-wrap": "wrap", "text-max-width": 150,
          width: 156, height: 56, padding: 10
        }
      },
      { selector: ":parent", style: { "text-valign": "top", "text-margin-y": -5, padding: 18 } },
      {
        selector: "node[type='result']",
        style: {
          shape: "round-rectangle",
          "background-color": cssVar("--surface-3"),
          "border-width": 1.6,
          label: "data(label)",
          "text-wrap": "wrap", "text-max-width": 150,
          "font-family": cssVar("--font-ui"), "font-size": 14, "font-weight": 600,
          "text-valign": "center", "text-halign": "center",
          width: 158, height: 52,
          "text-justification": "center"
        }
      },
      {
        selector: "edge",
        style: {
          "curve-style": "bezier", "target-arrow-shape": "triangle",
          "arrow-scale": 1.1,
          "line-color": cssVar("--edge"), "target-arrow-color": cssVar("--edge"),
          width: 1.4
        }
      },
      {
        selector: "node.selected",
        style: {
          "border-width": 3,
          "background-blacken": 0
        }
      },
      {
        selector: "edge.hi",
        style: {
          "line-color": cssVar("--edge-hi"),
          "target-arrow-color": cssVar("--edge-hi"), width: 2.4
        }
      },
      { selector: ".dim", style: { opacity: 0.16 } },
      { selector: "edge.dim", style: { opacity: 0.12 } }
    ]
  });

  const graph = document.getElementById("cy");
  const outline = document.getElementById("outline");
  const outlineToggle = document.getElementById("outline-toggle");
  const back = document.getElementById("history-back");
  const forward = document.getElementById("history-forward");
  const wholeMap = document.getElementById("whole-map");
  const essential = document.getElementById("view-essentials");
  const complete = document.getElementById("view-everything");
  const hops = ["hops-1", "hops-2"].map(id => document.getElementById(id));
  const trail = [null];
  let cursor = 0;

  function colorGraph() {
    const textColor = cssVar("--text");
    const palette = Object.fromEntries(Object.keys(VP.directions).map(direction => [
      direction, {
        ink: directionColor(direction),
        tint: directionColor(direction, "-tint"),
        line: directionColor(direction, "-line")
      }
    ]));
    cy.nodes().forEach(node => {
      const directions = Object.entries(node.data("directions"));
      const primary = palette[directions[0][0]];
      let position = 0;
      const positions = directions.flatMap(([, share]) => {
        const start = position;
        position += share;
        return [start + "%", position + "%"];
      });
      const colors = directions.flatMap(([key]) => [palette[key].tint, palette[key].tint]);
      node.style({
        "background-fill": directions.length === 1 ? "solid" : "linear-gradient",
        "background-color": primary.tint,
        "background-gradient-direction": "to-right",
        "background-gradient-stop-colors": colors.join(" "),
        "background-gradient-stop-positions": positions.join(" "),
        "border-color": primary.line,
        color: textColor,
        "underlay-color": primary.ink,
        "underlay-opacity": node.hasClass("selected") ? 0.15 : 0,
        "underlay-padding": 5
      });
    });
    const normalEdge = cssVar("--edge");
    const highlightedEdge = cssVar("--edge-hi");
    cy.edges().forEach(edge => {
      const color = edge.hasClass("hi") ? highlightedEdge : normalEdge;
      edge.style({ "line-color": color, "target-arrow-color": color });
    });
  }

  function highlight(id) {
    cy.elements().removeClass("dim selected hi");
    const node = cy.getElementById(id || "");
    if (node.length) {
      node.addClass("selected");
      const incident = node.connectedEdges().addClass("hi");
      if (mode !== "focus") {
        cy.nodes("node[type='result']").difference(incident.connectedNodes().union(node)).addClass("dim");
        cy.edges().difference(incident).addClass("dim");
      }
    }
    colorGraph();
  }

  function fitGraph() {
    const {width,height} = graph.getBoundingClientRect();
    if (!width || !height || !cy.nodes().length) return;
    cy.resize();
    const box = cy.elements().boundingBox();
    const top = document.querySelector(".graph-toolbar").offsetHeight + 20;
    const space = Math.max(70, height-top-48);
    const zoom = Math.max(cy.minZoom(), Math.min(1.35, (width-46)/box.w, space/box.h));
    cy.viewport({zoom, pan:{
      x:width/2-zoom*(box.x1+box.x2)/2, y:top+space/2-zoom*(box.y1+box.y2)/2
    }});
  }

  function setOutlineOpen(open) {
    outline.hidden = !open;
    graph.hidden = open;
    document.querySelector(".graph-zoom").hidden = open;
    document.querySelector(".graph-legend").hidden = open;
    outlineToggle.setAttribute("aria-pressed", open);
    wholeMap.setAttribute("aria-pressed", !open && mode === "map");
    essential.setAttribute("aria-pressed", !open && mode === "essentials");
    complete.setAttribute("aria-pressed", !open && mode === "all");
    hops.forEach((button,index) => {
      button.disabled = !selected;
      button.setAttribute("aria-pressed", !open && mode === "focus" && hopCount === index+1);
    });
  }

  function drawGraph() {
    setOutlineOpen(false);
    cy.batch(() => {
      cy.elements().remove();
      cy.add(graphElements());
    });
    cy.layout({
      name:"dagre", rankDir:mode === "map" ? "TB" : "LR",
      nodeSep:32, rankSep:mode === "map" ? 36 : 52, fit:false, animate:false
    }).run();
    highlight(selected);
    fitGraph();
  }

  function pane(name) {
    document.body.dataset.pane = name;
    document.querySelectorAll(".tabbar__btn").forEach(button => {
      button.classList.toggle("is-active", button.dataset.pane === name);
      button.setAttribute("aria-pressed", button.dataset.pane === name);
    });
    if (name === "graph") requestAnimationFrame(fitGraph);
  }

  function navigate(id) {
    if (id !== trail[cursor]) {
      trail.splice(cursor+1);
      trail.push(id);
      cursor += 1;
    }
    showRoute(id);
  }

  function showRoute(id) {
    selected = resultById[id] ? id : null;
    if (selected) {
      mode = "focus";
      renderResult(id);
      if (mobile.matches) pane("panel");
    } else if (sectionById[id]) {
      mode = "map";
      expanded.add(id);
      renderSection(sectionById[id]);
    } else {
      mode = "map";
      expanded.clear();
      renderWelcome();
    }
    const hash = id ? "#/" + id : "#/";
    if (location.hash !== hash) history.replaceState(null,"",hash);
    back.disabled = cursor === 0;
    forward.disabled = cursor === trail.length-1;
    panelContent.scrollTop = 0;
    drawGraph();
  }

  function followHash() {
    const id = /^#\/([a-z0-9]+)(?:\/L3)?$/i.exec(location.hash)?.[1];
    navigate(resultById[id] || sectionById[id] ? id : null);
  }

  function zoomBy(factor) {
    cy.zoom({level:cy.zoom()*factor,renderedPosition:{x:cy.width()/2,y:cy.height()/2}});
  }

  cy.on("tap", "node[type='section']", ({target}) => {
    const id = target.id();
    if (expanded.delete(id)) drawGraph();
    else navigate(id);
  });
  cy.on("tap", "node[type='result']", ({target}) => navigate(target.id()));
  cy.on("mouseover", "node[type='result']", ({target}) => highlight(target.id()));
  cy.on("mouseout", "node[type='result']", () => highlight(selected));

  wholeMap.onclick = () => { expanded.clear(); mode = "map"; drawGraph(); };
  essential.onclick = () => { mode = "essentials"; drawGraph(); };
  complete.onclick = () => { mode = "all"; drawGraph(); };
  hops.forEach((button,index) => { button.onclick = () => {
    if (!selected) return;
    hopCount = index+1;
    mode = "focus";
    drawGraph();
  }; });
  back.onclick = () => { if (cursor > 0) showRoute(trail[--cursor]); };
  forward.onclick = () => { if (cursor+1 < trail.length) showRoute(trail[++cursor]); };
  document.getElementById("zoom-in").onclick = () => zoomBy(1.2);
  document.getElementById("zoom-out").onclick = () => zoomBy(1/1.2);
  document.getElementById("zoom-fit").onclick = fitGraph;
  document.getElementById("zoom-selection").onclick = () => {
    const node = cy.getElementById(selected || "");
    if (node.length) cy.animate({zoom:1.3,center:{eles:node}},{duration:200});
  };
  document.getElementById("brand-home").onclick = () => {
    navigate(null);
    if (mobile.matches) pane("panel");
  };
  window.addEventListener("hashchange", followHash);
  new ResizeObserver(() => requestAnimationFrame(fitGraph)).observe(graph);

  /* ============================================================
     阅读面板渲染
     ============================================================ */
  const panelContent = document.getElementById("panel-content");
  const pageLink = page => VP.meta.sourceFile + (page ? "#page=" + page : "");

  function renderWelcome() {
    const m = VP.meta;
    const host = document.createElement("div");
    host.className = "welcome";
    host.innerHTML =
      "<h2>" + esc(m.title) + "</h2>" +
      '<p class="byline">' + esc(m.authors.join("、")) + " · " + esc(m.date) + " · 共 " + m.pages + " 页</p>" +
      '<p class="paper-original">' + esc(m.titleEn) + '</p>' +
      '<div class="abstract"></div>' +
      '<div class="rule"></div>' +
      '<div class="welcome__actions">' +
        '<button class="welcome-btn" id="start-main">从主定理 1.1 开始</button>' +
        '<button class="welcome-btn welcome-btn--ghost" id="start-critical">看临界估计 1.2</button>' +
      "</div>" +
      linkList("两个关键步骤", ["dirichlet", "n61"]) +
      '<p class="source-links"><a href="paper.pdf">原文 PDF</a><a href="proof-map.png">静态依赖图</a>' +
      '<a href="https://github.com/openai/math/blob/main/lean/docs/079.md">Lean 覆盖范围</a>' +
      '<a href="https://scottnarmstrong.github.io/hcp-visual-paper/">参考版式</a></p>';
    host.querySelector(".abstract").textContent = m.abstract;
    host.querySelector(".rule").textContent = m.rule;
    panelContent.innerHTML = "";
    panelContent.appendChild(host);
    document.getElementById("start-main").addEventListener("click", () => navigate("t11"));
    document.getElementById("start-critical").addEventListener("click", () => navigate("t12"));
  }

  function renderSection(section) {
    const ids = VP.results.filter(result => result.parent === section.id).map(result => result.id);
    panelContent.innerHTML = '<article><div class="section-label">§ ' + esc(section.number) +
      '</div><h2>' + esc(section.title) + '</h2>' + directionSummary(section) +
      (section.note ? '<div class="prose"><p>' + esc(section.note) + '</p></div>' : '') +
      '<a href="' + pageLink(section.page) +
      '">原文第 ' + section.page + ' 页</a>' + linkList("本节结果", ids) + '</article>';
  }

  function directionSummary(item) {
    return '<div class="direction-summary"><span>证明方法 · 估计占比</span>' +
      '<ul class="direction-shares">' + Object.entries(item.directions).map(([key, share]) =>
        '<li class="direction-share" data-direction="' + esc(key) + '">' +
        esc(VP.directions[key]) + ' <strong>' + share + '%</strong></li>').join("") + '</ul>' +
      (item.directionNote ? '<span>' + esc(item.directionNote) + '</span>' : '') + '</div>';
  }

  function linkList(title, ids) {
    if (!ids.length) return "";
    return (title ? '<div class="section-label">' + esc(title) + "</div>" : "") + "<nav class='uses-list'>" +
      ids.map(i =>
        '<a href="#/' + encodeURIComponent(i) + '/L3"><span class="uses-list__num">' +
        esc(resultById[i].number) + "</span>" + esc(resultById[i].title) + "</a>").join("") + "</nav>";
  }

  function renderResult(id) {
    const r = resultById[id];
    const host = document.createElement("div");

    const stepsHtml = (r.steps || []).map((s, i) =>
      '<details class="step"' + (i === 0 ? " open" : "") + '>' +
        '<summary class="step__head"><span class="step__num">步骤 ' + (i + 1) + "</span><span></span></summary>" +
        '<div class="step__body"></div></details>').join("");

    host.innerHTML =
      '<div class="node-head"><div class="node-head__eyebrow">' +
        '<span class="badge">' + kindLabel(r.kind) + "</span>" +
        '<a class="badge src" href="#/' + r.parent + '">§ ' + esc(sectionById[r.parent].number) + '</a></div>' +
        '<h2 class="node-head__title"><span class="mono">' + esc(r.number) + "</span> " + esc(r.title) + "</h2></div>" +
      directionSummary(r) +
      '<div class="section-label">陈述</div><div class="prose statement"></div>' +
      '<div class="section-label">证明思路</div><div class="prose idea"></div>' +
      ((r.steps && r.steps.length) ? '<div class="section-label">分步推导</div>' + stepsHtml : "") +
      (id === "n51" ? figureMarkup("fiber") : id === "n61" ? figureMarkup("annuli") : "") +
      linkList("使用的结果", depsOf[id]) +
      linkList("后续结果", usedByOf[id]) +
      '<div class="section-label">原文</div><nav class="source-links">' +
      r.pages.map(page => '<a href="' + pageLink(page) + '">第 ' + page + ' 页</a>').join("") + '</nav>';

    rich(host.querySelector(".statement"), r.statement);
    const idea = host.querySelector(".idea");
    r.idea.forEach(text => {
      const paragraph = document.createElement("p");
      rich(paragraph,text);
      idea.appendChild(paragraph);
    });

    // 步骤内容与标题
    (r.steps || []).forEach((s, i) => {
      const stepEl = host.querySelectorAll(".step")[i];
      const headSpan = stepEl.querySelector(".step__head").querySelectorAll("span")[1];
      rich(headSpan, s.t);
      rich(stepEl.querySelector(".step__body"), s.b);
    });

    panelContent.innerHTML = "";
    panelContent.appendChild(host);
    panelContent.scrollTop = 0;
  }

  panelContent.addEventListener("click", followInternalLink);
  function followInternalLink(event) {
    const link = event.target.closest('a[href^="#/"]');
    if (!link) return;
    event.preventDefault();
    navigate(link.getAttribute("href").split("/")[1]);
  }

  function kindLabel(k) {
    return { theorem: "定理", proposition: "命题", lemma: "引理", corollary: "推论", appendix: "附录" }[k] || k;
  }

  /* ---------------- 搜索 ---------------- */
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  function doSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) { searchResults.hidden = true; return; }
    const terms = q.split(/\s+/);
    const hits = [
      ...VP.results.map(result => ({...result, type:kindLabel(result.kind)})),
      ...VP.sections.map(section => ({...section, type:"章节"}))
    ].filter(item => {
      const text = [item.number,item.title,item.type].join(" ").toLowerCase();
      return terms.every(term => text.includes(term));
    }).slice(0,14);
    if (!hits.length) {
      searchResults.innerHTML = '<div class="search-results__item">无匹配</div>';
    } else {
      searchResults.innerHTML = hits.map(r =>
        '<button type="button" class="search-results__item" data-id="' + r.id + '">' +
        '<span class="search-results__num">' + esc(r.type + ' ' + r.number) + "</span>" + esc(r.title) + "</button>").join("");
      searchResults.querySelectorAll("[data-id]").forEach(b =>
        b.addEventListener("click", () => {
          navigate(b.dataset.id);
          searchResults.hidden = true; searchInput.value = "";
          if (mobile.matches) pane("panel");
          document.getElementById("panel").focus();
        }));
    }
    searchResults.hidden = false;
  }
  searchInput.addEventListener("input", () => doSearch(searchInput.value));
  searchInput.addEventListener("keydown", event => {
    if (searchResults.hidden) return;
    const first = searchResults.querySelector("button");
    if (event.key === "Enter") { event.preventDefault(); first?.click(); }
    else if (event.key === "ArrowDown") { event.preventDefault(); first?.focus(); }
    else if (event.key === "Escape") searchResults.hidden = true;
  });
  document.addEventListener("click", e => {
    if (!e.target.closest(".topbar__search")) searchResults.hidden = true;
  });

  /* ---------------- 记号弹窗 ---------------- */
  const notationModal = document.getElementById("notation-modal");
  function renderNotationModal() {
    const body = document.getElementById("notation-body");
    body.className = "modal__body";
    body.innerHTML = '<div class="notation-grid">' +
      VP.notation.map(n =>
        '<div class="nota-card"><div class="sym"><span class="symtex"></span>' +
        '<span class="p">p.' + n.page + "</span></div>" +
        '<p class="mean">' + esc(n.mean) + "</p></div>").join("") +
      "</div>";
    const cards = body.querySelectorAll(".nota-card");
    VP.notation.forEach((n, i) => {
      renderKatex(cards[i].querySelector(".symtex"), n.tex, false);
    });
  }
  document.getElementById("notation-btn").addEventListener("click", () => {
    renderNotationModal(); notationModal.showModal();
  });
  document.getElementById("notation-close").addEventListener("click", () => notationModal.close());

  /* ---------------- 机制图弹窗 ---------------- */
  const figureModal = document.getElementById("figure-modal");
  const figures = {
    fiber: {
      page:19, title:"纤维壁与内部恢复", alt:"原文图 1，左图显示通量弧，右图放大近轴高斯反演区域。",
      caption:"壁面上的角度失配带来高斯衰减，近轴反演的代价随帽宽平方变小。"
    },
    annuli: {
      page:22, title:"两次圆环比较", alt:"原文图 2，从观测内圈向外比较，再向内比较到初始时刻。",
      caption:"观测圈为 s=b=2a，初值圈为 s=2b=4a。两次分别损失一个对数。"
    }
  };
  function figureMarkup(key) {
    const figure = figures[key];
    return '<figure class="fig-card"><h4>' + esc(figure.title) + '</h4>' +
      '<img src="assets/figures/' + key + '.png" alt="' + esc(figure.alt) + '">' +
      '<figcaption class="cap">' + esc(figure.caption) + ' <a href="' +
      pageLink(figure.page) + '">原文第 ' + figure.page + ' 页</a></figcaption></figure>';
  }
  document.getElementById("figures-btn").onclick = () => {
    document.getElementById("figure-body").innerHTML = Object.keys(figures).map(figureMarkup).join("");
    figureModal.showModal();
  };
  document.getElementById("figure-close").onclick = () => figureModal.close();

  /* ---------------- 分隔条拖拽 ---------------- */
  const divider = document.getElementById("divider");
  const layoutEl = document.querySelector(".layout");
  let dragging = false;
  function setPanelWidth(value) {
    const width = Math.max(25,Math.min(75,value));
    root.style.setProperty("--panel-w",width + "%");
    divider.setAttribute("aria-valuenow",Math.round(width));
  }
  divider.onpointerdown = event => { dragging = true; divider.setPointerCapture(event.pointerId); };
  divider.onpointermove = event => {
    if (dragging) {
      const rect = layoutEl.getBoundingClientRect();
      setPanelWidth(100*(rect.right-event.clientX)/rect.width);
    }
  };
  divider.onlostpointercapture = () => { dragging = false; };
  divider.ondblclick = () => setPanelWidth(42);
  divider.onkeydown = event => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setPanelWidth(Number(divider.getAttribute("aria-valuenow")) + (event.key === "ArrowLeft" ? 3 : -3));
  };

  /* ---------------- 字号 ---------------- */
  document.getElementById("text-smaller").addEventListener("click", () =>
    document.body.setAttribute("data-reading-size", "sm"));
  document.getElementById("text-larger").addEventListener("click", () =>
    document.body.setAttribute("data-reading-size", "lg"));
  document.getElementById("text-reset").addEventListener("click", () =>
    document.body.removeAttribute("data-reading-size"));

  const toggleGraph = document.getElementById("toggle-graph");
  toggleGraph.onclick = () => {
    const hidden = layoutEl.classList.toggle("graph-hidden");
    toggleGraph.textContent = hidden ? "显示图" : "隐藏图";
    toggleGraph.setAttribute("aria-pressed",hidden);
    requestAnimationFrame(fitGraph);
  };
  document.querySelectorAll(".tabbar__btn").forEach(button => {
    button.onclick = () => pane(button.dataset.pane);
  });

  outline.innerHTML = VP.sections.map(section =>
    '<details><summary>§ ' + esc(section.number + '  ' + section.title) + '</summary>' +
    linkList("", VP.results.filter(r => r.parent === section.id).map(r => r.id)) + '</details>').join("");
  outline.addEventListener("click",followInternalLink);
  outlineToggle.onclick = () => {
    const open = outline.hidden;
    setOutlineOpen(open);
    if (!open) requestAnimationFrame(fitGraph);
  };
  const legendDirections = document.getElementById("legend-directions");
  legendDirections.innerHTML = Object.entries(VP.directions).map(([key, label]) =>
    '<div class="graph-legend__row" data-direction="' + esc(key) + '">' +
    '<i class="legend-swatch" aria-hidden="true"></i>' + esc(label) + '</div>').join("");

  document.getElementById("legend-toggle").onclick = event => {
    const button = event.currentTarget;
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded",!open);
    document.getElementById("legend-body").hidden = open;
  };

  document.addEventListener("keydown", event => {
    if (event.target.closest("input, textarea, dialog, [contenteditable]") || event.metaKey || event.ctrlKey) return;
    if (event.altKey && event.key === "ArrowLeft") { event.preventDefault(); back.click(); }
    else if (event.altKey && event.key === "ArrowRight") { event.preventDefault(); forward.click(); }
    else if (event.key === "g" && !mobile.matches) toggleGraph.click();
    else if (event.key === "0") fitGraph();
    else if (event.key === "+" || event.key === "=") zoomBy(1.2);
    else if (event.key === "-" || event.key === "_") zoomBy(1/1.2);
  });

  pane("graph");
  followHash();
})();
