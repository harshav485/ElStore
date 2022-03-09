(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    113: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        a = r(1),
        c = r(27),
        s = r.n(c),
        i = r(7),
        o = r(34),
        d = r(73),
        l = r(74),
        j = r(17),
        u = "PRODUCT_LIST_REQUEST",
        p = "PRODUCT_LIST_SUCCESS",
        h = "PRODUCT_LIST_FAIL",
        b = "PRODUCT_DETAILS_REQUEST",
        O = "PRODUCT_DETAILS_SUCCESS",
        x = "PRODUCT_DETAILS_FAIL",
        f = "PRODUCT_DELETE_REQUEST",
        m = "PRODUCT_DELETE_SUCCESS",
        g = "PRODUCT_DELETE_FAIL",
        v = "PRODUCT_CREATE_REQUEST",
        y = "PRODUCT_CREATE_SUCCESS",
        E = "PRODUCT_CREATE_FAIL",
        S = "PRODUCT_CREATE_RESET",
        I = "PRODUCT_UPDATE_REQUEST",
        C = "PRODUCT_UPDATE_SUCCESS",
        _ = "PRODUCT_UPDATE_FAIL",
        R = "PRODUCT_UPDATE_RESET",
        L = "PRODUCT_CREATE_REVIEW_REQUEST",
        k = "PRODUCT_CREATE_REVIEW_SUCCESS",
        T = "PRODUCT_CREATE_REVIEW_FAIL",
        A = "PRODUCT_CREATE_REVIEW_RESET",
        P = "PRODUCT_TOP_REQUEST",
        w = "PRODUCT_TOP_SUCCESS",
        D = "PRODUCT_TOP_FAIL",
        U = r(30),
        N = "CART_ADD_ITEM",
        G = "CART_REMOVE_ITEM",
        F = "CART_SAVE_SHIPPING_ADDRESS",
        M = "CART_SAVE_PAYMENT_METHOD",
        B = "CART_CLEAR_ITEMS",
        q = "USER_LOGIN_REQUEST",
        Q = "USER_LOGIN_SUCCESS",
        $ = "USER_LOGIN_FAIL",
        z = "USER_LOGOUT",
        V = "USER_REGISTER_REQUEST",
        J = "USER_REGISTER_SUCCESS",
        Y = "USER_REGISTER_FAIL",
        H = "USER_DETAILS_REQUEST",
        W = "USER_DETAILS_SUCCESS",
        X = "USER_DETAILS_FAIL",
        Z = "USER_DETAILS_RESET",
        K = "USER_UPDATE_PROFILE_REQUEST",
        ee = "USER_UPDATE_PROFILE_SUCCESS",
        te = "USER_UPDATE_PROFILE_FAIL",
        re = "USER_UPDATE_PROFILE_RESET",
        ne = "USER_LIST_REQUEST",
        ae = "USER_LIST_SUCCESS",
        ce = "USER_LIST_FAIL",
        se = "USER_LIST_RESET",
        ie = "USER_DELETE_REQUEST",
        oe = "USER_DELETE_SUCCESS",
        de = "USER_DELETE_FAIL",
        le = "USER_UPDATE_REQUEST",
        je = "USER_UPDATE_SUCCESS",
        ue = "USER_UPDATE_FAIL",
        pe = "USER_UPDATE_RESET",
        he = "ORDER_CREATE_REQUEST",
        be = "ORDER_CREATE_SUCCESS",
        Oe = "ORDER_CREATE_FAIL",
        xe = "ORDER_CREATE_RESET",
        fe = "ORDER_DETAILS_REQUEST",
        me = "ORDER_DETAILS_SUCCESS",
        ge = "ORDER_DETAILS_FAIL",
        ve = "ORDER_PAY_REQUEST",
        ye = "ORDER_PAY_SUCCESS",
        Ee = "ORDER_PAY_FAIL",
        Se = "ORDER_PAY_RESET",
        Ie = "ORDER_LIST_MY_REQUEST",
        Ce = "ORDER_LIST_MY_SUCCESS",
        _e = "ORDER_LIST_MY_FAIL",
        Re = "ORDER_LIST_MY_RESET",
        Le = "ORDER_LIST_REQUEST",
        ke = "ORDER_LIST_SUCCESS",
        Te = "ORDER_LIST_FAIL",
        Ae = "ORDER_DELIVER_REQUEST",
        Pe = "ORDER_DELIVER_SUCCESS",
        we = "ORDER_DELIVER_FAIL",
        De = "ORDER_DELIVER_RESET",
        Ue = Object(o.combineReducers)({
          productList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { products: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case u:
                return { loading: !0, products: [] };
              case p:
                return {
                  loading: !1,
                  products: t.payload.products,
                  page: t.payload.page,
                  pages: t.payload.pages,
                };
              case h:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          productDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { product: { reviews: [] } },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case b:
                return Object(j.a)({ loading: !0 }, e);
              case O:
                return { loading: !1, product: t.payload };
              case x:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          productDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case f:
                return { loading: !0 };
              case m:
                return { loading: !1, success: !0 };
              case g:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          productCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case v:
                return { loading: !0 };
              case y:
                return { loading: !1, success: !0, product: t.payload };
              case E:
                return { loading: !1, error: t.payload };
              case S:
                return {};
              default:
                return e;
            }
          },
          productUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { product: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case I:
                return { loading: !0 };
              case C:
                return { loading: !1, success: !0, product: t.payload };
              case _:
                return { loading: !1, error: t.payload };
              case R:
                return { product: {} };
              default:
                return e;
            }
          },
          productReviewCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case L:
                return { loading: !0 };
              case k:
                return { loading: !1, success: !0 };
              case T:
                return { loading: !1, error: t.payload };
              case A:
                return {};
              default:
                return e;
            }
          },
          productTopRated: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { products: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case P:
                return { loading: !0, products: [] };
              case w:
                return { loading: !1, products: t.payload };
              case D:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          cart: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { cartItems: [], shippingAddress: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case N:
                var r = t.payload,
                  n = e.cartItems.find(function (e) {
                    return e.product === r.product;
                  });
                return n
                  ? Object(j.a)(
                      Object(j.a)({}, e),
                      {},
                      {
                        cartItems: e.cartItems.map(function (e) {
                          return e.product === n.product ? r : e;
                        }),
                      }
                    )
                  : Object(j.a)(
                      Object(j.a)({}, e),
                      {},
                      { cartItems: [].concat(Object(U.a)(e.cartItems), [r]) }
                    );
              case G:
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    cartItems: e.cartItems.filter(function (e) {
                      return e.product !== t.payload;
                    }),
                  }
                );
              case F:
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { shippingAddress: t.payload }
                );
              case M:
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { paymentMethod: t.payload }
                );
              case B:
                return Object(j.a)(Object(j.a)({}, e), {}, { cartItems: [] });
              default:
                return e;
            }
          },
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case q:
                return { loading: !0 };
              case Q:
                return { loading: !1, userInfo: t.payload };
              case $:
                return { loading: !1, error: t.payload };
              case z:
                return {};
              default:
                return e;
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case V:
                return { loading: !0 };
              case J:
                return { loading: !1, userInfo: t.payload };
              case Y:
                return { loading: !1, error: t.payload };
              case z:
                return {};
              default:
                return e;
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case H:
                return Object(j.a)(Object(j.a)({}, e), {}, { loading: !0 });
              case W:
                return { loading: !1, user: t.payload };
              case X:
                return { loading: !1, error: t.payload };
              case Z:
                return { user: {} };
              default:
                return e;
            }
          },
          userUpdateProfile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case K:
                return { loading: !0 };
              case ee:
                return { loading: !1, success: !0, userInfo: t.payload };
              case te:
                return { loading: !1, error: t.payload };
              case re:
                return {};
              default:
                return e;
            }
          },
          userList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { users: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ne:
                return { loading: !0 };
              case ae:
                return { loading: !1, users: t.payload };
              case ce:
                return { loading: !1, error: t.payload };
              case se:
                return { users: [] };
              default:
                return e;
            }
          },
          userDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ie:
                return { loading: !0 };
              case oe:
                return { loading: !1, success: !0 };
              case de:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case le:
                return { loading: !0 };
              case je:
                return { loading: !1, success: !0 };
              case ue:
                return { loading: !1, error: t.payload };
              case pe:
                return { user: {} };
              default:
                return e;
            }
          },
          orderCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case he:
                return { loading: !0 };
              case be:
                return { loading: !1, success: !0, order: t.payload };
              case Oe:
                return { loading: !1, error: t.payload };
              case xe:
                return {};
              default:
                return e;
            }
          },
          orderDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !0, orderItems: [], shippingAddress: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case fe:
                return Object(j.a)(Object(j.a)({}, e), {}, { loading: !0 });
              case me:
                return { loading: !1, order: t.payload };
              case ge:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          orderPay: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ve:
                return { loading: !0 };
              case ye:
                return { loading: !1, success: !0 };
              case Ee:
                return { loading: !1, error: t.payload };
              case Se:
                return {};
              default:
                return e;
            }
          },
          orderListMy: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ie:
                return { loading: !0 };
              case Ce:
                return { loading: !1, orders: t.payload };
              case _e:
                return { loading: !1, error: t.payload };
              case Re:
                return { orders: [] };
              default:
                return e;
            }
          },
          orderList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Le:
                return { loading: !0 };
              case ke:
                return { loading: !1, orders: t.payload };
              case Te:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          orderDeliver: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ae:
                return { loading: !0 };
              case Pe:
                return { loading: !1, success: !0 };
              case we:
                return { loading: !1, error: t.payload };
              case De:
                return {};
              default:
                return e;
            }
          },
        }),
        Ne = localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        Ge = localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null,
        Fe = {
          cart: {
            cartItems: Ne,
            shippingAddress: localStorage.getItem("shippingAddress")
              ? JSON.parse(localStorage.getItem("shippingAddress"))
              : {},
          },
          userLogin: { userInfo: Ge },
        },
        Me = [d.a],
        Be = Object(o.createStore)(
          Ue,
          Fe,
          Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0, Me))
        ),
        qe = (r(88), r(89), r(118)),
        Qe = r(10),
        $e = r(16),
        ze = r(127),
        Ve = r(119),
        Je = r(124),
        Ye = r(14),
        He = r(9),
        We = r(125),
        Xe = r(76);
      var Ze = function () {
          var e = Object(a.useState)(""),
            t = Object(He.a)(e, 2),
            r = t[0],
            c = t[1],
            s = Object($e.k)();
          return Object(n.jsxs)(We.a, {
            onSubmit: function (e) {
              e.preventDefault(),
                r
                  ? s.push("/?keyword=".concat(r, "&page=1"))
                  : s.push(s.push(s.location.pathname));
            },
            inline: !0,
            children: [
              Object(n.jsx)(We.a.Control, {
                type: "text",
                name: "q",
                onChange: function (e) {
                  return c(e.target.value);
                },
                className: "mr-sm-2 ml-sm-5",
              }),
              Object(n.jsx)(Xe.a, {
                type: "submit",
                variant: "outline-success",
                className: "p-2",
                children: "Submit",
              }),
            ],
          });
        },
        Ke = r(8),
        et = r.n(Ke),
        tt = r(11),
        rt = r(12),
        nt = r.n(rt),
        at = function (e) {
          return (function () {
            var t = Object(tt.a)(
              et.a.mark(function t(r, n) {
                var a, c, s, i, o;
                return et.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            r({ type: H }),
                            (a = n()),
                            (c = a.userLogin.userInfo),
                            (s = {
                              headers: {
                                "Content-type": "application/json",
                                Authorization: "Bearer ".concat(c.token),
                              },
                            }),
                            (t.next = 6),
                            nt.a.get("/api/users/".concat(e, "/"), s)
                          );
                        case 6:
                          (i = t.sent),
                            (o = i.data),
                            r({ type: W, payload: o }),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            r({
                              type: X,
                              payload:
                                t.t0.response && t.t0.response.data.detail
                                  ? t.t0.response.data.detail
                                  : t.t0.message,
                            });
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })();
        };
      var ct = function () {
          var e = Object(i.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            t = Object(i.b)();
          return Object(n.jsx)("header", {
            children: Object(n.jsx)(ze.a, {
              bg: "dark",
              variant: "dark",
              expand: "lg",
              collapseOnSelect: !0,
              children: Object(n.jsxs)(qe.a, {
                children: [
                  Object(n.jsx)(Ye.LinkContainer, {
                    to: "/",
                    children: Object(n.jsx)(ze.a.Brand, {
                      children: "ElStore",
                    }),
                  }),
                  Object(n.jsx)(ze.a.Toggle, {
                    "aria-controls": "basic-navbar-nav",
                  }),
                  Object(n.jsxs)(ze.a.Collapse, {
                    id: "basic-navbar-nav",
                    children: [
                      Object(n.jsx)(Ze, {}),
                      Object(n.jsxs)(Ve.a, {
                        className: "ml-auto",
                        children: [
                          Object(n.jsx)(Ye.LinkContainer, {
                            to: "/cart",
                            children: Object(n.jsxs)(Ve.a.Link, {
                              children: [
                                Object(n.jsx)("i", {
                                  className: "fas fa-shopping-cart",
                                }),
                                "Cart",
                              ],
                            }),
                          }),
                          e
                            ? Object(n.jsxs)(Je.a, {
                                title: e.name,
                                id: "username",
                                children: [
                                  Object(n.jsx)(Ye.LinkContainer, {
                                    to: "/profile",
                                    children: Object(n.jsx)(Je.a.Item, {
                                      children: "Profile",
                                    }),
                                  }),
                                  Object(n.jsx)(Je.a.Item, {
                                    onClick: function () {
                                      t(function (e) {
                                        localStorage.removeItem("userInfo"),
                                          e({ type: z }),
                                          e({ type: Z }),
                                          e({ type: Re }),
                                          e({ type: se });
                                      });
                                    },
                                    children: "Logout",
                                  }),
                                ],
                              })
                            : Object(n.jsx)(Ye.LinkContainer, {
                                to: "/login",
                                children: Object(n.jsxs)(Ve.a.Link, {
                                  children: [
                                    Object(n.jsx)("i", {
                                      className: "fas fa-user",
                                    }),
                                    "Login",
                                  ],
                                }),
                              }),
                          e &&
                            e.isAdmin &&
                            Object(n.jsxs)(Je.a, {
                              title: "Admin",
                              id: "adminmenue",
                              children: [
                                Object(n.jsx)(Ye.LinkContainer, {
                                  to: "/admin/userlist",
                                  children: Object(n.jsx)(Je.a.Item, {
                                    children: "Users",
                                  }),
                                }),
                                Object(n.jsx)(Ye.LinkContainer, {
                                  to: "/admin/productlist",
                                  children: Object(n.jsx)(Je.a.Item, {
                                    children: "Products",
                                  }),
                                }),
                                Object(n.jsx)(Ye.LinkContainer, {
                                  to: "/admin/orderlist",
                                  children: Object(n.jsx)(Je.a.Item, {
                                    children: "Orders",
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        st = r(120),
        it = r(75);
      var ot = function () {
          return Object(n.jsx)("footer", {
            children: Object(n.jsx)(qe.a, {
              children: Object(n.jsx)(st.a, {
                children: Object(n.jsx)(it.a, {
                  className: "text-center py-3",
                  children: "Copyright \xa9 ElStore",
                }),
              }),
            }),
          });
        },
        dt = r(129);
      var lt = function (e) {
        var t = e.value,
          r = e.text,
          a = e.color;
        return Object(n.jsxs)("div", {
          className: "rating",
          children: [
            Object(n.jsx)("span", {
              children: Object(n.jsx)("i", {
                style: { color: a },
                className:
                  t >= 1
                    ? "fas fa-star"
                    : t >= 0.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(n.jsx)("span", {
              children: Object(n.jsx)("i", {
                style: { color: a },
                className:
                  t >= 2
                    ? "fas fa-star"
                    : t >= 1.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(n.jsx)("span", {
              children: Object(n.jsx)("i", {
                style: { color: a },
                className:
                  t >= 3
                    ? "fas fa-star"
                    : t >= 2.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(n.jsx)("span", {
              children: Object(n.jsx)("i", {
                style: { color: a },
                className:
                  t >= 4
                    ? "fas fa-star"
                    : t >= 3.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(n.jsx)("span", {
              children: Object(n.jsx)("i", {
                style: { color: a },
                className:
                  t >= 5
                    ? "fas fa-star"
                    : t >= 4.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(n.jsx)("span", { children: r && r }),
          ],
        });
      };
      var jt = function (e) {
          var t = e.product;
          return Object(n.jsxs)(dt.a, {
            className: "my-3 p-3 rounded",
            children: [
              Object(n.jsx)(Qe.Link, {
                to: "/product/".concat(t._id),
                children: Object(n.jsx)(dt.a.Img, { src: t.image }),
              }),
              Object(n.jsxs)(dt.a.Body, {
                children: [
                  Object(n.jsx)(Qe.Link, {
                    to: "/product/".concat(t._id),
                    children: Object(n.jsx)(dt.a.Title, {
                      as: "div",
                      children: Object(n.jsx)("strong", { children: t.name }),
                    }),
                  }),
                  Object(n.jsx)(dt.a.Text, {
                    as: "div",
                    children: Object(n.jsx)("div", {
                      className: "my-3",
                      children: Object(n.jsx)(lt, {
                        value: t.rating,
                        text: "".concat(t.numReviews, " reviews"),
                        color: "#f8e825",
                      }),
                    }),
                  }),
                  Object(n.jsxs)(dt.a.Text, {
                    as: "h3",
                    children: ["$", t.price],
                  }),
                ],
              }),
            ],
          });
        },
        ut = r(121);
      var pt = function () {
          return Object(n.jsx)(ut.a, {
            animation: "border",
            role: "status",
            style: {
              height: "100px",
              width: "100px",
              margin: "auto",
              display: "block",
            },
            children: Object(n.jsx)("span", {
              className: "sr-only",
              children: "Loading...",
            }),
          });
        },
        ht = r(128);
      var bt = function (e) {
          var t = e.variant,
            r = e.children;
          return Object(n.jsx)(ht.a, { variant: t, children: r });
        },
        Ot = r(130);
      var xt = function (e) {
          var t = e.pages,
            r = e.page,
            a = e.keyword,
            c = void 0 === a ? "" : a,
            s = e.isAdmin,
            i = void 0 !== s && s;
          return (
            c && (c = c.split("?keyword=")[1].split("&")[0]),
            t > 1 &&
              Object(n.jsx)(Ot.a, {
                children: Object(U.a)(Array(t).keys()).map(function (e) {
                  return Object(n.jsx)(
                    Ye.LinkContainer,
                    {
                      to: i
                        ? "/admin/productlist/?keyword="
                            .concat(c, "&page=")
                            .concat(e + 1)
                        : "/?keyword=".concat(c, "&page=").concat(e + 1),
                      children: Object(n.jsx)(Ot.a.Item, {
                        active: e + 1 === r,
                        children: e + 1,
                      }),
                    },
                    e + 1
                  );
                }),
              })
          );
        },
        ft = r(126),
        mt = r(122),
        gt = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return (function () {
            var t = Object(tt.a)(
              et.a.mark(function t(r) {
                var n, a;
                return et.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            r({ type: u }),
                            (t.next = 4),
                            nt.a.get("/api/products".concat(e))
                          );
                        case 4:
                          (n = t.sent),
                            (a = n.data),
                            r({ type: p, payload: a }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            r({
                              type: h,
                              payload:
                                t.t0.response && t.t0.response.data.detail
                                  ? t.t0.response.data.detail
                                  : t.t0.message,
                            });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        vt = function (e) {
          return (function () {
            var t = Object(tt.a)(
              et.a.mark(function t(r) {
                var n, a;
                return et.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            r({ type: b }),
                            (t.next = 4),
                            nt.a.get("/api/products/".concat(e))
                          );
                        case 4:
                          (n = t.sent),
                            (a = n.data),
                            r({ type: O, payload: a }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            r({
                              type: x,
                              payload:
                                t.t0.response && t.t0.response.data.detail
                                  ? t.t0.response.data.detail
                                  : t.t0.message,
                            });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
      var yt = function () {
        var e = Object(i.b)(),
          t = Object(i.c)(function (e) {
            return e.productTopRated;
          }),
          r = t.error,
          c = t.loading,
          s = t.products;
        return (
          Object(a.useEffect)(
            function () {
              e(
                (function () {
                  var e = Object(tt.a)(
                    et.a.mark(function e(t) {
                      var r, n;
                      return et.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: P }),
                                  (e.next = 4),
                                  nt.a.get("/api/products/top/")
                                );
                              case 4:
                                (r = e.sent),
                                  (n = r.data),
                                  t({ type: w, payload: n }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t({
                                    type: D,
                                    payload:
                                      e.t0.response && e.t0.response.data.detail
                                        ? e.t0.response.data.detail
                                        : e.t0.message,
                                  });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [e]
          ),
          c
            ? Object(n.jsx)(pt, {})
            : r
            ? Object(n.jsx)(bt, { variant: "danger", children: r })
            : Object(n.jsx)(ft.a, {
                pause: "hover",
                className: "bg-dark",
                children: s.map(function (e) {
                  return Object(n.jsx)(
                    ft.a.Item,
                    {
                      children: Object(n.jsxs)(Qe.Link, {
                        to: "/product/".concat(e._id),
                        children: [
                          Object(n.jsx)(mt.a, {
                            src: e.image,
                            alt: e.name,
                            fluid: !0,
                          }),
                          Object(n.jsx)(ft.a.Caption, {
                            className: "carousel.caption",
                            children: Object(n.jsxs)("h4", {
                              children: [e.name, " ($", e.price, ")"],
                            }),
                          }),
                        ],
                      }),
                    },
                    e._id
                  );
                }),
              })
        );
      };
      var Et = function (e) {
          var t = e.history,
            r = Object(i.b)(),
            c = Object(i.c)(function (e) {
              return e.productList;
            }),
            s = c.error,
            o = c.loading,
            d = c.products,
            l = c.page,
            j = c.pages,
            u = t.location.search;
          return (
            Object(a.useEffect)(
              function () {
                r(gt(u));
              },
              [r, u]
            ),
            Object(n.jsxs)("div", {
              children: [
                !u && Object(n.jsx)(yt, {}),
                Object(n.jsx)("h1", { children: "Latest Products" }),
                o
                  ? Object(n.jsx)(pt, {})
                  : s
                  ? Object(n.jsx)(bt, { variant: "danger", children: s })
                  : Object(n.jsxs)("div", {
                      children: [
                        Object(n.jsx)(st.a, {
                          children: d.map(function (e) {
                            return Object(n.jsx)(
                              it.a,
                              {
                                sm: 12,
                                md: 6,
                                lg: 4,
                                xl: 3,
                                children: Object(n.jsx)(jt, { product: e }),
                              },
                              e._id
                            );
                          }),
                        }),
                        Object(n.jsx)(xt, { page: l, pages: j, keyword: u }),
                      ],
                    }),
              ],
            })
          );
        },
        St = r(131);
      var It = function (e) {
          var t = e.match,
            r = e.history,
            c = Object(a.useState)(1),
            s = Object(He.a)(c, 2),
            o = s[0],
            d = s[1],
            l = Object(a.useState)(0),
            j = Object(He.a)(l, 2),
            u = j[0],
            p = j[1],
            h = Object(a.useState)(""),
            b = Object(He.a)(h, 2),
            O = b[0],
            x = b[1],
            f = Object(i.b)(),
            m = Object(i.c)(function (e) {
              return e.productDetails;
            }),
            g = m.loading,
            v = m.error,
            y = m.product,
            E = Object(i.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            S = Object(i.c)(function (e) {
              return e.productReviewCreate;
            }),
            I = S.loading,
            C = S.error,
            _ = S.success;
          return (
            Object(a.useEffect)(
              function () {
                _ && (p(0), x(""), f({ type: A })), f(vt(t.params.id));
              },
              [f, t, _]
            ),
            Object(n.jsxs)("div", {
              children: [
                Object(n.jsx)(Qe.Link, {
                  to: "/",
                  className: "btn btn-light my-3",
                  children: "Go Back",
                }),
                g
                  ? Object(n.jsx)(pt, {})
                  : v
                  ? Object(n.jsx)(bt, { variant: "danger", children: v })
                  : Object(n.jsxs)("div", {
                      children: [
                        Object(n.jsxs)(st.a, {
                          children: [
                            Object(n.jsx)(it.a, {
                              md: 6,
                              children: Object(n.jsx)(mt.a, {
                                src: y.image,
                                alt: y.name,
                                fluid: !0,
                              }),
                            }),
                            Object(n.jsx)(it.a, {
                              md: 3,
                              children: Object(n.jsxs)(St.a, {
                                variant: "flush",
                                children: [
                                  Object(n.jsx)(St.a.Item, {
                                    children: Object(n.jsx)("h3", {
                                      children: y.name,
                                    }),
                                  }),
                                  Object(n.jsx)(St.a.Item, {
                                    children: Object(n.jsx)(lt, {
                                      value: y.rating,
                                      text: "".concat(y.numReviews, " reviews"),
                                      color: "#f8e825",
                                    }),
                                  }),
                                  Object(n.jsxs)(St.a.Item, {
                                    children: ["Price: $", y.price],
                                  }),
                                  Object(n.jsxs)(St.a.Item, {
                                    children: ["Description: ", y.description],
                                  }),
                                ],
                              }),
                            }),
                            Object(n.jsx)(it.a, {
                              md: 3,
                              children: Object(n.jsx)(dt.a, {
                                children: Object(n.jsxs)(St.a, {
                                  variant: "flush",
                                  children: [
                                    Object(n.jsx)(St.a.Item, {
                                      children: Object(n.jsxs)(st.a, {
                                        children: [
                                          Object(n.jsx)(it.a, {
                                            children: "Price:",
                                          }),
                                          Object(n.jsx)(it.a, {
                                            children: Object(n.jsxs)("strong", {
                                              children: ["$", y.price],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(n.jsx)(St.a.Item, {
                                      children: Object(n.jsxs)(st.a, {
                                        children: [
                                          Object(n.jsx)(it.a, {
                                            children: "Status:",
                                          }),
                                          Object(n.jsx)(it.a, {
                                            children:
                                              y.countInStock > 0
                                                ? "In Stock"
                                                : "Out of Stock",
                                          }),
                                        ],
                                      }),
                                    }),
                                    y.countInStock > 0 &&
                                      Object(n.jsx)(St.a.Item, {
                                        children: Object(n.jsxs)(st.a, {
                                          children: [
                                            Object(n.jsx)(it.a, {
                                              children: "Qty",
                                            }),
                                            Object(n.jsx)(it.a, {
                                              xs: "auto",
                                              className: "my-1",
                                              children: Object(n.jsx)(
                                                We.a.Control,
                                                {
                                                  as: "select",
                                                  value: o,
                                                  onChange: function (e) {
                                                    return d(e.target.value);
                                                  },
                                                  children: Object(U.a)(
                                                    Array(y.countInStock).keys()
                                                  ).map(function (e) {
                                                    return Object(n.jsx)(
                                                      "option",
                                                      {
                                                        value: e + 1,
                                                        children: e + 1,
                                                      },
                                                      e + 1
                                                    );
                                                  }),
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                      }),
                                    Object(n.jsx)(St.a.Item, {
                                      children: Object(n.jsx)(Xe.a, {
                                        onClick: function () {
                                          r.push(
                                            "/cart/"
                                              .concat(t.params.id, "?qty=")
                                              .concat(o)
                                          );
                                        },
                                        className: "btn-block",
                                        disabled: 0 == y.countInStock,
                                        type: "button",
                                        children: "Add to Cart",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsx)(st.a, {
                          children: Object(n.jsxs)(it.a, {
                            md: 6,
                            children: [
                              Object(n.jsx)("h4", { children: "Reviews" }),
                              0 === y.reviews.length &&
                                Object(n.jsx)(bt, {
                                  variant: "info",
                                  children: "No Reviews",
                                }),
                              Object(n.jsxs)(St.a, {
                                variant: "flush",
                                children: [
                                  y.reviews.map(function (e) {
                                    return Object(n.jsxs)(
                                      St.a.Item,
                                      {
                                        children: [
                                          Object(n.jsx)("strong", {
                                            children: e.name,
                                          }),
                                          Object(n.jsx)(lt, {
                                            value: e.rating,
                                            color: "#f8e825",
                                          }),
                                          Object(n.jsx)("p", {
                                            children: e.createdAt.substring(
                                              0,
                                              10
                                            ),
                                          }),
                                          Object(n.jsx)("p", {
                                            children: e.comment,
                                          }),
                                        ],
                                      },
                                      e._id
                                    );
                                  }),
                                  Object(n.jsxs)(St.a.Item, {
                                    children: [
                                      Object(n.jsx)("h4", {
                                        children: "Write a review",
                                      }),
                                      I && Object(n.jsx)(pt, {}),
                                      _ &&
                                        Object(n.jsx)(bt, {
                                          variant: "success",
                                          children: "Review Submitted",
                                        }),
                                      C &&
                                        Object(n.jsx)(bt, {
                                          variant: "danger",
                                          children: C,
                                        }),
                                      E
                                        ? Object(n.jsxs)(We.a, {
                                            onSubmit: function (e) {
                                              var r, n;
                                              e.preventDefault(),
                                                f(
                                                  ((r = t.params.id),
                                                  (n = {
                                                    rating: u,
                                                    comment: O,
                                                  }),
                                                  (function () {
                                                    var e = Object(tt.a)(
                                                      et.a.mark(function e(
                                                        t,
                                                        a
                                                      ) {
                                                        var c, s, i, o, d;
                                                        return et.a.wrap(
                                                          function (e) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  return (
                                                                    (e.prev = 0),
                                                                    t({
                                                                      type: L,
                                                                    }),
                                                                    (c = a()),
                                                                    (s =
                                                                      c
                                                                        .userLogin
                                                                        .userInfo),
                                                                    (i = {
                                                                      headers: {
                                                                        "Content-type":
                                                                          "application/json",
                                                                        Authorization:
                                                                          "Bearer ".concat(
                                                                            s.token
                                                                          ),
                                                                      },
                                                                    }),
                                                                    (e.next = 6),
                                                                    nt.a.post(
                                                                      "/api/products/".concat(
                                                                        r,
                                                                        "/reviews/"
                                                                      ),
                                                                      n,
                                                                      i
                                                                    )
                                                                  );
                                                                case 6:
                                                                  (o = e.sent),
                                                                    (d =
                                                                      o.data),
                                                                    t({
                                                                      type: k,
                                                                      payload:
                                                                        d,
                                                                    }),
                                                                    (e.next = 14);
                                                                  break;
                                                                case 11:
                                                                  (e.prev = 11),
                                                                    (e.t0 =
                                                                      e.catch(
                                                                        0
                                                                      )),
                                                                    t({
                                                                      type: T,
                                                                      payload:
                                                                        e.t0
                                                                          .response &&
                                                                        e.t0
                                                                          .response
                                                                          .data
                                                                          .detail
                                                                          ? e.t0
                                                                              .response
                                                                              .data
                                                                              .detail
                                                                          : e.t0
                                                                              .message,
                                                                    });
                                                                case 14:
                                                                case "end":
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e,
                                                          null,
                                                          [[0, 11]]
                                                        );
                                                      })
                                                    );
                                                    return function (t, r) {
                                                      return e.apply(
                                                        this,
                                                        arguments
                                                      );
                                                    };
                                                  })())
                                                );
                                            },
                                            children: [
                                              Object(n.jsxs)(We.a.Group, {
                                                controlId: "rating",
                                                children: [
                                                  Object(n.jsx)(We.a.Label, {
                                                    children: "Rating",
                                                  }),
                                                  Object(n.jsxs)(We.a.Control, {
                                                    as: "select",
                                                    value: u,
                                                    onChange: function (e) {
                                                      return p(e.target.value);
                                                    },
                                                    children: [
                                                      Object(n.jsx)("option", {
                                                        value: "",
                                                        children: "Select...",
                                                      }),
                                                      Object(n.jsx)("option", {
                                                        value: "1",
                                                        children: "1 - Poor",
                                                      }),
                                                      Object(n.jsx)("option", {
                                                        value: "2",
                                                        children: "2 - Fair",
                                                      }),
                                                      Object(n.jsx)("option", {
                                                        value: "3",
                                                        children: "3 - Good",
                                                      }),
                                                      Object(n.jsx)("option", {
                                                        value: "4",
                                                        children:
                                                          "4 - Very Good",
                                                      }),
                                                      Object(n.jsx)("option", {
                                                        value: "5",
                                                        children:
                                                          "5 - Excellent",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              Object(n.jsxs)(We.a.Group, {
                                                controlId: "comment",
                                                children: [
                                                  Object(n.jsx)(We.a.Label, {
                                                    children: "Review",
                                                  }),
                                                  Object(n.jsx)(We.a.Control, {
                                                    as: "textarea",
                                                    row: "5",
                                                    value: O,
                                                    onChange: function (e) {
                                                      return x(e.target.value);
                                                    },
                                                  }),
                                                ],
                                              }),
                                              Object(n.jsx)(Xe.a, {
                                                disabled: I,
                                                type: "submit",
                                                variant: "primary",
                                                children: "Submit",
                                              }),
                                            ],
                                          })
                                        : Object(n.jsxs)(bt, {
                                            variant: "info",
                                            children: [
                                              "Please ",
                                              Object(n.jsx)(Qe.Link, {
                                                to: "/login",
                                                children: "login",
                                              }),
                                              " to write a review",
                                            ],
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
              ],
            })
          );
        },
        Ct = function (e, t) {
          return (function () {
            var r = Object(tt.a)(
              et.a.mark(function r(n, a) {
                var c, s;
                return et.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2), nt.a.get("/api/products/".concat(e))
                        );
                      case 2:
                        (c = r.sent),
                          (s = c.data),
                          n({
                            type: N,
                            payload: {
                              product: s._id,
                              name: s.name,
                              image: s.image,
                              price: s.price,
                              countInStock: s.countInStock,
                              qty: t,
                            },
                          }),
                          localStorage.setItem(
                            "cartItems",
                            JSON.stringify(a().cart.cartItems)
                          );
                      case 6:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })();
        };
      var _t = function (e) {
        var t = e.match,
          r = e.location,
          c = e.history,
          s = t.params.id,
          o = r.search ? Number(r.search.split("=")[1]) : 1,
          d = Object(i.b)(),
          l = Object(i.c)(function (e) {
            return e.cart;
          }).cartItems;
        Object(a.useEffect)(
          function () {
            s && d(Ct(s, o));
          },
          [d, s, o]
        );
        var j = function (e) {
          d(
            (function (e) {
              return function (t, r) {
                t({ type: G, payload: e }),
                  localStorage.setItem(
                    "cartItems",
                    JSON.stringify(r().cart.cartItems)
                  );
              };
            })(e)
          );
        };
        return Object(n.jsxs)(st.a, {
          children: [
            Object(n.jsxs)(it.a, {
              md: 8,
              children: [
                Object(n.jsx)("h1", { children: "Shopping Cart" }),
                0 === l.length
                  ? Object(n.jsxs)(bt, {
                      variant: "info",
                      children: [
                        "Your cart is empty ",
                        Object(n.jsx)(Qe.Link, {
                          to: "/",
                          children: "Go Back",
                        }),
                      ],
                    })
                  : Object(n.jsx)(St.a, {
                      variant: "flush",
                      children: l.map(function (e) {
                        return Object(n.jsx)(
                          St.a.Item,
                          {
                            children: Object(n.jsxs)(st.a, {
                              children: [
                                Object(n.jsx)(it.a, {
                                  md: 2,
                                  children: Object(n.jsx)(mt.a, {
                                    src: e.image,
                                    alt: e.name,
                                    fluid: !0,
                                    rounded: !0,
                                  }),
                                }),
                                Object(n.jsx)(it.a, {
                                  md: 3,
                                  children: Object(n.jsx)(Qe.Link, {
                                    to: "/product/".concat(e.product),
                                    children: e.name,
                                  }),
                                }),
                                Object(n.jsxs)(it.a, {
                                  md: 2,
                                  children: ["$", e.price],
                                }),
                                Object(n.jsx)(it.a, {
                                  md: 3,
                                  children: Object(n.jsx)(We.a.Control, {
                                    as: "select",
                                    value: e.qty,
                                    onChange: function (t) {
                                      return d(
                                        Ct(e.product, Number(t.target.value))
                                      );
                                    },
                                    children: Object(U.a)(
                                      Array(e.countInStock).keys()
                                    ).map(function (e) {
                                      return Object(n.jsx)(
                                        "option",
                                        { value: e + 1, children: e + 1 },
                                        e + 1
                                      );
                                    }),
                                  }),
                                }),
                                Object(n.jsx)(it.a, {
                                  md: 1,
                                  children: Object(n.jsx)(Xe.a, {
                                    type: "button",
                                    variant: "light",
                                    onClick: function () {
                                      return j(e.product);
                                    },
                                    children: Object(n.jsx)("i", {
                                      className: "fas fa-trash",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          },
                          e.product
                        );
                      }),
                    }),
              ],
            }),
            Object(n.jsx)(it.a, {
              md: 4,
              children: Object(n.jsxs)(dt.a, {
                children: [
                  Object(n.jsx)(St.a, {
                    variant: "flush",
                    children: Object(n.jsxs)(St.a.Item, {
                      children: [
                        Object(n.jsxs)("h2", {
                          children: [
                            "Subtotal (",
                            l.reduce(function (e, t) {
                              return e + t.qty;
                            }, 0),
                            ") items",
                          ],
                        }),
                        "$",
                        l
                          .reduce(function (e, t) {
                            return e + t.qty * t.price;
                          }, 0)
                          .toFixed(2),
                      ],
                    }),
                  }),
                  Object(n.jsx)(St.a.Item, {
                    children: Object(n.jsx)(Xe.a, {
                      type: "button",
                      className: "btn-block",
                      disabled: 0 === l.length,
                      onClick: function () {
                        c.push("/login?redirect=shipping");
                      },
                      children: "Proceed To Checkout",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var Rt = function (e) {
        var t = e.children;
        return Object(n.jsx)(qe.a, {
          children: Object(n.jsx)(st.a, {
            className: "justify-content-md-center",
            children: Object(n.jsx)(it.a, { xs: 12, md: 6, children: t }),
          }),
        });
      };
      var Lt = function (e) {
        var t = e.location,
          r = e.history,
          c = Object(a.useState)(""),
          s = Object(He.a)(c, 2),
          o = s[0],
          d = s[1],
          l = Object(a.useState)(""),
          j = Object(He.a)(l, 2),
          u = j[0],
          p = j[1],
          h = Object(i.b)(),
          b = t.search ? t.search.split("=")[1] : "/",
          O = Object(i.c)(function (e) {
            return e.userLogin;
          }),
          x = O.error,
          f = O.loading,
          m = O.userInfo;
        return (
          Object(a.useEffect)(
            function () {
              m && r.push(b);
            },
            [r, m, b]
          ),
          Object(n.jsxs)(Rt, {
            children: [
              Object(n.jsx)("h1", { children: "Sign In" }),
              x && Object(n.jsx)(bt, { variant: "danger", children: x }),
              f && Object(n.jsx)(pt, {}),
              Object(n.jsxs)(We.a, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    h(
                      (function (e, t) {
                        return (function () {
                          var r = Object(tt.a)(
                            et.a.mark(function r(n) {
                              var a, c, s;
                              return et.a.wrap(
                                function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (r.prev = 0),
                                          n({ type: q }),
                                          (a = {
                                            headers: {
                                              "Content-type":
                                                "application/json",
                                            },
                                          }),
                                          (r.next = 5),
                                          nt.a.post(
                                            "/api/users/login/",
                                            { username: e, password: t },
                                            a
                                          )
                                        );
                                      case 5:
                                        (c = r.sent),
                                          (s = c.data),
                                          n({ type: Q, payload: s }),
                                          localStorage.setItem(
                                            "userInfo",
                                            JSON.stringify(s)
                                          ),
                                          (r.next = 14);
                                        break;
                                      case 11:
                                        (r.prev = 11),
                                          (r.t0 = r.catch(0)),
                                          n({
                                            type: $,
                                            payload:
                                              r.t0.response &&
                                              r.t0.response.data.detail
                                                ? r.t0.response.data.detail
                                                : r.t0.message,
                                          });
                                      case 14:
                                      case "end":
                                        return r.stop();
                                    }
                                },
                                r,
                                null,
                                [[0, 11]]
                              );
                            })
                          );
                          return function (e) {
                            return r.apply(this, arguments);
                          };
                        })();
                      })(o, u)
                    );
                },
                children: [
                  Object(n.jsxs)(We.a.Group, {
                    controlId: "email",
                    children: [
                      Object(n.jsx)(We.a.Label, { children: "Email Address" }),
                      Object(n.jsx)(We.a.Control, {
                        type: "email",
                        placeholder: "Enter Email",
                        value: o,
                        onChange: function (e) {
                          return d(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(n.jsxs)(We.a.Group, {
                    controlId: "password",
                    children: [
                      Object(n.jsx)(We.a.Label, { children: "Password" }),
                      Object(n.jsx)(We.a.Control, {
                        type: "password",
                        placeholder: "Enter Password",
                        value: u,
                        onChange: function (e) {
                          return p(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(n.jsx)(Xe.a, {
                    type: "submit",
                    variant: "primary",
                    children: "Sign In",
                  }),
                ],
              }),
              Object(n.jsx)(st.a, {
                className: "py-3",
                children: Object(n.jsxs)(it.a, {
                  children: [
                    "New Customer? ",
                    Object(n.jsx)(Qe.Link, {
                      to: b ? "/register?redirect=".concat(b) : "/register",
                      children: "Register",
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var kt = function (e) {
          var t = e.location,
            r = e.history,
            c = Object(a.useState)(""),
            s = Object(He.a)(c, 2),
            o = s[0],
            d = s[1],
            l = Object(a.useState)(""),
            j = Object(He.a)(l, 2),
            u = j[0],
            p = j[1],
            h = Object(a.useState)(""),
            b = Object(He.a)(h, 2),
            O = b[0],
            x = b[1],
            f = Object(a.useState)(""),
            m = Object(He.a)(f, 2),
            g = m[0],
            v = m[1],
            y = Object(a.useState)(""),
            E = Object(He.a)(y, 2),
            S = E[0],
            I = E[1],
            C = Object(i.b)(),
            _ = t.search ? t.search.split("=")[1] : "/",
            R = Object(i.c)(function (e) {
              return e.userRegister;
            }),
            L = R.error,
            k = R.loading,
            T = R.userInfo;
          return (
            Object(a.useEffect)(
              function () {
                T && r.push(_);
              },
              [r, T, _]
            ),
            Object(n.jsxs)(Rt, {
              children: [
                Object(n.jsx)("h1", { children: "Sign In" }),
                S && Object(n.jsx)(bt, { variant: "danger", children: S }),
                L && Object(n.jsx)(bt, { variant: "danger", children: L }),
                k && Object(n.jsx)(pt, {}),
                Object(n.jsxs)(We.a, {
                  onSubmit: function (e) {
                    e.preventDefault(),
                      O != g
                        ? I("Passwords do not match")
                        : C(
                            (function (e, t, r) {
                              return (function () {
                                var n = Object(tt.a)(
                                  et.a.mark(function n(a) {
                                    var c, s, i;
                                    return et.a.wrap(
                                      function (n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              return (
                                                (n.prev = 0),
                                                a({ type: V }),
                                                (c = {
                                                  headers: {
                                                    "Content-type":
                                                      "application/json",
                                                  },
                                                }),
                                                (n.next = 5),
                                                nt.a.post(
                                                  "/api/users/register/",
                                                  {
                                                    name: e,
                                                    email: t,
                                                    password: r,
                                                  },
                                                  c
                                                )
                                              );
                                            case 5:
                                              (s = n.sent),
                                                (i = s.data),
                                                a({ type: J, payload: i }),
                                                a({ type: Q, payload: i }),
                                                localStorage.setItem(
                                                  "userInfo",
                                                  JSON.stringify(i)
                                                ),
                                                (n.next = 15);
                                              break;
                                            case 12:
                                              (n.prev = 12),
                                                (n.t0 = n.catch(0)),
                                                a({
                                                  type: Y,
                                                  payload:
                                                    n.t0.response &&
                                                    n.t0.response.data.detail
                                                      ? n.t0.response.data
                                                          .detail
                                                      : n.t0.message,
                                                });
                                            case 15:
                                            case "end":
                                              return n.stop();
                                          }
                                      },
                                      n,
                                      null,
                                      [[0, 12]]
                                    );
                                  })
                                );
                                return function (e) {
                                  return n.apply(this, arguments);
                                };
                              })();
                            })(o, u, O)
                          );
                  },
                  children: [
                    Object(n.jsxs)(We.a.Group, {
                      controlId: "name",
                      children: [
                        Object(n.jsx)(We.a.Label, { children: "Name" }),
                        Object(n.jsx)(We.a.Control, {
                          required: !0,
                          type: "name",
                          placeholder: "Enter name",
                          value: o,
                          onChange: function (e) {
                            return d(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(n.jsxs)(We.a.Group, {
                      controlId: "email",
                      children: [
                        Object(n.jsx)(We.a.Label, {
                          children: "Email Address",
                        }),
                        Object(n.jsx)(We.a.Control, {
                          required: !0,
                          type: "email",
                          placeholder: "Enter Email",
                          value: u,
                          onChange: function (e) {
                            return p(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(n.jsxs)(We.a.Group, {
                      controlId: "password",
                      children: [
                        Object(n.jsx)(We.a.Label, { children: "Password" }),
                        Object(n.jsx)(We.a.Control, {
                          required: !0,
                          type: "password",
                          placeholder: "Enter Password",
                          value: O,
                          onChange: function (e) {
                            return x(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(n.jsxs)(We.a.Group, {
                      controlId: "passwordConfirm",
                      children: [
                        Object(n.jsx)(We.a.Label, {
                          children: "Confirm Password",
                        }),
                        Object(n.jsx)(We.a.Control, {
                          required: !0,
                          type: "password",
                          placeholder: "Confirm Password",
                          value: g,
                          onChange: function (e) {
                            return v(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(n.jsx)(Xe.a, {
                      type: "submit",
                      variant: "primary",
                      children: "Register",
                    }),
                  ],
                }),
                Object(n.jsx)(st.a, {
                  className: "py-3",
                  children: Object(n.jsxs)(it.a, {
                    children: [
                      "Have an Account? ",
                      Object(n.jsx)(Qe.Link, {
                        to: _ ? "/login?redirect=".concat(_) : "/login",
                        children: "Sign In",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Tt = r(123);
      var At = function (e) {
        var t = e.history,
          r = Object(a.useState)(""),
          c = Object(He.a)(r, 2),
          s = c[0],
          o = c[1],
          d = Object(a.useState)(""),
          l = Object(He.a)(d, 2),
          j = l[0],
          u = l[1],
          p = Object(a.useState)(""),
          h = Object(He.a)(p, 2),
          b = h[0],
          O = h[1],
          x = Object(a.useState)(""),
          f = Object(He.a)(x, 2),
          m = f[0],
          g = f[1],
          v = Object(a.useState)(""),
          y = Object(He.a)(v, 2),
          E = y[0],
          S = y[1],
          I = Object(i.b)(),
          C = Object(i.c)(function (e) {
            return e.userDetails;
          }),
          _ = C.error,
          R = C.loading,
          L = C.user,
          k = Object(i.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          T = Object(i.c)(function (e) {
            return e.userUpdateProfile;
          }).success,
          A = Object(i.c)(function (e) {
            return e.orderListMy;
          }),
          P = A.loading,
          w = A.error,
          D = A.orders;
        return (
          Object(a.useEffect)(
            function () {
              k
                ? L && L.name && !T && k._id === L._id
                  ? (o(L.name), u(L.email))
                  : (I({ type: re }),
                    I(at("profile")),
                    I(
                      (function () {
                        var e = Object(tt.a)(
                          et.a.mark(function e(t, r) {
                            var n, a, c, s, i;
                            return et.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        t({ type: Ie }),
                                        (n = r()),
                                        (a = n.userLogin.userInfo),
                                        (c = {
                                          headers: {
                                            "Content-type": "application/json",
                                            Authorization: "Bearer ".concat(
                                              a.token
                                            ),
                                          },
                                        }),
                                        (e.next = 6),
                                        nt.a.get("/api/orders/myorders/", c)
                                      );
                                    case 6:
                                      (s = e.sent),
                                        (i = s.data),
                                        t({ type: Ce, payload: i }),
                                        (e.next = 14);
                                      break;
                                    case 11:
                                      (e.prev = 11),
                                        (e.t0 = e.catch(0)),
                                        t({
                                          type: _e,
                                          payload:
                                            e.t0.response &&
                                            e.t0.response.data.detail
                                              ? e.t0.response.data.detail
                                              : e.t0.message,
                                        });
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (t, r) {
                          return e.apply(this, arguments);
                        };
                      })()
                    ))
                : t.push("/login");
            },
            [I, t, k, L, T]
          ),
          Object(n.jsxs)(st.a, {
            children: [
              Object(n.jsxs)(it.a, {
                md: 3,
                children: [
                  Object(n.jsx)("h2", { children: "User Profile" }),
                  E && Object(n.jsx)(bt, { variant: "danger", children: E }),
                  _ && Object(n.jsx)(bt, { variant: "danger", children: _ }),
                  R && Object(n.jsx)(pt, {}),
                  Object(n.jsxs)(We.a, {
                    onSubmit: function (e) {
                      e.preventDefault(),
                        b != m
                          ? S("Passwords do not match")
                          : (I(
                              (function (e) {
                                return (function () {
                                  var t = Object(tt.a)(
                                    et.a.mark(function t(r, n) {
                                      var a, c, s, i, o;
                                      return et.a.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  r({ type: K }),
                                                  (a = n()),
                                                  (c = a.userLogin.userInfo),
                                                  (s = {
                                                    headers: {
                                                      "Content-type":
                                                        "application/json",
                                                      Authorization:
                                                        "Bearer ".concat(
                                                          c.token
                                                        ),
                                                    },
                                                  }),
                                                  (t.next = 6),
                                                  nt.a.put(
                                                    "/api/users/profile/update/",
                                                    e,
                                                    s
                                                  )
                                                );
                                              case 6:
                                                (i = t.sent),
                                                  (o = i.data),
                                                  r({ type: ee, payload: o }),
                                                  r({ type: Q, payload: o }),
                                                  localStorage.setItem(
                                                    "userInfo",
                                                    JSON.stringify(o)
                                                  ),
                                                  (t.next = 16);
                                                break;
                                              case 13:
                                                (t.prev = 13),
                                                  (t.t0 = t.catch(0)),
                                                  r({
                                                    type: te,
                                                    payload:
                                                      t.t0.response &&
                                                      t.t0.response.data.detail
                                                        ? t.t0.response.data
                                                            .detail
                                                        : t.t0.message,
                                                  });
                                              case 16:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 13]]
                                      );
                                    })
                                  );
                                  return function (e, r) {
                                    return t.apply(this, arguments);
                                  };
                                })();
                              })({ id: L._id, name: s, email: j, password: b })
                            ),
                            S(""));
                    },
                    children: [
                      Object(n.jsxs)(We.a.Group, {
                        controlId: "name",
                        children: [
                          Object(n.jsx)(We.a.Label, { children: "Name" }),
                          Object(n.jsx)(We.a.Control, {
                            required: !0,
                            type: "name",
                            placeholder: "Enter name",
                            value: s,
                            onChange: function (e) {
                              return o(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(n.jsxs)(We.a.Group, {
                        controlId: "email",
                        children: [
                          Object(n.jsx)(We.a.Label, {
                            children: "Email Address",
                          }),
                          Object(n.jsx)(We.a.Control, {
                            required: !0,
                            type: "email",
                            placeholder: "Enter Email",
                            value: j,
                            onChange: function (e) {
                              return u(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(n.jsxs)(We.a.Group, {
                        controlId: "password",
                        children: [
                          Object(n.jsx)(We.a.Label, { children: "Password" }),
                          Object(n.jsx)(We.a.Control, {
                            type: "password",
                            placeholder: "Enter Password",
                            value: b,
                            onChange: function (e) {
                              return O(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(n.jsxs)(We.a.Group, {
                        controlId: "passwordConfirm",
                        children: [
                          Object(n.jsx)(We.a.Label, {
                            children: "Confirm Password",
                          }),
                          Object(n.jsx)(We.a.Control, {
                            type: "password",
                            placeholder: "Confirm Password",
                            value: m,
                            onChange: function (e) {
                              return g(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(n.jsx)(Xe.a, {
                        type: "submit",
                        variant: "primary",
                        children: "Update",
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsxs)(it.a, {
                md: 9,
                children: [
                  Object(n.jsx)("h2", { children: "My Orders" }),
                  P
                    ? Object(n.jsx)(pt, {})
                    : w
                    ? Object(n.jsx)(bt, { variant: "danger", children: w })
                    : Object(n.jsxs)(Tt.a, {
                        striped: !0,
                        responsive: !0,
                        className: "table-sm",
                        children: [
                          Object(n.jsx)("thead", {
                            children: Object(n.jsxs)("tr", {
                              children: [
                                Object(n.jsx)("th", { children: "ID" }),
                                Object(n.jsx)("th", { children: "Date" }),
                                Object(n.jsx)("th", { children: "Total" }),
                                Object(n.jsx)("th", { children: "Paid" }),
                                Object(n.jsx)("th", { children: "Delivered" }),
                                Object(n.jsx)("th", {}),
                              ],
                            }),
                          }),
                          Object(n.jsx)("tbody", {
                            children: D.map(function (e) {
                              return Object(n.jsxs)(
                                "tr",
                                {
                                  children: [
                                    Object(n.jsx)("td", { children: e._id }),
                                    Object(n.jsx)("td", {
                                      children: e.createdAt.substring(0, 10),
                                    }),
                                    Object(n.jsxs)("td", {
                                      children: ["$", e.totalPrice],
                                    }),
                                    Object(n.jsx)("td", {
                                      children: e.isPaid
                                        ? e.paidAt.substring(0, 10)
                                        : Object(n.jsx)("i", {
                                            className: "fas fa-times",
                                            style: { color: "red" },
                                          }),
                                    }),
                                    Object(n.jsx)("td", {
                                      children: Object(n.jsx)(
                                        Ye.LinkContainer,
                                        {
                                          to: "/order/".concat(e._id),
                                          children: Object(n.jsx)(Xe.a, {
                                            className: "btn-sm",
                                            children: "Details",
                                          }),
                                        }
                                      ),
                                    }),
                                  ],
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          })
        );
      };
      var Pt = function (e) {
        var t = e.step1,
          r = e.step2,
          a = e.step3,
          c = e.step4;
        return Object(n.jsxs)(Ve.a, {
          className: "justify-content-center mb-4",
          children: [
            Object(n.jsx)(Ve.a.Item, {
              children: t
                ? Object(n.jsx)(Ye.LinkContainer, {
                    to: "/login",
                    children: Object(n.jsx)(Ve.a.Link, { children: "Login" }),
                  })
                : Object(n.jsx)(Ve.a.Link, { disabled: !0, children: "Login" }),
            }),
            Object(n.jsx)(Ve.a.Item, {
              children: r
                ? Object(n.jsx)(Ye.LinkContainer, {
                    to: "/shipping",
                    children: Object(n.jsx)(Ve.a.Link, {
                      children: "Shipping",
                    }),
                  })
                : Object(n.jsx)(Ve.a.Link, {
                    disabled: !0,
                    children: "Shipping",
                  }),
            }),
            Object(n.jsx)(Ve.a.Item, {
              children: a
                ? Object(n.jsx)(Ye.LinkContainer, {
                    to: "/payment",
                    children: Object(n.jsx)(Ve.a.Link, { children: "Payment" }),
                  })
                : Object(n.jsx)(Ve.a.Link, {
                    disabled: !0,
                    children: "Payment",
                  }),
            }),
            Object(n.jsx)(Ve.a.Item, {
              children: c
                ? Object(n.jsx)(Ye.LinkContainer, {
                    to: "/placeorder",
                    children: Object(n.jsx)(Ve.a.Link, {
                      children: "Place Order",
                    }),
                  })
                : Object(n.jsx)(Ve.a.Link, {
                    disabled: !0,
                    children: "Place Order",
                  }),
            }),
          ],
        });
      };
      var wt = function (e) {
        var t = e.history,
          r = Object(i.c)(function (e) {
            return e.cart;
          }).shippingAddress,
          c = Object(i.b)(),
          s = Object(a.useState)(r.address),
          o = Object(He.a)(s, 2),
          d = o[0],
          l = o[1],
          j = Object(a.useState)(r.city),
          u = Object(He.a)(j, 2),
          p = u[0],
          h = u[1],
          b = Object(a.useState)(r.postalCode),
          O = Object(He.a)(b, 2),
          x = O[0],
          f = O[1],
          m = Object(a.useState)(r.country),
          g = Object(He.a)(m, 2),
          v = g[0],
          y = g[1];
        return Object(n.jsxs)(Rt, {
          children: [
            Object(n.jsx)(Pt, { step1: !0, step2: !0 }),
            Object(n.jsx)("h1", { children: "Shipping" }),
            Object(n.jsxs)(We.a, {
              onSubmit: function (e) {
                var r;
                e.preventDefault(),
                  c(
                    ((r = { address: d, city: p, postalCode: x, country: v }),
                    function (e) {
                      e({ type: F, payload: r }),
                        localStorage.setItem(
                          "shippingAddress",
                          JSON.stringify(r)
                        );
                    })
                  ),
                  t.push("/payment");
              },
              children: [
                Object(n.jsxs)(We.a.Group, {
                  controlId: "address",
                  children: [
                    Object(n.jsx)(We.a.Label, { children: "Address" }),
                    Object(n.jsx)(We.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter address",
                      value: d || "",
                      onChange: function (e) {
                        return l(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(n.jsxs)(We.a.Group, {
                  controlId: "city",
                  children: [
                    Object(n.jsx)(We.a.Label, { children: "City" }),
                    Object(n.jsx)(We.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter city",
                      value: p || "",
                      onChange: function (e) {
                        return h(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(n.jsxs)(We.a.Group, {
                  controlId: "postalCode",
                  children: [
                    Object(n.jsx)(We.a.Label, { children: "Postal Code" }),
                    Object(n.jsx)(We.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter postal code",
                      value: x || "",
                      onChange: function (e) {
                        return f(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(n.jsxs)(We.a.Group, {
                  controlId: "country",
                  children: [
                    Object(n.jsx)(We.a.Label, { children: "Country" }),
                    Object(n.jsx)(We.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter country",
                      value: v || "",
                      onChange: function (e) {
                        return y(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(n.jsx)(Xe.a, {
                  type: "submit",
                  variant: "primary",
                  children: "Continue",
                }),
              ],
            }),
          ],
        });
      };
      var Dt = function (e) {
        var t = e.history,
          r = Object(i.c)(function (e) {
            return e.cart;
          }).shippingAddress,
          c = Object(i.b)(),
          s = Object(a.useState)("PayPal"),
          o = Object(He.a)(s, 2),
          d = o[0],
          l = o[1];
        return (
          r.address || t.push("/shipping"),
          Object(n.jsxs)(Rt, {
            children: [
              Object(n.jsx)(Pt, { step1: !0, step2: !0, step3: !0 }),
              Object(n.jsxs)(We.a, {
                onSubmit: function (e) {
                  var r;
                  e.preventDefault(),
                    c(
                      ((r = d),
                      function (e) {
                        e({ type: M, payload: r }),
                          localStorage.setItem(
                            "paymentMethod",
                            JSON.stringify(r)
                          );
                      })
                    ),
                    t.push("/placeorder");
                },
                children: [
                  Object(n.jsxs)(We.a.Group, {
                    children: [
                      Object(n.jsx)(We.a.Label, {
                        as: "legend",
                        children: "Select Method",
                      }),
                      Object(n.jsx)(it.a, {
                        children: Object(n.jsx)(We.a.Check, {
                          type: "radio",
                          label: "PayPal or Credit Card",
                          id: "paypal",
                          name: "paymentMethod",
                          checked: !0,
                          onChange: function (e) {
                            return l(e.target.value);
                          },
                        }),
                      }),
                    ],
                  }),
                  Object(n.jsx)(Xe.a, {
                    type: "submit",
                    variant: "primary",
                    children: "Continue",
                  }),
                ],
              }),
            ],
          })
        );
      };
      var Ut = function (e) {
          var t = e.history,
            r = Object(i.c)(function (e) {
              return e.orderCreate;
            }),
            c = r.order,
            s = r.error,
            o = r.success,
            d = Object(i.b)(),
            l = Object(i.c)(function (e) {
              return e.cart;
            });
          return (
            (l.itemsPrice = l.cartItems
              .reduce(function (e, t) {
                return e + t.price * t.qty;
              }, 0)
              .toFixed(2)),
            (l.shippingPrice = (l.itemsPrice > 100 ? 0 : 10).toFixed(2)),
            (l.taxPrice = Number(0.082 * l.itemsPrice).toFixed(2)),
            (l.totalPrice = (
              Number(l.itemsPrice) +
              Number(l.shippingPrice) +
              Number(l.taxPrice)
            ).toFixed(2)),
            l.paymentMethod || t.push("/payment"),
            Object(a.useEffect)(
              function () {
                o && (t.push("/order/".concat(c._id)), d({ type: xe }));
              },
              [o, t]
            ),
            Object(n.jsxs)("div", {
              children: [
                Object(n.jsx)(Pt, {
                  step1: !0,
                  step2: !0,
                  step3: !0,
                  step4: !0,
                }),
                Object(n.jsxs)(st.a, {
                  children: [
                    Object(n.jsx)(it.a, {
                      md: 8,
                      children: Object(n.jsxs)(St.a, {
                        variant: "flush",
                        children: [
                          Object(n.jsxs)(St.a.Item, {
                            children: [
                              Object(n.jsx)("h2", { children: "Shipping" }),
                              Object(n.jsxs)("p", {
                                children: [
                                  Object(n.jsx)("strong", {
                                    children: "Shipping: ",
                                  }),
                                  l.shippingAddress.address,
                                  ",  ",
                                  l.shippingAddress.city,
                                  "  ",
                                  l.shippingAddress.postalCode,
                                  ",",
                                  "  ",
                                  l.shippingAddress.country,
                                ],
                              }),
                            ],
                          }),
                          Object(n.jsxs)(St.a.Item, {
                            children: [
                              Object(n.jsx)("h2", {
                                children: "Payment Method",
                              }),
                              Object(n.jsxs)("p", {
                                children: [
                                  Object(n.jsx)("strong", {
                                    children: "Method: ",
                                  }),
                                  l.paymentMethod,
                                ],
                              }),
                            ],
                          }),
                          Object(n.jsxs)(St.a.Item, {
                            children: [
                              Object(n.jsx)("h2", { children: "Order Items" }),
                              0 === l.cartItems.length
                                ? Object(n.jsx)(bt, {
                                    variant: "info",
                                    children: "Your cart is empty",
                                  })
                                : Object(n.jsx)(St.a, {
                                    variant: "flush",
                                    children: l.cartItems.map(function (e, t) {
                                      return Object(n.jsx)(
                                        St.a.Item,
                                        {
                                          children: Object(n.jsxs)(st.a, {
                                            children: [
                                              Object(n.jsx)(it.a, {
                                                md: 1,
                                                children: Object(n.jsx)(mt.a, {
                                                  src: e.image,
                                                  alt: e.name,
                                                  fluid: !0,
                                                  rounded: !0,
                                                }),
                                              }),
                                              Object(n.jsx)(it.a, {
                                                children: Object(n.jsx)(
                                                  Qe.Link,
                                                  {
                                                    to: "/product/".concat(
                                                      e.product
                                                    ),
                                                    children: e.name,
                                                  }
                                                ),
                                              }),
                                              Object(n.jsxs)(it.a, {
                                                md: 4,
                                                children: [
                                                  e.qty,
                                                  " X $",
                                                  e.price,
                                                  " = $",
                                                  (e.qty * e.price).toFixed(2),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        t
                                      );
                                    }),
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsx)(it.a, {
                      md: 4,
                      children: Object(n.jsx)(dt.a, {
                        children: Object(n.jsxs)(St.a, {
                          variant: "flush",
                          children: [
                            Object(n.jsx)(St.a.Item, {
                              children: Object(n.jsx)("h2", {
                                children: "Order Summary",
                              }),
                            }),
                            Object(n.jsx)(St.a.Item, {
                              children: Object(n.jsxs)(st.a, {
                                children: [
                                  Object(n.jsx)(it.a, { children: "Items:" }),
                                  Object(n.jsxs)(it.a, {
                                    children: ["$", l.itemsPrice],
                                  }),
                                ],
                              }),
                            }),
                            Object(n.jsx)(St.a.Item, {
                              children: Object(n.jsxs)(st.a, {
                                children: [
                                  Object(n.jsx)(it.a, {
                                    children: "Shipping:",
                                  }),
                                  Object(n.jsxs)(it.a, {
                                    children: ["$", l.shippingPrice],
                                  }),
                                ],
                              }),
                            }),
                            Object(n.jsx)(St.a.Item, {
                              children: Object(n.jsxs)(st.a, {
                                children: [
                                  Object(n.jsx)(it.a, { children: "Tax:" }),
                                  Object(n.jsxs)(it.a, {
                                    children: ["$", l.taxPrice],
                                  }),
                                ],
                              }),
                            }),
                            Object(n.jsx)(St.a.Item, {
                              children: Object(n.jsxs)(st.a, {
                                children: [
                                  Object(n.jsx)(it.a, { children: "Total:" }),
                                  Object(n.jsxs)(it.a, {
                                    children: ["$", l.totalPrice],
                                  }),
                                ],
                              }),
                            }),
                            Object(n.jsx)(St.a.Item, {
                              children:
                                s &&
                                Object(n.jsx)(bt, {
                                  variant: "danger",
                                  children: s,
                                }),
                            }),
                            Object(n.jsx)(St.a.Item, {
                              children: Object(n.jsx)(Xe.a, {
                                type: "button",
                                className: "btn-block",
                                disabled: 0 === l.cartItems,
                                onClick: function () {
                                  d(
                                    (function (e) {
                                      return (function () {
                                        var t = Object(tt.a)(
                                          et.a.mark(function t(r, n) {
                                            var a, c, s, i, o;
                                            return et.a.wrap(
                                              function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        (t.prev = 0),
                                                        r({ type: he }),
                                                        (a = n()),
                                                        (c =
                                                          a.userLogin.userInfo),
                                                        (s = {
                                                          headers: {
                                                            "Content-type":
                                                              "application/json",
                                                            Authorization:
                                                              "Bearer ".concat(
                                                                c.token
                                                              ),
                                                          },
                                                        }),
                                                        (t.next = 6),
                                                        nt.a.post(
                                                          "/api/orders/add/",
                                                          e,
                                                          s
                                                        )
                                                      );
                                                    case 6:
                                                      (i = t.sent),
                                                        (o = i.data),
                                                        r({
                                                          type: be,
                                                          payload: o,
                                                        }),
                                                        r({
                                                          type: B,
                                                          payload: o,
                                                        }),
                                                        localStorage.removeItem(
                                                          "cartItems"
                                                        ),
                                                        (t.next = 16);
                                                      break;
                                                    case 13:
                                                      (t.prev = 13),
                                                        (t.t0 = t.catch(0)),
                                                        r({
                                                          type: Oe,
                                                          payload:
                                                            t.t0.response &&
                                                            t.t0.response.data
                                                              .detail
                                                              ? t.t0.response
                                                                  .data.detail
                                                              : t.t0.message,
                                                        });
                                                    case 16:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              },
                                              t,
                                              null,
                                              [[0, 13]]
                                            );
                                          })
                                        );
                                        return function (e, r) {
                                          return t.apply(this, arguments);
                                        };
                                      })();
                                    })({
                                      orderItems: l.cartItems,
                                      shippingAddress: l.shippingAddress,
                                      paymentMethod: l.paymentMethod,
                                      itemsPrice: l.itemsPrice,
                                      shippingPrice: l.shippingPrice,
                                      taxPrice: l.taxPrice,
                                      totalPrice: l.totalPrice,
                                    })
                                  );
                                },
                                children: "Place Order",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Nt = r(78);
      var Gt = function (e) {
        var t = e.match,
          r = e.history,
          c = t.params.id,
          s = Object(i.b)(),
          o = Object(a.useState)(!1),
          d = Object(He.a)(o, 2),
          l = d[0],
          j = d[1],
          u = Object(i.c)(function (e) {
            return e.orderDetails;
          }),
          p = u.order,
          h = u.error,
          b = u.loading,
          O = Object(i.c)(function (e) {
            return e.orderPay;
          }),
          x = O.loading,
          f = O.success,
          m = Object(i.c)(function (e) {
            return e.orderDeliver;
          }),
          g = m.loading,
          v = m.success,
          y = Object(i.c)(function (e) {
            return e.userLogin;
          }).userInfo;
        return (
          b ||
            h ||
            (p.itemsPrice = p.orderItems
              .reduce(function (e, t) {
                return e + t.price * t.qty;
              }, 0)
              .toFixed(2)),
          Object(a.useEffect)(
            function () {
              var e;
              y || r.push("/login"),
                !p || f || p._id !== Number(c) || v
                  ? (s({ type: Se }),
                    s({ type: De }),
                    s(
                      ((e = c),
                      (function () {
                        var t = Object(tt.a)(
                          et.a.mark(function t(r, n) {
                            var a, c, s, i, o;
                            return et.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        r({ type: fe }),
                                        (a = n()),
                                        (c = a.userLogin.userInfo),
                                        (s = {
                                          headers: {
                                            "Content-type": "application/json",
                                            Authorization: "Bearer ".concat(
                                              c.token
                                            ),
                                          },
                                        }),
                                        (t.next = 6),
                                        nt.a.get(
                                          "/api/orders/".concat(e, "/"),
                                          s
                                        )
                                      );
                                    case 6:
                                      (i = t.sent),
                                        (o = i.data),
                                        r({ type: me, payload: o }),
                                        (t.next = 14);
                                      break;
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(0)),
                                        r({
                                          type: ge,
                                          payload:
                                            t.t0.response &&
                                            t.t0.response.data.detail
                                              ? t.t0.response.data.detail
                                              : t.t0.message,
                                        });
                                    case 14:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e, r) {
                          return t.apply(this, arguments);
                        };
                      })())
                    ))
                  : p.isPaid ||
                    (window.paypal
                      ? j(!0)
                      : (function () {
                          var e = document.createElement("script");
                          (e.type = "text/javascript"),
                            (e.src =
                              "https://www.paypal.com/sdk/js?client-id=AeDXja18CkwFUkL-HQPySbzZsiTrN52cG13mf9Yz7KiV2vNnGfTDP0wDEN9sGlhZHrbb_USawcJzVDgn"),
                            (e.async = !0),
                            (e.onload = function () {
                              j(!0);
                            }),
                            document.body.appendChild(e);
                        })());
            },
            [s, p, c, f, v]
          ),
          b
            ? Object(n.jsx)(pt, {})
            : h
            ? Object(n.jsx)(bt, { variant: "danger", children: h })
            : Object(n.jsxs)("div", {
                children: [
                  Object(n.jsxs)("h1", { children: ["Order: ", p.Id] }),
                  Object(n.jsxs)(st.a, {
                    children: [
                      Object(n.jsx)(it.a, {
                        md: 8,
                        children: Object(n.jsxs)(St.a, {
                          variant: "flush",
                          children: [
                            Object(n.jsxs)(St.a.Item, {
                              children: [
                                Object(n.jsx)("h2", { children: "Shipping" }),
                                Object(n.jsxs)("p", {
                                  children: [
                                    Object(n.jsx)("strong", {
                                      children: "Name: ",
                                    }),
                                    " ",
                                    p.user.name,
                                  ],
                                }),
                                Object(n.jsxs)("p", {
                                  children: [
                                    Object(n.jsx)("strong", {
                                      children: "Email: ",
                                    }),
                                    Object(n.jsx)("a", {
                                      href: "mailto:".concat(p.user.email),
                                      children: p.user.email,
                                    }),
                                  ],
                                }),
                                Object(n.jsxs)("p", {
                                  children: [
                                    Object(n.jsx)("strong", {
                                      children: "Shipping: ",
                                    }),
                                    p.shippingAddress.address,
                                    ",  ",
                                    p.shippingAddress.city,
                                    "  ",
                                    p.shippingAddress.postalCode,
                                    ",",
                                    "  ",
                                    p.shippingAddress.country,
                                  ],
                                }),
                                p.isDelivered
                                  ? Object(n.jsxs)(bt, {
                                      variant: "success",
                                      children: [
                                        "Delivered on ",
                                        p.deliveredAt,
                                      ],
                                    })
                                  : Object(n.jsx)(bt, {
                                      variant: "warning",
                                      children: "Not Delivered",
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(St.a.Item, {
                              children: [
                                Object(n.jsx)("h2", {
                                  children: "Payment Method",
                                }),
                                Object(n.jsxs)("p", {
                                  children: [
                                    Object(n.jsx)("strong", {
                                      children: "Method: ",
                                    }),
                                    p.paymentMethod,
                                  ],
                                }),
                                p.isPaid
                                  ? Object(n.jsxs)(bt, {
                                      variant: "success",
                                      children: ["Paid on ", p.paidAt],
                                    })
                                  : Object(n.jsx)(bt, {
                                      variant: "warning",
                                      children: "Not Paid",
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(St.a.Item, {
                              children: [
                                Object(n.jsx)("h2", {
                                  children: "Order Items",
                                }),
                                0 === p.orderItems.length
                                  ? Object(n.jsx)(bt, {
                                      variant: "info",
                                      children: "Order is empty",
                                    })
                                  : Object(n.jsx)(St.a, {
                                      variant: "flush",
                                      children: p.orderItems.map(function (
                                        e,
                                        t
                                      ) {
                                        return Object(n.jsx)(
                                          St.a.Item,
                                          {
                                            children: Object(n.jsxs)(st.a, {
                                              children: [
                                                Object(n.jsx)(it.a, {
                                                  md: 1,
                                                  children: Object(n.jsx)(
                                                    mt.a,
                                                    {
                                                      src: e.image,
                                                      alt: e.name,
                                                      fluid: !0,
                                                      rounded: !0,
                                                    }
                                                  ),
                                                }),
                                                Object(n.jsx)(it.a, {
                                                  children: Object(n.jsx)(
                                                    Qe.Link,
                                                    {
                                                      to: "/product/".concat(
                                                        e.product
                                                      ),
                                                      children: e.name,
                                                    }
                                                  ),
                                                }),
                                                Object(n.jsxs)(it.a, {
                                                  md: 4,
                                                  children: [
                                                    e.qty,
                                                    " X $",
                                                    e.price,
                                                    " = $",
                                                    (e.qty * e.price).toFixed(
                                                      2
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          },
                                          t
                                        );
                                      }),
                                    }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsx)(it.a, {
                        md: 4,
                        children: Object(n.jsxs)(dt.a, {
                          children: [
                            Object(n.jsxs)(St.a, {
                              variant: "flush",
                              children: [
                                Object(n.jsx)(St.a.Item, {
                                  children: Object(n.jsx)("h2", {
                                    children: "Order Summary",
                                  }),
                                }),
                                Object(n.jsx)(St.a.Item, {
                                  children: Object(n.jsxs)(st.a, {
                                    children: [
                                      Object(n.jsx)(it.a, {
                                        children: "Items:",
                                      }),
                                      Object(n.jsxs)(it.a, {
                                        children: ["$", p.itemsPrice],
                                      }),
                                    ],
                                  }),
                                }),
                                Object(n.jsx)(St.a.Item, {
                                  children: Object(n.jsxs)(st.a, {
                                    children: [
                                      Object(n.jsx)(it.a, {
                                        children: "Shipping:",
                                      }),
                                      Object(n.jsxs)(it.a, {
                                        children: ["$", p.shippingPrice],
                                      }),
                                    ],
                                  }),
                                }),
                                Object(n.jsx)(St.a.Item, {
                                  children: Object(n.jsxs)(st.a, {
                                    children: [
                                      Object(n.jsx)(it.a, { children: "Tax:" }),
                                      Object(n.jsxs)(it.a, {
                                        children: ["$", p.taxPrice],
                                      }),
                                    ],
                                  }),
                                }),
                                Object(n.jsx)(St.a.Item, {
                                  children: Object(n.jsxs)(st.a, {
                                    children: [
                                      Object(n.jsx)(it.a, {
                                        children: "Total:",
                                      }),
                                      Object(n.jsxs)(it.a, {
                                        children: ["$", p.totalPrice],
                                      }),
                                    ],
                                  }),
                                }),
                                !p.isPaid &&
                                  Object(n.jsxs)(St.a.Item, {
                                    children: [
                                      x && Object(n.jsx)(pt, {}),
                                      l
                                        ? Object(n.jsx)(Nt.PayPalButton, {
                                            amount: p.totalPrice,
                                            onSuccess: function (e) {
                                              s(
                                                (function (e, t) {
                                                  return (function () {
                                                    var r = Object(tt.a)(
                                                      et.a.mark(function r(
                                                        n,
                                                        a
                                                      ) {
                                                        var c, s, i, o, d;
                                                        return et.a.wrap(
                                                          function (r) {
                                                            for (;;)
                                                              switch (
                                                                (r.prev =
                                                                  r.next)
                                                              ) {
                                                                case 0:
                                                                  return (
                                                                    (r.prev = 0),
                                                                    n({
                                                                      type: ve,
                                                                    }),
                                                                    (c = a()),
                                                                    (s =
                                                                      c
                                                                        .userLogin
                                                                        .userInfo),
                                                                    (i = {
                                                                      headers: {
                                                                        "Content-type":
                                                                          "application/json",
                                                                        Authorization:
                                                                          "Bearer ".concat(
                                                                            s.token
                                                                          ),
                                                                      },
                                                                    }),
                                                                    (r.next = 6),
                                                                    nt.a.put(
                                                                      "/api/orders/".concat(
                                                                        e,
                                                                        "/pay/"
                                                                      ),
                                                                      t,
                                                                      i
                                                                    )
                                                                  );
                                                                case 6:
                                                                  (o = r.sent),
                                                                    (d =
                                                                      o.data),
                                                                    n({
                                                                      type: ye,
                                                                      payload:
                                                                        d,
                                                                    }),
                                                                    (r.next = 14);
                                                                  break;
                                                                case 11:
                                                                  (r.prev = 11),
                                                                    (r.t0 =
                                                                      r.catch(
                                                                        0
                                                                      )),
                                                                    n({
                                                                      type: Ee,
                                                                      payload:
                                                                        r.t0
                                                                          .response &&
                                                                        r.t0
                                                                          .response
                                                                          .data
                                                                          .detail
                                                                          ? r.t0
                                                                              .response
                                                                              .data
                                                                              .detail
                                                                          : r.t0
                                                                              .message,
                                                                    });
                                                                case 14:
                                                                case "end":
                                                                  return r.stop();
                                                              }
                                                          },
                                                          r,
                                                          null,
                                                          [[0, 11]]
                                                        );
                                                      })
                                                    );
                                                    return function (e, t) {
                                                      return r.apply(
                                                        this,
                                                        arguments
                                                      );
                                                    };
                                                  })();
                                                })(c, e)
                                              );
                                            },
                                          })
                                        : Object(n.jsx)(pt, {}),
                                    ],
                                  }),
                              ],
                            }),
                            g && Object(n.jsx)(pt, {}),
                            y &&
                              y.isAdmin &&
                              p.isPaid &&
                              !p.isDelivered &&
                              Object(n.jsx)(St.a.Item, {
                                children: Object(n.jsx)(Xe.a, {
                                  type: "button",
                                  className: "btn btn-block",
                                  onClick: function () {
                                    s(
                                      (function (e) {
                                        return (function () {
                                          var t = Object(tt.a)(
                                            et.a.mark(function t(r, n) {
                                              var a, c, s, i, o;
                                              return et.a.wrap(
                                                function (t) {
                                                  for (;;)
                                                    switch ((t.prev = t.next)) {
                                                      case 0:
                                                        return (
                                                          (t.prev = 0),
                                                          r({ type: Ae }),
                                                          (a = n()),
                                                          (c =
                                                            a.userLogin
                                                              .userInfo),
                                                          (s = {
                                                            headers: {
                                                              "Content-type":
                                                                "application/json",
                                                              Authorization:
                                                                "Bearer ".concat(
                                                                  c.token
                                                                ),
                                                            },
                                                          }),
                                                          (t.next = 6),
                                                          nt.a.put(
                                                            "/api/orders/".concat(
                                                              e._id,
                                                              "/deliver/"
                                                            ),
                                                            {},
                                                            s
                                                          )
                                                        );
                                                      case 6:
                                                        (i = t.sent),
                                                          (o = i.data),
                                                          r({
                                                            type: Pe,
                                                            payload: o,
                                                          }),
                                                          (t.next = 14);
                                                        break;
                                                      case 11:
                                                        (t.prev = 11),
                                                          (t.t0 = t.catch(0)),
                                                          r({
                                                            type: we,
                                                            payload:
                                                              t.t0.response &&
                                                              t.t0.response.data
                                                                .detail
                                                                ? t.t0.response
                                                                    .data.detail
                                                                : t.t0.message,
                                                          });
                                                      case 14:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                },
                                                t,
                                                null,
                                                [[0, 11]]
                                              );
                                            })
                                          );
                                          return function (e, r) {
                                            return t.apply(this, arguments);
                                          };
                                        })();
                                      })(p)
                                    );
                                  },
                                  children: "Mark As Delivered",
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
        );
      };
      var Ft = function (e) {
        var t = e.history,
          r = Object(i.b)(),
          c = Object(i.c)(function (e) {
            return e.userList;
          }),
          s = c.loading,
          o = c.error,
          d = c.users,
          l = Object(i.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          j = Object(i.c)(function (e) {
            return e.userDelete;
          }).success;
        Object(a.useEffect)(
          function () {
            l && l.isAdmin
              ? r(
                  (function () {
                    var e = Object(tt.a)(
                      et.a.mark(function e(t, r) {
                        var n, a, c, s, i;
                        return et.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: ne }),
                                    (n = r()),
                                    (a = n.userLogin.userInfo),
                                    (c = {
                                      headers: {
                                        "Content-type": "application/json",
                                        Authorization: "Bearer ".concat(
                                          a.token
                                        ),
                                      },
                                    }),
                                    (e.next = 6),
                                    nt.a.get("/api/users/", c)
                                  );
                                case 6:
                                  (s = e.sent),
                                    (i = s.data),
                                    t({ type: ae, payload: i }),
                                    (e.next = 14);
                                  break;
                                case 11:
                                  (e.prev = 11),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: ce,
                                      payload:
                                        e.t0.response &&
                                        e.t0.response.data.detail
                                          ? e.t0.response.data.detail
                                          : e.t0.message,
                                    });
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 11]]
                        );
                      })
                    );
                    return function (t, r) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
              : t.push("/login");
          },
          [r, t, j, l]
        );
        var u = function (e) {
          window.confirm("Are you sure you want to delete this user?") &&
            r(
              (function (e) {
                return (function () {
                  var t = Object(tt.a)(
                    et.a.mark(function t(r, n) {
                      var a, c, s, i, o;
                      return et.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  r({ type: ie }),
                                  (a = n()),
                                  (c = a.userLogin.userInfo),
                                  (s = {
                                    headers: {
                                      "Content-type": "application/json",
                                      Authorization: "Bearer ".concat(c.token),
                                    },
                                  }),
                                  (t.next = 6),
                                  nt.a.delete(
                                    "/api/users/delete/".concat(e, "/"),
                                    s
                                  )
                                );
                              case 6:
                                (i = t.sent),
                                  (o = i.data),
                                  r({ type: oe, payload: o }),
                                  (t.next = 14);
                                break;
                              case 11:
                                (t.prev = 11),
                                  (t.t0 = t.catch(0)),
                                  r({
                                    type: de,
                                    payload:
                                      t.t0.response && t.t0.response.data.detail
                                        ? t.t0.response.data.detail
                                        : t.t0.message,
                                  });
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 11]]
                      );
                    })
                  );
                  return function (e, r) {
                    return t.apply(this, arguments);
                  };
                })();
              })(e)
            );
        };
        return Object(n.jsxs)("div", {
          children: [
            Object(n.jsx)("h1", { children: "Users" }),
            s
              ? Object(n.jsx)(pt, {})
              : o
              ? Object(n.jsx)(bt, { variant: "danger", children: o })
              : Object(n.jsxs)(Tt.a, {
                  striped: !0,
                  bordered: !0,
                  hover: !0,
                  responsive: !0,
                  className: "table-sm",
                  children: [
                    Object(n.jsx)("thead", {
                      children: Object(n.jsxs)("tr", {
                        children: [
                          Object(n.jsx)("th", { children: "ID" }),
                          Object(n.jsx)("th", { children: "NAME" }),
                          Object(n.jsx)("th", { children: "EMAIL" }),
                          Object(n.jsx)("th", { children: "ADMIN" }),
                          Object(n.jsx)("th", {}),
                        ],
                      }),
                    }),
                    Object(n.jsx)("tbody", {
                      children: d.map(function (e) {
                        return Object(n.jsxs)(
                          "tr",
                          {
                            children: [
                              Object(n.jsx)("td", { children: e._id }),
                              Object(n.jsx)("td", { children: e.name }),
                              Object(n.jsx)("td", { children: e.email }),
                              Object(n.jsx)("td", {
                                children: e.isAdmin
                                  ? Object(n.jsx)("i", {
                                      className: "fas fa-check",
                                      style: { color: "green" },
                                    })
                                  : Object(n.jsx)("i", {
                                      className: "fas fa-check",
                                      style: { color: "red" },
                                    }),
                              }),
                              Object(n.jsxs)("td", {
                                children: [
                                  Object(n.jsx)(Ye.LinkContainer, {
                                    to: "/admin/user/".concat(e._id, "/edit"),
                                    children: Object(n.jsx)(Xe.a, {
                                      variant: "light",
                                      className: "btn-sm",
                                      children: Object(n.jsx)("i", {
                                        className: "fas fa-edit",
                                      }),
                                    }),
                                  }),
                                  Object(n.jsx)(Xe.a, {
                                    variant: "danger",
                                    className: "btn-sm",
                                    onClick: function () {
                                      return u(e._id);
                                    },
                                    children: Object(n.jsx)("i", {
                                      className: "fas fa-trash",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          e._id
                        );
                      }),
                    }),
                  ],
                }),
          ],
        });
      };
      var Mt = function (e) {
        var t = e.match,
          r = e.history,
          c = t.params.id,
          s = Object(a.useState)(""),
          o = Object(He.a)(s, 2),
          d = o[0],
          l = o[1],
          j = Object(a.useState)(""),
          u = Object(He.a)(j, 2),
          p = u[0],
          h = u[1],
          b = Object(a.useState)(!1),
          O = Object(He.a)(b, 2),
          x = O[0],
          f = O[1],
          m = Object(i.b)(),
          g = Object(i.c)(function (e) {
            return e.userDetails;
          }),
          v = g.error,
          y = g.loading,
          E = g.user,
          S = Object(i.c)(function (e) {
            return e.userUpdate;
          }),
          I = S.error,
          C = S.loading,
          _ = S.success;
        return (
          Object(a.useEffect)(
            function () {
              _
                ? (m({ type: pe }), r.push("/admin/userlist"))
                : E.name && E._id === Number(c)
                ? (l(E.name), h(E.email), f(E.isAdmin))
                : m(at(c));
            },
            [E, c, _, r]
          ),
          Object(n.jsxs)("div", {
            children: [
              Object(n.jsx)(Qe.Link, {
                to: "/admin/userlist",
                children: "Go Back",
              }),
              Object(n.jsxs)(Rt, {
                children: [
                  Object(n.jsx)("h1", { children: "Edit User" }),
                  C && Object(n.jsx)(pt, {}),
                  I && Object(n.jsx)(bt, { variant: "danger", children: I }),
                  y
                    ? Object(n.jsx)(pt, {})
                    : v
                    ? Object(n.jsx)(bt, { variant: "danger", children: v })
                    : Object(n.jsxs)(We.a, {
                        onSubmit: function (e) {
                          e.preventDefault(),
                            m(
                              (function (e) {
                                return (function () {
                                  var t = Object(tt.a)(
                                    et.a.mark(function t(r, n) {
                                      var a, c, s, i, o;
                                      return et.a.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  r({ type: le }),
                                                  (a = n()),
                                                  (c = a.userLogin.userInfo),
                                                  (s = {
                                                    headers: {
                                                      "Content-type":
                                                        "application/json",
                                                      Authorization:
                                                        "Bearer ".concat(
                                                          c.token
                                                        ),
                                                    },
                                                  }),
                                                  (t.next = 6),
                                                  nt.a.put(
                                                    "/api/users/update/".concat(
                                                      e._id,
                                                      "/"
                                                    ),
                                                    e,
                                                    s
                                                  )
                                                );
                                              case 6:
                                                (i = t.sent),
                                                  (o = i.data),
                                                  r({ type: je }),
                                                  r({ type: W, payload: o }),
                                                  (t.next = 15);
                                                break;
                                              case 12:
                                                (t.prev = 12),
                                                  (t.t0 = t.catch(0)),
                                                  r({
                                                    type: ue,
                                                    payload:
                                                      t.t0.response &&
                                                      t.t0.response.data.detail
                                                        ? t.t0.response.data
                                                            .detail
                                                        : t.t0.message,
                                                  });
                                              case 15:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 12]]
                                      );
                                    })
                                  );
                                  return function (e, r) {
                                    return t.apply(this, arguments);
                                  };
                                })();
                              })({ _id: E._id, name: d, email: p, isAdmin: x })
                            );
                        },
                        children: [
                          Object(n.jsxs)(We.a.Group, {
                            controlId: "name",
                            children: [
                              Object(n.jsx)(We.a.Label, { children: "Name" }),
                              Object(n.jsx)(We.a.Control, {
                                type: "name",
                                placeholder: "Enter name",
                                value: d,
                                onChange: function (e) {
                                  return l(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(n.jsxs)(We.a.Group, {
                            controlId: "email",
                            children: [
                              Object(n.jsx)(We.a.Label, {
                                children: "Email Address",
                              }),
                              Object(n.jsx)(We.a.Control, {
                                type: "email",
                                placeholder: "Enter Email",
                                value: p,
                                onChange: function (e) {
                                  return h(e.target.value);
                                },
                              }),
                            ],
                          }),
                          Object(n.jsx)(We.a.Group, {
                            controlId: "isadmin",
                            children: Object(n.jsx)(We.a.Check, {
                              type: "checkbox",
                              label: "Is Admin",
                              checked: x,
                              onChange: function (e) {
                                return f(e.target.checked);
                              },
                            }),
                          }),
                          Object(n.jsx)(Xe.a, {
                            type: "submit",
                            variant: "primary",
                            children: "Update",
                          }),
                        ],
                      }),
                ],
              }),
            ],
          })
        );
      };
      var Bt = function (e) {
        var t = e.history,
          r = (e.match, Object(i.b)()),
          c = Object(i.c)(function (e) {
            return e.productList;
          }),
          s = c.loading,
          o = c.error,
          d = c.products,
          l = c.pages,
          j = c.page,
          u = Object(i.c)(function (e) {
            return e.productDelete;
          }),
          p = u.loading,
          h = u.error,
          b = u.success,
          O = Object(i.c)(function (e) {
            return e.productCreate;
          }),
          x = O.loading,
          I = O.error,
          C = O.success,
          _ = O.product,
          R = Object(i.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          L = t.location.search;
        Object(a.useEffect)(
          function () {
            r({ type: S }),
              R.isAdmin || t.push("/login"),
              C ? t.push("/admin/product/".concat(_._id, "/edit")) : r(gt(L));
          },
          [r, t, R, b, C, _, L]
        );
        var k = function (e) {
          window.confirm("Are you sure you want to delete this product?") &&
            r(
              (function (e) {
                return (function () {
                  var t = Object(tt.a)(
                    et.a.mark(function t(r, n) {
                      var a, c, s;
                      return et.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  r({ type: f }),
                                  (a = n()),
                                  (c = a.userLogin.userInfo),
                                  (s = {
                                    headers: {
                                      "Content-type": "application/json",
                                      Authorization: "Bearer ".concat(c.token),
                                    },
                                  }),
                                  (t.next = 6),
                                  nt.a.delete(
                                    "/api/products/delete/".concat(e, "/"),
                                    s
                                  )
                                );
                              case 6:
                                t.sent.data, r({ type: m }), (t.next = 14);
                                break;
                              case 11:
                                (t.prev = 11),
                                  (t.t0 = t.catch(0)),
                                  r({
                                    type: g,
                                    payload:
                                      t.t0.response && t.t0.response.data.detail
                                        ? t.t0.response.data.detail
                                        : t.t0.message,
                                  });
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 11]]
                      );
                    })
                  );
                  return function (e, r) {
                    return t.apply(this, arguments);
                  };
                })();
              })(e)
            );
        };
        return Object(n.jsxs)("div", {
          children: [
            Object(n.jsxs)(st.a, {
              className: "align-items-center",
              children: [
                Object(n.jsx)(it.a, {
                  children: Object(n.jsx)("h1", { children: "Products" }),
                }),
                Object(n.jsx)(it.a, {
                  className: "text-right",
                  children: Object(n.jsxs)(Xe.a, {
                    className: "my-3",
                    onClick: function () {
                      r(
                        (function () {
                          var e = Object(tt.a)(
                            et.a.mark(function e(t, r) {
                              var n, a, c, s, i;
                              return et.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          t({ type: v }),
                                          (n = r()),
                                          (a = n.userLogin.userInfo),
                                          (c = {
                                            headers: {
                                              "Content-type":
                                                "application/json",
                                              Authorization: "Bearer ".concat(
                                                a.token
                                              ),
                                            },
                                          }),
                                          (e.next = 6),
                                          nt.a.post(
                                            "/api/products/create/",
                                            {},
                                            c
                                          )
                                        );
                                      case 6:
                                        (s = e.sent),
                                          (i = s.data),
                                          t({ type: y, payload: i }),
                                          (e.next = 14);
                                        break;
                                      case 11:
                                        (e.prev = 11),
                                          (e.t0 = e.catch(0)),
                                          t({
                                            type: E,
                                            payload:
                                              e.t0.response &&
                                              e.t0.response.data.detail
                                                ? e.t0.response.data.detail
                                                : e.t0.message,
                                          });
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 11]]
                              );
                            })
                          );
                          return function (t, r) {
                            return e.apply(this, arguments);
                          };
                        })()
                      );
                    },
                    children: [
                      Object(n.jsx)("i", { className: "fas fa-plus" }),
                      " Create Product",
                    ],
                  }),
                }),
              ],
            }),
            p && Object(n.jsx)(pt, {}),
            h && Object(n.jsx)(bt, { variant: "danger", children: h }),
            x && Object(n.jsx)(pt, {}),
            I && Object(n.jsx)(bt, { variant: "danger", children: I }),
            s
              ? Object(n.jsx)(pt, {})
              : o
              ? Object(n.jsx)(bt, { variant: "danger", children: o })
              : Object(n.jsxs)("div", {
                  children: [
                    Object(n.jsxs)(Tt.a, {
                      striped: !0,
                      bordered: !0,
                      hover: !0,
                      responsive: !0,
                      className: "table-sm",
                      children: [
                        Object(n.jsx)("thead", {
                          children: Object(n.jsxs)("tr", {
                            children: [
                              Object(n.jsx)("th", { children: "ID" }),
                              Object(n.jsx)("th", { children: "NAME" }),
                              Object(n.jsx)("th", { children: "PRICE" }),
                              Object(n.jsx)("th", { children: "CATEGORY" }),
                              Object(n.jsx)("th", { children: "BRAND" }),
                              Object(n.jsx)("th", {}),
                            ],
                          }),
                        }),
                        Object(n.jsx)("tbody", {
                          children: d.map(function (e) {
                            return Object(n.jsxs)(
                              "tr",
                              {
                                children: [
                                  Object(n.jsx)("td", { children: e._id }),
                                  Object(n.jsx)("td", { children: e.name }),
                                  Object(n.jsxs)("td", {
                                    children: ["$", e.price],
                                  }),
                                  Object(n.jsx)("td", { children: e.category }),
                                  Object(n.jsx)("td", { children: e.brand }),
                                  Object(n.jsxs)("td", {
                                    children: [
                                      Object(n.jsx)(Ye.LinkContainer, {
                                        to: "/admin/product/".concat(
                                          e._id,
                                          "/edit"
                                        ),
                                        children: Object(n.jsx)(Xe.a, {
                                          variant: "light",
                                          className: "btn-sm",
                                          children: Object(n.jsx)("i", {
                                            className: "fas fa-edit",
                                          }),
                                        }),
                                      }),
                                      Object(n.jsx)(Xe.a, {
                                        variant: "danger",
                                        className: "btn-sm",
                                        onClick: function () {
                                          return k(e._id);
                                        },
                                        children: Object(n.jsx)("i", {
                                          className: "fas fa-trash",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e._id
                            );
                          }),
                        }),
                      ],
                    }),
                    Object(n.jsx)(xt, { pages: l, page: j, isAdmin: !0 }),
                  ],
                }),
          ],
        });
      };
      var qt = function (e) {
        var t = e.match,
          r = e.history,
          c = t.params.id,
          s = Object(a.useState)(""),
          o = Object(He.a)(s, 2),
          d = o[0],
          l = o[1],
          j = Object(a.useState)(0),
          u = Object(He.a)(j, 2),
          p = u[0],
          h = u[1],
          b = Object(a.useState)(""),
          x = Object(He.a)(b, 2),
          f = x[0],
          m = x[1],
          g = Object(a.useState)(""),
          v = Object(He.a)(g, 2),
          y = v[0],
          E = v[1],
          S = Object(a.useState)(""),
          L = Object(He.a)(S, 2),
          k = L[0],
          T = L[1],
          A = Object(a.useState)(0),
          P = Object(He.a)(A, 2),
          w = P[0],
          D = P[1],
          U = Object(a.useState)(""),
          N = Object(He.a)(U, 2),
          G = N[0],
          F = N[1],
          M = Object(a.useState)(!1),
          B = Object(He.a)(M, 2),
          q = B[0],
          Q = B[1],
          $ = Object(i.b)(),
          z = Object(i.c)(function (e) {
            return e.productDetails;
          }),
          V = z.error,
          J = z.loading,
          Y = z.product,
          H = Object(i.c)(function (e) {
            return e.productUpdate;
          }),
          W = H.error,
          X = H.loading,
          Z = H.success;
        Object(a.useEffect)(
          function () {
            Z
              ? ($({ type: R }), r.push("/admin/productlist"))
              : Y.name && Y._id === Number(c)
              ? (l(Y.name),
                h(Y.price),
                m(Y.image),
                E(Y.brand),
                T(Y.category),
                D(Y.countInStock),
                F(Y.description))
              : $(vt(c));
          },
          [$, Y, c, r, Z]
        );
        var K = (function () {
          var e = Object(tt.a)(
            et.a.mark(function e(t) {
              var r, n, a, s, i;
              return et.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.target.files[0]),
                          (n = new FormData()).append("image", r),
                          n.append("product_id", c),
                          Q(!0),
                          (e.prev = 5),
                          (a = {
                            headers: { "Content-Type": "multipart/form-data" },
                          }),
                          (e.next = 9),
                          nt.a.post("/api/products/upload/", n, a)
                        );
                      case 9:
                        (s = e.sent), (i = s.data), m(i), Q(!1), (e.next = 18);
                        break;
                      case 15:
                        (e.prev = 15), (e.t0 = e.catch(5)), Q(!1);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 15]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return Object(n.jsxs)("div", {
          children: [
            Object(n.jsx)(Qe.Link, {
              to: "/admin/productlist",
              children: "Go Back",
            }),
            Object(n.jsxs)(Rt, {
              children: [
                Object(n.jsx)("h1", { children: "Edit Product" }),
                X && Object(n.jsx)(pt, {}),
                W && Object(n.jsx)(bt, { variant: "danger", children: W }),
                J
                  ? Object(n.jsx)(pt, {})
                  : V
                  ? Object(n.jsx)(bt, { variant: "danger", children: V })
                  : Object(n.jsxs)(We.a, {
                      onSubmit: function (e) {
                        e.preventDefault(),
                          $(
                            (function (e) {
                              return (function () {
                                var t = Object(tt.a)(
                                  et.a.mark(function t(r, n) {
                                    var a, c, s, i, o;
                                    return et.a.wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.prev = 0),
                                                r({ type: I }),
                                                (a = n()),
                                                (c = a.userLogin.userInfo),
                                                (s = {
                                                  headers: {
                                                    "Content-type":
                                                      "application/json",
                                                    Authorization:
                                                      "Bearer ".concat(c.token),
                                                  },
                                                }),
                                                (t.next = 6),
                                                nt.a.put(
                                                  "/api/products/update/".concat(
                                                    e._id,
                                                    "/"
                                                  ),
                                                  e,
                                                  s
                                                )
                                              );
                                            case 6:
                                              (i = t.sent),
                                                (o = i.data),
                                                r({ type: C, payload: o }),
                                                r({ type: O, payload: o }),
                                                (t.next = 15);
                                              break;
                                            case 12:
                                              (t.prev = 12),
                                                (t.t0 = t.catch(0)),
                                                r({
                                                  type: _,
                                                  payload:
                                                    t.t0.response &&
                                                    t.t0.response.data.detail
                                                      ? t.t0.response.data
                                                          .detail
                                                      : t.t0.message,
                                                });
                                            case 15:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t,
                                      null,
                                      [[0, 12]]
                                    );
                                  })
                                );
                                return function (e, r) {
                                  return t.apply(this, arguments);
                                };
                              })();
                            })({
                              _id: c,
                              name: d,
                              price: p,
                              image: f,
                              brand: y,
                              category: k,
                              countInStock: w,
                              description: G,
                            })
                          );
                      },
                      children: [
                        Object(n.jsxs)(We.a.Group, {
                          controlId: "name",
                          children: [
                            Object(n.jsx)(We.a.Label, { children: "Name" }),
                            Object(n.jsx)(We.a.Control, {
                              type: "name",
                              placeholder: "Enter name",
                              value: d,
                              onChange: function (e) {
                                return l(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(n.jsxs)(We.a.Group, {
                          controlId: "price",
                          children: [
                            Object(n.jsx)(We.a.Label, { children: "Price" }),
                            Object(n.jsx)(We.a.Control, {
                              type: "number",
                              placeholder: "Enter price",
                              value: p,
                              onChange: function (e) {
                                return h(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(n.jsxs)(We.a.Group, {
                          controlId: "image",
                          children: [
                            Object(n.jsx)(We.a.Label, { children: "Image" }),
                            Object(n.jsx)(We.a.Control, {
                              type: "text",
                              placeholder: "Enter image",
                              value: f,
                              onChange: function (e) {
                                return m(e.target.value);
                              },
                            }),
                            Object(n.jsx)(We.a.File, {
                              id: "image-file",
                              label: "Choose File",
                              custom: !0,
                              onChange: K,
                            }),
                            q && Object(n.jsx)(pt, {}),
                          ],
                        }),
                        Object(n.jsxs)(We.a.Group, {
                          controlId: "brand",
                          children: [
                            Object(n.jsx)(We.a.Label, { children: "Brand" }),
                            Object(n.jsx)(We.a.Control, {
                              type: "text",
                              placeholder: "Enter brand",
                              value: y,
                              onChange: function (e) {
                                return E(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(n.jsxs)(We.a.Group, {
                          controlId: "countinstock",
                          children: [
                            Object(n.jsx)(We.a.Label, { children: "Stock" }),
                            Object(n.jsx)(We.a.Control, {
                              type: "number",
                              placeholder: "Enter stock",
                              value: w,
                              onChange: function (e) {
                                return D(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(n.jsxs)(We.a.Group, {
                          controlId: "category",
                          children: [
                            Object(n.jsx)(We.a.Label, { children: "Category" }),
                            Object(n.jsx)(We.a.Control, {
                              type: "text",
                              placeholder: "Enter category",
                              value: k,
                              onChange: function (e) {
                                return T(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(n.jsxs)(We.a.Group, {
                          controlId: "description",
                          children: [
                            Object(n.jsx)(We.a.Label, {
                              children: "Description",
                            }),
                            Object(n.jsx)(We.a.Control, {
                              type: "text",
                              placeholder: "Enter description",
                              value: G,
                              onChange: function (e) {
                                return F(e.target.value);
                              },
                            }),
                          ],
                        }),
                        Object(n.jsx)(Xe.a, {
                          type: "submit",
                          variant: "primary",
                          children: "Update",
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      };
      var Qt = function (e) {
        var t = e.history,
          r = Object(i.b)(),
          c = Object(i.c)(function (e) {
            return e.orderList;
          }),
          s = c.loading,
          o = c.error,
          d = c.orders,
          l = Object(i.c)(function (e) {
            return e.userLogin;
          }).userInfo;
        return (
          Object(a.useEffect)(
            function () {
              l && l.isAdmin
                ? r(
                    (function () {
                      var e = Object(tt.a)(
                        et.a.mark(function e(t, r) {
                          var n, a, c, s, i;
                          return et.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: Le }),
                                      (n = r()),
                                      (a = n.userLogin.userInfo),
                                      (c = {
                                        headers: {
                                          "Content-type": "application/json",
                                          Authorization: "Bearer ".concat(
                                            a.token
                                          ),
                                        },
                                      }),
                                      (e.next = 6),
                                      nt.a.get("/api/orders/", c)
                                    );
                                  case 6:
                                    (s = e.sent),
                                      (i = s.data),
                                      t({ type: ke, payload: i }),
                                      (e.next = 14);
                                    break;
                                  case 11:
                                    (e.prev = 11),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: Te,
                                        payload:
                                          e.t0.response &&
                                          e.t0.response.data.detail
                                            ? e.t0.response.data.detail
                                            : e.t0.message,
                                      });
                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 11]]
                          );
                        })
                      );
                      return function (t, r) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                : t.push("/login");
            },
            [r, t, l]
          ),
          Object(n.jsxs)("div", {
            children: [
              Object(n.jsx)("h1", { children: "Orders" }),
              s
                ? Object(n.jsx)(pt, {})
                : o
                ? Object(n.jsx)(bt, { variant: "danger", children: o })
                : Object(n.jsxs)(Tt.a, {
                    striped: !0,
                    bordered: !0,
                    hover: !0,
                    responsive: !0,
                    className: "table-sm",
                    children: [
                      Object(n.jsx)("thead", {
                        children: Object(n.jsxs)("tr", {
                          children: [
                            Object(n.jsx)("th", { children: "ID" }),
                            Object(n.jsx)("th", { children: "USER" }),
                            Object(n.jsx)("th", { children: "DATE" }),
                            Object(n.jsx)("th", { children: "Total" }),
                            Object(n.jsx)("th", { children: "PAID" }),
                            Object(n.jsx)("th", { children: "DELIVERED" }),
                            Object(n.jsx)("th", {}),
                          ],
                        }),
                      }),
                      Object(n.jsx)("tbody", {
                        children: d.map(function (e) {
                          return Object(n.jsxs)(
                            "tr",
                            {
                              children: [
                                Object(n.jsx)("td", { children: e._id }),
                                Object(n.jsx)("td", {
                                  children: e.user && e.user.name,
                                }),
                                Object(n.jsx)("td", {
                                  children: e.createdAt.substring(0, 10),
                                }),
                                Object(n.jsxs)("td", {
                                  children: ["$", e.totalPrice],
                                }),
                                Object(n.jsx)("td", {
                                  children: e.isPaid
                                    ? e.paidAt.substring(0, 10)
                                    : Object(n.jsx)("i", {
                                        className: "fas fa-check",
                                        style: { color: "red" },
                                      }),
                                }),
                                Object(n.jsx)("td", {
                                  children: e.isDelivered
                                    ? e.deliveredAt.substring(0, 10)
                                    : Object(n.jsx)("i", {
                                        className: "fas fa-check",
                                        style: { color: "red" },
                                      }),
                                }),
                                Object(n.jsx)("td", {
                                  children: Object(n.jsx)(Ye.LinkContainer, {
                                    to: "/order/".concat(e._id),
                                    children: Object(n.jsx)(Xe.a, {
                                      variant: "light",
                                      className: "btn-sm",
                                      children: "Details",
                                    }),
                                  }),
                                }),
                              ],
                            },
                            e._id
                          );
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      };
      var $t = function () {
          return Object(n.jsxs)(Qe.HashRouter, {
            children: [
              Object(n.jsx)(ct, {}),
              Object(n.jsx)("main", {
                className: "py-3",
                children: Object(n.jsxs)(qe.a, {
                  children: [
                    Object(n.jsx)($e.d, {
                      path: "/",
                      component: Et,
                      exact: !0,
                    }),
                    Object(n.jsx)($e.d, { path: "/login", component: Lt }),
                    Object(n.jsx)($e.d, { path: "/register", component: kt }),
                    Object(n.jsx)($e.d, { path: "/profile", component: At }),
                    Object(n.jsx)($e.d, { path: "/shipping", component: wt }),
                    Object(n.jsx)($e.d, { path: "/placeorder", component: Ut }),
                    Object(n.jsx)($e.d, { path: "/order/:id", component: Gt }),
                    Object(n.jsx)($e.d, { path: "/payment", component: Dt }),
                    Object(n.jsx)($e.d, {
                      path: "/product/:id",
                      component: It,
                    }),
                    Object(n.jsx)($e.d, { path: "/cart/:id?", component: _t }),
                    Object(n.jsx)($e.d, {
                      path: "/admin/userlist",
                      component: Ft,
                    }),
                    Object(n.jsx)($e.d, {
                      path: "/admin/user/:id/edit",
                      component: Mt,
                    }),
                    Object(n.jsx)($e.d, {
                      path: "/admin/productlist",
                      component: Bt,
                    }),
                    Object(n.jsx)($e.d, {
                      path: "/admin/product/:id/edit",
                      component: qt,
                    }),
                    Object(n.jsx)($e.d, {
                      path: "/admin/orderlist",
                      component: Qt,
                    }),
                  ],
                }),
              }),
              Object(n.jsx)(ot, {}),
            ],
          });
        },
        zt = function (e) {
          e &&
            e instanceof Function &&
            r
              .e(3)
              .then(r.bind(null, 132))
              .then(function (t) {
                var r = t.getCLS,
                  n = t.getFID,
                  a = t.getFCP,
                  c = t.getLCP,
                  s = t.getTTFB;
                r(e), n(e), a(e), c(e), s(e);
              });
        };
      s.a.render(
        Object(n.jsx)(i.a, { store: Be, children: Object(n.jsx)($t, {}) }),
        document.getElementById("root")
      ),
        zt();
    },
    88: function (e, t, r) {},
    89: function (e, t, r) {},
  },
  [[113, 1, 2]],
]);
//# sourceMappingURL=main.c614d974.chunk.js.map
