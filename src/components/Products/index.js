import { Component } from "react";
import { Vortex } from 'react-loader-spinner';
import './index.css';
// import ProductItems from '../components/ProductItems';
import ProductItems from '../ProductItems';

class Products extends Component {
    state = {
        productList: [],
        isLoadingScreen: false
    }

    componentDidMount() {
        this.fetchGetProducts();
    }

    fetchGetProducts = async () => {
        this.setState({ isLoadingScreen: true });

        const getProductApi = "https://fakestoreapi.com/products";
        const options = {
            method: 'GET'
        };

        try {
            const response = await fetch(getProductApi, options);
            if (!response.ok) throw new Error("Failed to fetch products");

            const productsData = await response.json();

            const updateProductsData = productsData.map(eachProduct => ({
                category: eachProduct.category,
                description: eachProduct.description,
                id: eachProduct.id,
                image: eachProduct.image,
                price: eachProduct.price,
                rating: eachProduct.rating,
                title: eachProduct.title,
                isLike: false,
            }));

            this.setState({
                productList: updateProductsData,
                isLoadingScreen: false
            });

        } catch (error) {
            console.error("Error fetching products:", error);
            this.setState({ isLoadingScreen: false });
        }
    }

    onClickLike = (id) => {
        this.setState(prevState => ({
            productList: prevState.productList.map(eachProduct =>
                eachProduct.id === id
                    ? { ...eachProduct, isLike: !eachProduct.isLike }
                    : eachProduct
            )
        }));
    }

    render() {
        const { isLoadingScreen, productList } = this.state;

        return (
            <>
                {isLoadingScreen ? (
                    <div className="Loading-screen-container">
                        <Vortex color="rgb(139, 31, 153)" height="70" width="70" />
                    </div>
                ) : (
                    <div className="product-section-container">
                        <ul className="product-main-container">
                            {productList.map(eachProduct => (
                                <ProductItems
                                    key={eachProduct.id}
                                    productItems={eachProduct}
                                    onClickLike={this.onClickLike}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

export default Products;
