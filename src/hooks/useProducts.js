import { useState, useEffect, useMemo } from "react";
import { fetchProducts } from "../services/fetchProducts";
import { useFilters } from "./useFilters";

export const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { filterProducts } = useFilters();

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await fetchProducts();
                setAllProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    const products = useMemo(() => filterProducts(allProducts), [allProducts, filterProducts]);

    return { products, loading, error, allProducts };
};