import CardList from "../../components/CardList/card-list";
import Sort from "../../components/Sort/sort";
import Spinner from "../../components/Spinner";

export const CatalogPage = ({
  isLoading,
  currentUser,
  handleProductLike,
  cards,
}) => {
  return (
    <>
      <Sort />
      <div className="content__cards">
        {isLoading ? (
          <Spinner />
        ) : (
          <CardList
            goods={cards}
            onProductLike={handleProductLike}
            currentUser={currentUser}
          />
        )}
      </div>
    </>
  );
};
