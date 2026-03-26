import { useFilters } from "../hooks/useFilters";
function Filters() {
    const { setFilters, filters } = useFilters();

    const handleChange = (e) => {
        const currentValue = e.target.value;
        setFilters(prev => {
            return (
                { ...prev, minPrice: Number(currentValue) }
            )
        })
    }
    const handleChangueOption = (e) => {
        const currentValue = e.target.value;

        setFilters(prev => {
            return (
                { ...prev, category: currentValue }
            )
        })
    }


    return (
        <div className="filtros">
            <div className="priceFilter">
                <label htmlFor="price">Price <span className="p-range">{filters.minPrice}</span></label>
                <div className="price-range">

                    <span>$0</span><input onChange={handleChange} value={filters.minPrice} type="range" id="price" min="0" max="1000" /><span>$1000</span>
                </div>
            </div>
            <span className="divider">|</span>
            <div className="category">
                <label htmlFor="category">category</label>
                <select id="category" value={filters.category} onChange={handleChangueOption}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">SmartPhones</option>
                </select>
            </div>
        </div>
    );
}

export default Filters;