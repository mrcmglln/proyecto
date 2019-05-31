"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  "use strict";

  function Product(props) {
    return React.createElement(
      "div",
      { className: "product" },
      React.createElement(
        "div",
        { className: "col-lg-3 col-md-6 mb-lg-0 mb-4 zoom" },
        React.createElement(
          "div",
          { className: "card card-cascade narrower card-ecommerce" },
          React.createElement("img", { src: props.product.uri, className: "card-img-top", alt: "sample photo" }),
          React.createElement(
            "div",
            { className: "card-body card-body-cascade text-center" },
            React.createElement(
              "h4",
              { className: "card-title" },
              React.createElement(
                "strong",
                null,
                React.createElement(
                  "a",
                  { href: "" },
                  props.product.nombre
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card-footer px-1" },
              React.createElement(
                "span",
                { className: "float-left font-weight-bold" },
                React.createElement(
                  "strong",
                  null,
                  props.product.precio
                )
              ),
              React.createElement(
                "span",
                { className: "float-right" },
                React.createElement(
                  "a",
                  { "data-toggle": "tooltip", "data-placement": "top", title: "Add to Cart" },
                  React.createElement("i", { className: "fas fa-shopping-cart grey-text ml-3" })
                ),
                React.createElement(
                  "a",
                  { className: "active", "data-toggle": "tooltip", "data-placement": "top", title: "Add to Wishlist" },
                  React.createElement("i", { className: "fas fa-heart ml-3" })
                )
              )
            )
          )
        )
      )
    );
  }

  function Products(props) {
    return React.createElement(
      "div",
      { className: "results" },
      props.products.map(function (product) {
        return React.createElement(Product, { key: product.id, product: product });
      })
    );
  }

  function Filters(props) {
    var cat = window.LMDirectory.cat;

    function updateName(evt) {
      props.updateFormState("currentName", evt.target.value);
    }

    function updateCategory(evt) {
      console.log("adios");
      props.updateFormState("currentCategory", evt.target.value);
    }

    function updateIntern(evt) {
      console.log("hola");
      props.updateFormState("isIntern", evt.target.checked);
    }

    return React.createElement(
      "form",
      { action: "", id: "category-filters" },
      React.createElement(
        "div",
        { className: "group" },
        React.createElement(
          "label",
          { htmlFor: "product-name" },
          " "
        ),
        React.createElement("input", {
          type: "text",
          name: "product_name",
          placeholder: "Producto",
          id: "product-name",
          value: props.currentName,
          onChange: updateName
        })
      ),
      React.createElement(
        "div",
        { className: "group" },
        React.createElement(
          "label",
          { htmlFor: "sel-title" },
          " "
        ),
        React.createElement(
          "select",
          {
            name: "sel-title",
            id: "sel-title",
            value: props.currentCategory,
            onChange: updateCategory
          },
          React.createElement(
            "option",
            { value: "" },
            "- Select -"
          ),
          cat.map(function (category) {
            return React.createElement(
              "option",
              { value: category.key, key: category.key },
              category.display
            );
          })
        )
      ),
      React.createElement(
        "div",
        { className: "group" },
        React.createElement(
          "label",
          null,
          React.createElement("input", {
            type: "checkbox",
            value: "1",
            name: "product_intern",
            checked: props.isIntern,
            onChange: updateIntern
          }),
          "Intern"
        )
      )
    );
  }

  var Categories = function (_React$Component) {
    _inherits(Categories, _React$Component);

    function Categories(props) {
      _classCallCheck(this, Categories);

      var _this = _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));

      _this.state = {
        products: window.LMDirectory.products,
        currentName: "",
        currentCategory: "",
        isIntern: false
      };

      _this.updateFormState = _this.updateFormState.bind(_this);
      return _this;
    }

    _createClass(Categories, [{
      key: "updateFormState",
      value: function updateFormState(name, val) {
        console.log("YAAAAAAAAAAAAAAAA");
        //setState
        this.setState(_defineProperty({}, name, val), this.updateProductsList);
      }

      // search the whole employee list with current filters

    }, {
      key: "updateProductsList",
      value: function updateProductsList() {
        var filteredProducts = window.LMDirectory.products.filter(function (product) {
          return product.intern === this.state.isIntern && (this.state.currentName === "" || product.nombre.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !== -1) && (this.state.currentCategory === "" || product.category === this.state.currentCategory);
        }.bind(this));

        this.setState({
          products: filteredProducts
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _React$createElement;

        return React.createElement(
          "div",
          { className: "company-categories" },
          React.createElement(
            "h2",
            null,
            "Categories"
          ),
          React.createElement(Filters, (_React$createElement = {
            currentName: this.state.currentName
          }, _defineProperty(_React$createElement, "currentName", this.state.currentTitle), _defineProperty(_React$createElement, "isIntern", this.state.isIntern), _defineProperty(_React$createElement, "updateFormState", this.updateFormState), _React$createElement)),
          React.createElement(Products, { products: this.state.products })
        );
      }
    }]);

    return Categories;
  }(React.Component);

  ReactDOM.render(React.createElement(Categories, null), document.getElementById("categories-root"));
})();
//# sourceMappingURL=categories-dist.js.map
//# sourceMappingURL=categories-dist.js.map