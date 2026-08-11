import React, { useState } from 'react';
import { Search, Compass, Award, X, Check, ArrowDown, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../mockData/products';
import { BRANDS } from '../mockData/brands';
import { ProductCard } from '../components';

export const CatalogScreen = () => {
  const { currentTrip, setCurrentScreen } = useApp();

  // Primary always-visible filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Drawer modal state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Secondary drawer filters
  const [selectedBrands, setSelectedBrands] = useState([]); // array of brandIds
  const [brandSearch, setBrandSearch] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');

  // Pagination state
  const [visibleCount, setVisibleCount] = useState(12);

  // Available colors list with hex codes for dot rendering
  const COLOR_OPTIONS = [
    { id: 'all', label: 'Todas as Cores', hex: 'transparent' },
    { id: 'Branco', label: 'Branco', hex: '#FFFFFF', border: '#CCC' },
    { id: 'Preto', label: 'Preto', hex: '#2C2623' },
    { id: 'Bege', label: 'Bege / Sand', hex: '#E6DEC9' },
    { id: 'Terracota', label: 'Terracota', hex: '#C85A32' },
    { id: 'Azul', label: 'Azul', hex: '#3B82F6' },
    { id: 'Verde', label: 'Verde / Olive', hex: '#5B6E50' },
    { id: 'Dourado', label: 'Dourado', hex: '#D97706' }
  ];

  // Toggle brand checkbox
  const toggleBrand = (brandId) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
    );
  };

  // Clear all secondary filters
  const clearAllFilters = () => {
    setSelectedBrands([]);
    setBrandSearch('');
    setSelectedSubCategory('all');
    setSelectedTier('all');
    setSelectedGender('all');
    setSelectedColor('all');
    setSearchQuery('');
    setSelectedCategory('all');
    setVisibleCount(12);
  };

  // Calculate total active secondary filters count for badge
  const activeFiltersCount =
    (selectedBrands.length > 0 ? 1 : 0) +
    (selectedSubCategory !== 'all' ? 1 : 0) +
    (selectedTier !== 'all' ? 1 : 0) +
    (selectedGender !== 'all' ? 1 : 0) +
    (selectedColor !== 'all' ? 1 : 0);

  // Filter products engine
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSubCat = selectedSubCategory === 'all' || p.subCategory === selectedSubCategory;
    const matchesTier = selectedTier === 'all' || p.tier === selectedTier;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brandId);
    const matchesGender = selectedGender === 'all' || p.gender === selectedGender || p.gender === 'unissex';
    const matchesColor = selectedColor === 'all' || (p.colors && p.colors.some((c) => c.toLowerCase().includes(selectedColor.toLowerCase())));

    return matchesSearch && matchesCat && matchesSubCat && matchesTier && matchesBrand && matchesGender && matchesColor;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Group brands by tier for the searchable drawer checklist
  const groupedBrands = {
    eco: BRANDS.filter((b) => b.tier === 'eco' && b.name.toLowerCase().includes(brandSearch.toLowerCase())),
    mid: BRANDS.filter((b) => b.tier === 'mid' && b.name.toLowerCase().includes(brandSearch.toLowerCase())),
    luxury: BRANDS.filter((b) => b.tier === 'luxury' && b.name.toLowerCase().includes(brandSearch.toLowerCase()))
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner" style={{ padding: '32px', marginBottom: '24px' }}>
        <div>
          <span className="slogan-tag">Bagless Wardrobe Rental</span>
          <h1 className="heading-xl" style={{ fontSize: '28px', marginBottom: '6px' }}>
            Viaja leve. Vive com estilo.
          </h1>
          <p className="subheading" style={{ fontSize: '14px', marginBottom: '16px' }}>
            Guarda-roupa oficial com marcas de topo entregues no teu hotel em <strong>{currentTrip.destination.name}</strong>.
          </p>
          <button className="btn-secondary" onClick={() => setCurrentScreen('create-trip')} style={{ fontSize: '12px', padding: '6px 14px' }}>
            <Compass size={14} /> Alterar Destino: {currentTrip.destination.flag} {currentTrip.destination.name}
          </button>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-terracotta)', letterSpacing: '0.05em', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={16} /> Serviço Premium no Hotel
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            • 500+ Artigos Prontos a Usar<br />
            • Devolução no Hotel ou Opção de Compra
          </div>
        </div>
      </div>

      {/* COMPACT & CLEAN MAIN FILTER BAR (Always Visible) */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px',
          marginBottom: '20px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {/* Top Row: Search Input & "Filtros" Button */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '44px', height: '46px', fontSize: '14px' }}
              placeholder="Pesquisar produto ou marca (ex: Jacquemus, Zara, Rolex, camisa...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
            />
          </div>

          {/* Single "Filtros" Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="btn-primary"
            style={{
              height: '46px',
              padding: '0 20px',
              backgroundColor: activeFiltersCount > 0 ? 'var(--text-main)' : 'var(--primary-terracotta)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <SlidersHorizontal size={16} />
            <span>Filtros</span>
            {activeFiltersCount > 0 && (
              <span
                style={{
                  background: 'var(--primary-terracotta)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '4px'
                }}
              >
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Bottom Row: Category Pills (Clean & Essential) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', paddingTop: '4px', borderTop: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginRight: '4px' }}>Categoria:</span>
          {[
            { id: 'all', label: 'Todas' },
            { id: 'roupa', label: '👕 Roupa' },
            { id: 'calcado', label: '👟 Calçado' },
            { id: 'acessorios', label: '🕶️ Acessórios & Malas' },
            { id: 'perfumes', label: '🧴 Perfumes' },
            { id: 'relogios', label: '⌚ Relógios' },
            { id: 'roupainterior', label: '👙 Roupa Interior' }
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCategory(c.id);
                setVisibleCount(12);
              }}
              className={`chip-item ${selectedCategory === c.id ? 'selected' : ''}`}
              style={{ fontSize: '13px', padding: '6px 14px' }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE FILTERS CHIPS BAR (Shown when filters are active) */}
      {(activeFiltersCount > 0 || searchQuery !== '' || selectedCategory !== 'all') && (
        <div className="active-chips-bar">
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginRight: '4px' }}>
            Filtros Ativos:
          </span>

          {selectedCategory !== 'all' && (
            <span className="chip-active" onClick={() => setSelectedCategory('all')}>
              Categoria: {selectedCategory} <X size={12} />
            </span>
          )}

          {selectedSubCategory !== 'all' && (
            <span className="chip-active" onClick={() => setSelectedSubCategory('all')}>
              Subcategoria: {selectedSubCategory} <X size={12} />
            </span>
          )}

          {selectedBrands.map((bId) => {
            const bObj = BRANDS.find((b) => b.id === bId);
            return (
              <span key={bId} className="chip-active" onClick={() => toggleBrand(bId)}>
                Marca: {bObj ? bObj.name : bId} <X size={12} />
              </span>
            );
          })}

          {selectedColor !== 'all' && (
            <span className="chip-active" onClick={() => setSelectedColor('all')}>
              Cor: {selectedColor} <X size={12} />
            </span>
          )}

          {selectedTier !== 'all' && (
            <span className="chip-active" onClick={() => setSelectedTier('all')}>
              Segmento: {selectedTier === 'eco' ? 'Económico' : selectedTier === 'mid' ? 'Médio' : 'Luxo'} <X size={12} />
            </span>
          )}

          {searchQuery && (
            <span className="chip-active" onClick={() => setSearchQuery('')}>
              Pesquisa: "{searchQuery}" <X size={12} />
            </span>
          )}

          <button
            onClick={clearAllFilters}
            style={{
              fontSize: '12px',
              color: 'var(--primary-terracotta)',
              fontWeight: 700,
              marginLeft: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <RotateCcw size={13} /> Limpar Tudo
          </button>
        </div>
      )}

      {/* Catalog Grid Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 className="heading-md" style={{ fontSize: '18px' }}>
          Catálogo Bagless ({filteredProducts.length} itens encontrados)
        </h2>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          Higienização de Padrão Hospitalar • Entrega e Recolha Incluídas
        </span>
      </div>

      {/* Catalog Product Grid */}
      <div className="grid-catalog">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Pagination */}
      {visibleCount < filteredProducts.length && (
        <div style={{ textAlign: 'center', marginTop: '36px', marginBottom: '40px' }}>
          <button onClick={() => setVisibleCount((prev) => prev + 12)} className="btn-primary" style={{ padding: '14px 32px' }}>
            Carregar mais 12 produtos <ArrowDown size={18} />
          </button>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
            A mostrar {visibleProducts.length} de {filteredProducts.length} peças disponíveis
          </div>
        </div>
      )}

      {/* REFINED FILTER DRAWER / MODAL PANEL */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div className="drawer-header">
              <h3 className="heading-md" style={{ fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={18} color="var(--primary-terracotta)" /> Refinar Filtros
              </h3>
              <button
                onClick={() => setIsDrawerOpen(false)}
                style={{
                  background: 'var(--bg-subtle)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Scrollable Body */}
            <div className="drawer-body">
              {/* 1. Subcategory Selector */}
              <div className="form-group">
                <label className="form-label">Subcategoria:</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {[
                    { id: 'all', label: 'Todas' },
                    { id: 'tshirt', label: 'T-Shirts' },
                    { id: 'shirt', label: 'Camisas' },
                    { id: 'dress', label: 'Vestidos' },
                    { id: 'trousers', label: 'Calças' },
                    { id: 'blazer', label: 'Blazers' },
                    { id: 'jacket', label: 'Casacos' },
                    { id: 'swimwear', label: 'Fatos de Banho' },
                    { id: 'sneakers', label: 'Sapatilhas' },
                    { id: 'loafers', label: 'Mocassins' },
                    { id: 'bag', label: 'Malas' },
                    { id: 'sunglasses', label: 'Óculos' },
                    { id: 'perfume', label: 'Perfumes' },
                    { id: 'watch', label: 'Relógios' },
                    { id: 'underwear', label: 'Roupa Interior' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSubCategory(s.id)}
                      className={`chip-item ${selectedSubCategory === s.id ? 'selected' : ''}`}
                      style={{ fontSize: '12px', padding: '5px 10px' }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Brand Searchable Checklist Grouped by Tier */}
              <div className="form-group">
                <label className="form-label">Marcas ({BRANDS.length}):</label>
                <div style={{ position: 'relative', marginBottom: '10px' }}>
                  <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                  <input
                    type="text"
                    className="form-input"
                    style={{ paddingLeft: '34px', height: '38px', fontSize: '13px' }}
                    placeholder="Pesquisar marca..."
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                  />
                </div>

                <div style={{ maxHeight: '220px', overflowY: 'auto', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '12px', border: '1px solid var(--border-light)' }}>
                  {/* Económico */}
                  {groupedBrands.eco.length > 0 && (
                    <div>
                      <div className="brand-group-title">Económico / Everyday</div>
                      {groupedBrands.eco.map((b) => (
                        <label key={b.id} className="brand-checkbox-item">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(b.id)}
                            onChange={() => toggleBrand(b.id)}
                          />
                          <span>{b.name}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {/* Médio */}
                  {groupedBrands.mid.length > 0 && (
                    <div>
                      <div className="brand-group-title">Médio / Designer</div>
                      {groupedBrands.mid.map((b) => (
                        <label key={b.id} className="brand-checkbox-item">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(b.id)}
                            onChange={() => toggleBrand(b.id)}
                          />
                          <span>{b.name}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {/* Luxo */}
                  {groupedBrands.luxury.length > 0 && (
                    <div>
                      <div className="brand-group-title">Luxo / High-Fashion</div>
                      {groupedBrands.luxury.map((b) => (
                        <label key={b.id} className="brand-checkbox-item">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(b.id)}
                            onChange={() => toggleBrand(b.id)}
                          />
                          <span>{b.name}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Color Dots Selector */}
              <div className="form-group">
                <label className="form-label">Cores:</label>
                <div className="color-dots-group">
                  {COLOR_OPTIONS.map((c) => {
                    const isSelected = selectedColor === c.id;
                    if (c.id === 'all') {
                      return (
                        <button
                          key={c.id}
                          onClick={() => setSelectedColor('all')}
                          className={`chip-item ${selectedColor === 'all' ? 'selected' : ''}`}
                          style={{ fontSize: '12px' }}
                        >
                          Todas as Cores
                        </button>
                      );
                    }
                    return (
                      <div
                        key={c.id}
                        onClick={() => setSelectedColor(c.id)}
                        className={`color-dot-item ${isSelected ? 'selected' : ''}`}
                        style={{ backgroundColor: c.hex, borderColor: c.border || c.hex }}
                        title={c.label}
                      >
                        {isSelected && <Check size={14} color={c.id === 'Branco' || c.id === 'Bege' ? '#2C2623' : '#FFFFFF'} />}
                      </div>
                    );
                  })}
                </div>
                {selectedColor !== 'all' && (
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
                    Selecionada: <strong>{selectedColor}</strong>
                  </div>
                )}
              </div>

              {/* 4. Segment Selector */}
              <div className="form-group">
                <label className="form-label">Segmento de Preço:</label>
                <select className="form-select" value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)}>
                  <option value="all">Todos os Segmentos</option>
                  <option value="eco">Económico (Uniqlo, Zara, Mango, Nike)</option>
                  <option value="mid">Médio (Jacquemus, GANNI, Sandro, Veja, Ray-Ban)</option>
                  <option value="luxury">Luxo (LOEWE, Zimmermann, Gucci, Prada, Rolex)</option>
                </select>
              </div>
            </div>

            {/* Drawer Fixed Footer */}
            <div className="drawer-footer">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="btn-primary"
                style={{ flex: 1, padding: '12px' }}
              >
                Aplicar Filtros ({filteredProducts.length} itens)
              </button>
              <button
                onClick={clearAllFilters}
                className="btn-secondary"
                style={{ padding: '12px' }}
              >
                Limpar Tudo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
