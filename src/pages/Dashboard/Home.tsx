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
  return <div>
    Home page
  </div>
};

export default Home;
