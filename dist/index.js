(() => {
  "use strict";
  var n = {
      347: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(105),
          o = t.n(r),
          a = t(136),
          i = t.n(a)()(o());
        i.push([
          n.id,
          'body {\n  min-width: 500px;\n  max-width: 500px;\n  height: auto;\n  background: #323949;\n}\n*::-webkit-scrollbar {\n  display: none;\n}\n.app {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  margin: 2rem;\n  padding: 2rem;\n}\n#heading {\n  color: #fff;\n  text-align: center;\n  font-size: 2rem;\n  font-family: "Rum Raisin", cursive;\n}\n\ninput[type="text"] {\n  padding: 0.5rem;\n  border-radius: 0.4rem;\n  border: 1px solid #ccc;\n}\n\ninput[type="text"]:focus {\n  outline: none;\n}\n\n.search {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.search button {\n  padding: 0.5rem 0.85rem;\n  border: none;\n  background: #c0eef2;\n  border-radius: 50%;\n  cursor: pointer;\n  font-family: "rum raisin", cursive;\n}\n.Todo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n  margin-top: 2rem;\n}\n.Todo ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 68%;\n  display: flex;\n  min-height: 200px;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.Todo ul li {\n  box-sizing: border-box;\n  padding: 0 0.3rem;\n  height: 2.5rem;\n  width: 100%;\n  gap: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.delete {\n  padding: 0.5rem 0.85rem;\n  border: none;\n  background: #c0eef2;\n  border-radius: 50%;\n  cursor: pointer;\n  font-family: "rum raisin", cursive;\n}\n.content {\n  display: flex;\n  align-items: center;\n  background: white;\n  max-width: 185px;\n  width: 100%;\n  border-radius: 0.4rem;\n  height: 2.2rem;\n}\n.content p {\n  margin-left: 1rem;\n  word-wrap: break-word;\n  width: 100%;\n}\n\n.content p a {\n  text-decoration: none;\n  color: #000;\n}\n\n.content input[type="checkbox"] {\n  display: none;\n  background-color: #eee;\n}\n.content input[type="checkbox"]:checked .content p {\n  text-decoration: line-through;\n  color: white;\n}\n.content input[type="checkbox"]:checked .content p a {\n  text-decoration: line-through;\n  color: white;\n}\n',
          "",
        ]);
        const c = i;
      },
      136: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      105: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      885: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              d = r.base ? s[0] + r.base : s[0],
              l = a[d] || 0,
              u = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var p = t(u),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: u, updater: f, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), d = 0; d < a.length; d++) {
              var l = t(a[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = s;
          };
        };
      },
      738: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      681: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      658: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      803: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      861: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(885),
        e = t.n(n),
        r = t(803),
        o = t.n(r),
        a = t(738),
        i = t.n(a),
        c = t(658),
        s = t.n(c),
        d = t(681),
        l = t.n(d),
        u = t(861),
        p = t.n(u),
        m = t(347),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = s()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = l()),
        e()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals;
      const h = document.getElementById("Add"),
        g = document.getElementById("inputbox");
      chrome.storage.sync.get("todos", (n) => {
        (n.todos || []).forEach((n) => {
          n && v(n);
        });
      });
      const v = (n) => {
        const e = document.getElementById("todos"),
          t = document.createElement("li"),
          r = document.createElement("p"),
          o = document.createElement("div");
        o.className = "content";
        const a = document.createElement("input");
        if (
          ((a.type = "checkbox"),
          (a.className = "check"),
          o.appendChild(a),
          n.startsWith("http"))
        ) {
          const e = document.createElement("a");
          (e.href = n),
            (e.target = "_blank"),
            (e.innerText = n.split("/")[2]),
            r.appendChild(e);
        } else r.innerText = n;
        const i = document.createElement("button");
        (i.className = "delete"),
          (i.innerText = "X"),
          i.addEventListener("click", () => {
            t.remove(),
              chrome.storage.sync.get("todos", (e) => {
                const t = (e.todos || []).filter((e) => e !== n);
                chrome.storage.sync.set({ todos: t });
              });
          }),
          o.appendChild(r),
          t.appendChild(o),
          t.appendChild(i),
          e.appendChild(t);
      };
      h.addEventListener("click", () => {
        const n = g.value;
        console.log(n),
          v(n),
          (g.value = ""),
          chrome.storage.sync.get("todos", (e) => {
            const t = e.todos || [];
            t.push(n), chrome.storage.sync.set({ todos: t });
          });
      }),
        h.addEventListener("click", () => {
          console.log("button clicked");
        }),
        console.log("TEST");
    })();
})();
