import { useContext } from "react";
import { FiltersContext } from "../contexts/filters";

export const useFilters = () => {
    const context = useContext(FiltersContext);

    if (!context) {
        throw new Error("useFilters debe usarse dentro de FiltersProvider");
    }

    const { filters, setFilters } = context;

    const filterProducts = (products) => {
        return products.filter((product) =>
            product.price >= filters.minPrice &&
            (filters.category === "all" || product.category === filters.category)
        );
    };

    return { filters, setFilters, filterProducts };
};