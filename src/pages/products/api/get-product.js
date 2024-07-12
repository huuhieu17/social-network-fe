import { api } from "@/utils/axios"
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getProduct = () => {
    return api.get("/products");
}

export const getProductQueriesOption = () => {
    return queryOptions({
        queryKey: "product",
        queryFn: getProduct
    })
}

export const useGetProduct = ({queryConfig} = {}) => {
    return useQuery({
        ...getProductQueriesOption(),
        ...queryConfig
    })
}