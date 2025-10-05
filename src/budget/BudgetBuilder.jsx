import React, { useState, useMemo, useEffect } from 'react';
import './BudgetBuilder.css';
import ITEM_GROUPS from '../constants/items';
import { pdf } from "@react-pdf/renderer";
import { BudgetPDF } from "./BudgetPDF";

export default function BudgetBuilder() {
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem("budget_people");
    return saved ? Number(saved) : 50;
  });

  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("budget_selected");
    return saved ? JSON.parse(saved) : [];
  });

  const [pdfBlob, setPdfBlob] = useState(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    localStorage.setItem("budget_people", people);
  }, [people]);

  useEffect(() => {
    localStorage.setItem("budget_selected", JSON.stringify(selected));
  }, [selected]);

  const keyFor = (group, id) => `${group}:${id}`;

  const toggleItem = (group, id) => {
    const key = keyFor(group, id);
    setSelected(s =>
      s.includes(key) ? s.filter(x => x !== key) : [...s, key]
    );
  };

  const fixedItems = useMemo(() => {
    const arr = [];
    for (const group of Object.keys(ITEM_GROUPS)) {
      for (const item of ITEM_GROUPS[group]) {
        if (item.fixed) arr.push({ ...item, group, perPersonFactor: item.perPersonFactor || 1 });
      }
    }
    return arr;
  }, []);

  const optionalItems = useMemo(() => {
    const arr = [];
    for (const group of Object.keys(ITEM_GROUPS)) {
      for (const item of ITEM_GROUPS[group]) {
        if (!item.fixed) arr.push({ ...item, group, perPersonFactor: item.perPersonFactor || 1 });
      }
    }
    return arr;
  }, []);

  const allItems = useMemo(() => {
    const chosen = optionalItems.filter(it => selected.includes(keyFor(it.group, it.id)));
    return [...fixedItems, ...chosen];
  }, [selected, fixedItems, optionalItems]);

  const total = useMemo(() => {
    return allItems.reduce(
      (sum, it) => sum + it.price * people * (it.perPersonFactor || 1),
      0
    );
  }, [allItems, people]);

  const renderCategory = category => {
    if (!ITEM_GROUPS[category]) return null;
    return (
      <div>
        <h3>{category}</h3>
        <ul className="optional-items">
          {ITEM_GROUPS[category].map(it => (
            <li
              key={keyFor(category, it.id)}
              className={selected.includes(keyFor(category, it.id)) ? "checked-item" : ""}
            >
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes(keyFor(category, it.id))}
                  onChange={() => toggleItem(category, it.id)}
                />
                {it.name} — ${it.price.toFixed(2)}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const resetBudget = () => {
    setPeople(50);
    setSelected([]);
    localStorage.removeItem("budget_people");
    localStorage.removeItem("budget_selected");
    setPdfBlob(null);
  };

  // Genera el PDF y lo guarda en un blob
  const handleGeneratePDF = async () => {
    setGenerating(true);
    const blob = await pdf(<BudgetPDF people={people} allItems={allItems} total={total} />).toBlob();
    setPdfBlob(blob);
    setGenerating(false);
  };

  // Descarga el PDF desde el blob
  const handleDownloadPDF = () => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `presupuesto_${Date.now()}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
    setPdfBlob(null); // limpia el blob viejo
  };

  return (
    <div className="budget">
      <h2 className="makiladilla">Generador de Presupuesto</h2>

      <div className="field makiladilla">
        <label>Cantidad de personas</label>
        <p>(15-1000 personas)</p>
        <input
          type="number"
          min={1}
          value={people}
          onChange={e => setPeople(e.target.value === "" ? "" : Number(e.target.value))}
          onBlur={() => { if (people === "" || people < 15) setPeople(15) }}
        />
      </div>

      <button onClick={resetBudget} style={{ margin: "10px 35px", padding: "5px 10px" }}>
        Resetear Presupuesto
      </button>

      <h3>Items siempre incluidos</h3>
      <ul>
        {fixedItems.map(it => (
          <li key={keyFor(it.group, it.id)} className='checked-item'>
            {it.name} — ${it.price.toFixed(2)}
          </li>
        ))}
      </ul>

      {renderCategory('Pasapalos')}
      {renderCategory('PrimerPlato')}
      {renderCategory('PaltosCasuales')}
      {renderCategory('PlatosFuertes')}
      {renderCategory('Postres')}
      {renderCategory('Bebidas')}

      <h3>Resumen</h3>
      <table className="items-table">
        <thead>
          <tr>
            <th>U</th>
            <th>Item</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {allItems.map(it => (
            <tr key={keyFor(it.group, it.id)}>
              <td>{Math.ceil(people * (it.perPersonFactor || 1))}</td>
              <td>{it.name}</td>
              <td>$ {it.price.toFixed(2)}</td>
              <td>$ {(it.price * Math.ceil(people * (it.perPersonFactor || 1))).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          <tr>
            <td colSpan={3}><strong>Servicios</strong></td>
            <td><strong>$ {(total * 0.10).toFixed(2)}</strong></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td><strong>$ {(total * 0.10 + total).toFixed(2)}</strong></td>
          </tr>
        </tfoot>
      </table>

      {!pdfBlob && (
        <button
          onClick={handleGeneratePDF}
          disabled={generating}
          style={{
            textDecoration: "none",
            padding: "5px 10px",
            color: "#fff",
            backgroundColor: "#007bff",
            borderRadius: "4px",
            marginTop: "10px"
          }}
        >
          {generating ? "Generando PDF..." : "Generar PDF"}
        </button>
      )}

      {pdfBlob && (
        <button
          onClick={handleDownloadPDF}
          style={{
            textDecoration: "none",
            padding: "5px 10px",
            color: "#fff",
            backgroundColor: "#28a745",
            borderRadius: "4px",
            marginTop: "10px"
          }}
        >
          Descargar PDF
        </button>
      )}
    </div>
  );
}
