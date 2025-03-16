import React, { useState, useEffect } from "react";
import "../styles/ProductFilter.css"; // Archivo de estilos
import plantsArray from "../redux/plantsArray";

const ProductFilter = ({ setFilteredProducts }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // Cargar filtros guardados
  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    if (savedFilters) {
      setSearch(savedFilters.search);
      setCategory(savedFilters.category);
      setSortOrder(savedFilters.sortOrder);
    }
  }, []);

  // Guardar filtros en localStorage
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify({ search, category, sortOrder }));
  }, [search, category, sortOrder]);

  // Filtrar productos
  useEffect(() => {
    let filtered = plantsArray.flatMap(group => group.plants);
    
    if (category !== "All") {
      filtered = filtered.filter(plant => plant.category === category);
    }

    if (search) {
      filtered = filtered.filter(plant =>
        plant.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => parseFloat(a.cost.replace("$", "")) - parseFloat(b.cost.replace("$", "")));
    } else {
      filtered.sort((a, b) => parseFloat(b.cost.replace("$", "")) - parseFloat(a.cost.replace("$", "")));
    }

    setFilteredProducts(filtered);
  }, [search, category, sortOrder, setFilteredProducts]);

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="🔍 Buscar planta..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-input"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)} className="filter-select">
        <option value="All">Todas las Categorías</option>
        <option value="Air Purifying Plants">Purificadoras de Aire</option>
        <option value="Aromatic Fragrant Plants">Aromáticas</option>
        <option value="Insect Repellent Plants">Repelentes de Insectos</option>
        <option value="Medicinal Plants">Medicinales</option>
        <option value="Low Maintenance Plants">Fáciles de Cuidar</option>
      </select>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="filter-select">
        <option value="asc">Precio: Menor a Mayor</option>
        <option value="desc">Precio: Mayor a Menor</option>
      </select>
    </div>
  );
};

export default ProductFilter;
