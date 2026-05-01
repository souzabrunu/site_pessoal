"use client";

import { useMemo, useState } from "react";

type DemoProduct = {
  id: number;
  name: string;
  category: string;
  quantity: number;
  minimum: number;
};

const demoProducts: DemoProduct[] = [
  { id: 101, name: "Caderno Executivo", category: "Papelaria", quantity: 18, minimum: 10 },
  { id: 102, name: "Mouse Sem Fio", category: "Periféricos", quantity: 6, minimum: 8 },
  { id: 103, name: "Teclado Mecânico", category: "Periféricos", quantity: 4, minimum: 3 },
  { id: 104, name: "Garrafa Térmica", category: "Utilidades", quantity: 11, minimum: 6 },
  { id: 105, name: "Caneta Gel Azul", category: "Papelaria", quantity: 24, minimum: 12 },
  { id: 106, name: "Headset USB", category: "Áudio", quantity: 3, minimum: 5 },
];

const filters = [
  { value: "all", label: "Todos" },
  { value: "healthy", label: "Estoque ok" },
  { value: "attention", label: "Atenção" },
] as const;

function getStatus(product: DemoProduct) {
  return product.quantity <= product.minimum ? "attention" : "healthy";
}

function getStatusLabel(product: DemoProduct) {
  return getStatus(product) === "attention" ? "Atenção" : "Estoque ok";
}

export function StockDemo() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filteredProducts = useMemo(() => {
    return demoProducts.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());

      const status = getStatus(product);
      const matchesFilter = filter === "all" ? true : status === filter;

      return matchesQuery && matchesFilter;
    });
  }, [filter, query]);

  const summary = useMemo(() => {
    const total = demoProducts.length;
    const attention = demoProducts.filter((product) => getStatus(product) === "attention").length;
    const healthy = total - attention;

    return { total, attention, healthy };
  }, []);

  return (
    <div className="demo-shell">
      <div className="demo-intro">
        <div className="demo-copy">
          <p className="section-kicker">Demonstração interativa</p>
          <h3>Mini vitrine inspirada no projeto de estoque.</h3>
          <p>
            Esta demonstração não reproduz o sistema completo, mas mostra a lógica de listagem,
            busca e leitura de status de produtos em uma interface simples.
          </p>
        </div>

        <div className="demo-summary" aria-label="Resumo da demonstração">
          <div>
            <span>Total</span>
            <strong>{summary.total}</strong>
          </div>
          <div>
            <span>Estoque ok</span>
            <strong>{summary.healthy}</strong>
          </div>
          <div>
            <span>Atenção</span>
            <strong>{summary.attention}</strong>
          </div>
        </div>
      </div>

      <div className="demo-controls">
        <label className="demo-search">
          <span>Buscar produto</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: mouse, papelaria, áudio"
          />
        </label>

        <div className="demo-filters" aria-label="Filtros de estoque">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={item.value === filter ? "demo-filter is-active" : "demo-filter"}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="demo-card">
            <div className="demo-card-top">
              <div>
                <p className="demo-card-category">{product.category}</p>
                <h4>{product.name}</h4>
              </div>
              <span
                className={
                  getStatus(product) === "attention"
                    ? "demo-status is-attention"
                    : "demo-status is-healthy"
                }
              >
                {getStatusLabel(product)}
              </span>
            </div>

            <dl className="demo-metrics">
              <div>
                <dt>Código</dt>
                <dd>{product.id}</dd>
              </div>
              <div>
                <dt>Quantidade</dt>
                <dd>{product.quantity}</dd>
              </div>
              <div>
                <dt>Mínimo</dt>
                <dd>{product.minimum}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
