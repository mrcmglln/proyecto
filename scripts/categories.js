(function () {
    "use strict";

    function Product(props) {
        return (
          <div className="product">
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-4 zoom">
          <div className="card card-cascade narrower card-ecommerce">
              <img src={props.product.uri} className="card-img-top" alt="sample photo"/>
              <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <a href="">{props.product.nombre}</a>
                </strong>
              </h4>
              <div className="card-footer px-1">
                <span className="float-left font-weight-bold">
                  <strong>{props.product.precio}</strong>
                </span>
                <span className="float-right">
                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                    <i className="fas fa-shopping-cart grey-text ml-3"></i>
                  </a>
                  <a className="active" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                    <i className="fas fa-heart ml-3"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

           


          </div>
        );
      }


    function Products(props) {
        return (
          <div className="results">
            {props.products.map(function(product) {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        );
      }

    function Filters(props) {
        var cat = window.LMDirectory.cat;
        
        function updateName(evt){
            props.updateFormState("currentName", evt.target.value);
        }

        function updateCategory(evt){
            console.log("adios");
            props.updateFormState("currentCategory", evt.target.value);
        }

        function updateIntern(evt){
            console.log("hola");
            props.updateFormState("isIntern", evt.target.checked);
        }

        return (
            
        <form action="" id="category-filters">
        <div className="group">
          <label htmlFor="product-name"> </label>
          <input
            type="text"
            name="product_name"
            placeholder="Producto"
            id="product-name"
            value = {props.currentName}
            onChange = {updateName}
          />
         
        </div>
            <div className="group">
				<label htmlFor="sel-title"> </label>
                    <select 
                    name="sel-title" 
                    id="sel-title" 
                    value={props.currentCategory}
                    onChange = {updateCategory}
                    >
                    <option value="">- Select -</option>
                    {cat.map(function(category) {
                    return (
                    <option value={category.key} key={category.key}>
                    {category.display}
                    </option>
              );
            })}
					</select>
			</div>
            <div className="group">
            <label>
                <input
                type="checkbox"
                value="1"
                name="product_intern"
                checked={props.isIntern}
                onChange={updateIntern}
                />
            Intern
          </label>
        </div>
        
          </form>
        );
      }

    class Categories extends React.Component {
        constructor(props) {
          super(props);
    
          this.state = {
            products: window.LMDirectory.products,
            currentName: "",
            currentCategory: "",
            isIntern: false
          };

          this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(name, val){
            console.log("YAAAAAAAAAAAAAAAA");
            //setState
            this.setState(
                {
                [name]: val
            }, 
            this.updateProductsList);
        }

      
            // search the whole employee list with current filters
            updateProductsList() {
              var filteredProducts = window.LMDirectory.products.filter(
                function(product) {
                    return (
                    product.intern === this.state.isIntern &&
                    (this.state.currentName === "" ||
                      product.nombre.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !==
                        -1) &&
                    (this.state.currentCategory === "" || product.category === this.state.currentCategory)
                  
                    );
                }.bind(this)
              );
          
              this.setState({
                products: filteredProducts
              });
            }
        
          

        render() {
            return (
              <div className="company-categories">
                <h2>Categories</h2>
                
      
                <Filters 
                currentName={this.state.currentName}  
                currentName={this.state.currentTitle}
                isIntern={this.state.isIntern}
                updateFormState = {this.updateFormState}
                />
                
      
                <Products products={this.state.products} />
              </div>
            );
          }

        }
    ReactDOM.render(<Categories />, document.getElementById("categories-root"));
})();
//# sourceMappingURL=categories-dist.js.map