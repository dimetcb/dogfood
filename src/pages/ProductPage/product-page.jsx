import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Logo from "../../components/Logo/logo";
import { Product } from "../../components/Product/product";
import Search from "../../components/Search/search";
import Sort from "../../components/Sort/sort";
import Spinner from "../../components/Spinner";
import api from "../../utils/api";
import { isLiked } from "../../utils/product";

export const ProductPage = ({ currentUser, isLoading }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const handleProductLike = useCallback(() => {
    const liked = isLiked(product.likes, currentUser._id);
    api.changeLikeProduct(product._id, liked).then((newProduct) => {
      setProduct(newProduct);
    });
  }, [product, currentUser]);

  useEffect(() => {
    api
      .getProductById(productId)
      .then((productsData) => {
        setProduct(productsData);
      })
  }, []);

  return (
    <>
      <div className="content__cards">
        {isLoading ? (
          <Spinner />
        ) : (
          <Product
            {...product}
            currentUser={currentUser}
            onProductLike={handleProductLike}
          />
        )}
      </div>
    </>
  );
};
