import React, { useState, useMemo } from 'react'
import '../BudgetBuilder.css'
import ITEM_GROUPS from '../constants/items'

export default function BudgetBuilder() {
  const [people, setPeople] = useState(50)
  // counts keyed by group:itemId -> number
  const [counts, setCounts] = useState({})

  const keyFor = (group, id) => `${group}:${id}`

  const changeCount = (group, id, delta) => {
    const key = keyFor(group, id)
    setCounts(c => {
      const cur = c[key] || 0
      const next = Math.max(0, cur + delta)
      return { ...c, [key]: next }
    })
  }

  const setExact = (group, id, value) => {
    const key = keyFor(group, id)
    setCounts(c => ({ ...c, [key]: Math.max(0, Number(value) || 0) }))
  }

  const total = useMemo(() => {
    let sum = 0
    for (const group of Object.keys(ITEM_GROUPS)) {
      for (const item of ITEM_GROUPS[group]) {
        const key = keyFor(group, item.id)
        const qty = counts[key] || 0
        const perPerson = /(por persona)/i.test(item.name)
        if (qty > 0) {
          sum += perPerson ? item.price * people * qty : item.price * qty
        }
      }
    }
    return sum
  }, [counts, people])

  // Collect selected items for left column
  const leftItems = []
  for (const group of Object.keys(ITEM_GROUPS)) {
    for (const item of ITEM_GROUPS[group]) {
      const key = keyFor(group, item.id)
      const qty = counts[key] || 0
      if (qty > 0) {
        const perPerson = /(por persona)/i.test(item.name)
        const unitPrice = item.price * (perPerson ? people : 1)
        leftItems.push({ group, id: item.id, name: item.name, qty, unitPrice, lineTotal: unitPrice * qty })
      }
    }
  }

  return (
    <div className="budget two-column">
      <h2>Generador de presupuestos</h2>
      <div className="field">
        <label>Cantidad de personas</label>
        <input type="number" min={1} value={people} onChange={e => setPeople(Number(e.target.value) || 1)} />
      </div>

      <div className="budget-grid">
        <div className="left">
          <h3>Items seleccionados</h3>
          <table className="items-table">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Item</th>
                <th>Precio unitario</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {leftItems.length === 0 && (
                <tr><td colSpan={4}>No hay items seleccionados.</td></tr>
              )}
              {leftItems.map(it => (
                <tr key={`${it.group}:${it.id}`}>
                  <td>{it.qty}</td>
                  <td>{it.name}</td>
                  <td>€ {it.unitPrice.toFixed(2)}</td>
                  <td>€ {it.lineTotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}><strong>Total</strong></td>
                <td><strong>€ {total.toFixed(2)}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="right">
          <h3>Items disponibles</h3>
          {Object.entries(ITEM_GROUPS).map(([group, items]) => (
            <div className="group" key={group}>
              <h4>{group}</h4>
              <ul>
                {items.map(item => {
                  const key = keyFor(group, item.id)
                  const qty = counts[key] || 0
                  return (
                    <li key={item.id} className="control-row">
                      <div className="info">
                        <div className="name">{item.name}</div>
                        <div className="price">€ {item.price.toFixed(2)} {/(por persona)/i.test(item.name) ? 'c/u/persona' : '€/unidad'}</div>
                      </div>
                      <div className="controls">
                        <button onClick={() => changeCount(group, item.id, -1)} aria-label={`Quitar ${item.name}`}>-</button>
                        <input className="small-number" type="number" min={0} value={qty} onChange={e => setExact(group, item.id, e.target.value)} />
                        <button onClick={() => changeCount(group, item.id, +1)} aria-label={`Agregar ${item.name}`}>+</button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="summary">
        <h3>Resumen</h3>
        <p>Personas: {people}</p>
        <p>Total estimado: <strong>€ {total.toFixed(2)}</strong></p>
      </div>
    </div>
  )
}
