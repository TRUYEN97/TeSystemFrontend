import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../api/products";
import { STALE_TIME } from "../../../constants/common";

const useGetProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await getAllProducts();
      return res.data;
    },
    staleTime: STALE_TIME,
  });

  return query;
};

export default useGetProducts;
