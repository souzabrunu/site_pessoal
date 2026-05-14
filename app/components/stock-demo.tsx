"use client";

import type { FormEvent } from "react";
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
  const [products, setProducts] = useState(demoProducts);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "1",
    minimum: "1",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());

      const status = getStatus(product);
      const matchesFilter = filter === "all" ? true : status === filter;

      return matchesQuery && matchesFilter;
    });
  }, [filter, products, query]);

  const summary = useMemo(() => {
    const total = products.length;
    const attention = products.filter((product) => getStatus(product) === "attention").length;
    const healthy = total - attention;

    return { total, attention, healthy };
  }, [products]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = form.name.trim();
    const category = form.category.trim();
    const quantity = Number(form.quantity);
    const minimum = Number(form.minimum);

    if (!name || !category || Number.isNaN(quantity) || Number.isNaN(minimum)) {
      return;
    }

    const nextId = Math.max(...products.map((product) => product.id)) + 1;

    setProducts((currentProducts) => [
      {
        id: nextId,
        name,
        category,
        quantity: Math.max(0, quantity),
        minimum: Math.max(0, minimum),
      },
      ...currentProducts,
    ]);
    setForm({ name: "", category: "", quantity: "1", minimum: "1" });
    setQuery("");
    setFilter("all");
  }

  return (
    <div className="demo-shell">
      <div className="demo-intro">
        <div className="demo-copy">
          <p className="section-kicker">Demonstração interativa</p>
          <h3>Mini vitrine inspirada no projeto de estoque.</h3>
          <p>
            Esta demonstração não reproduz o sistema completo, mas mostra a lógica de cadastro,
            listagem, busca e leitura de status de produtos em uma interface simples.
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

      <form className="demo-form" onSubmit={handleSubmit}>
        <label>
          <span>Produto</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Ex.: Monitor LED"
            required
          />
        </label>

        <label>
          <span>Categoria</span>
          <input
            type="text"
            value={form.category}
            onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
            placeholder="Ex.: Periféricos"
            required
          />
        </label>

        <label>
          <span>Qtd.</span>
          <input
            type="number"
            min="0"
            value={form.quantity}
            onChange={(event) => setForm((current) => ({ ...current, quantity: event.target.value }))}
            required
          />
        </label>

        <label>
          <span>Mín.</span>
          <input
            type="number"
            min="0"
            value={form.minimum}
            onChange={(event) => setForm((current) => ({ ...current, minimum: event.target.value }))}
            required
          />
        </label>

        <button type="submit">Adicionar</button>
      </form>

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
