import useGetProducts from "../../hooks/api/products/use-get-products";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home = () => {
  const { data: products, isLoading } = useGetProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {products?.map((product: Product) => {
        return (
          <li>
            <p>{product.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
