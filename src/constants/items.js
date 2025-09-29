// Centralized item definitions for the budget builder
export const ITEM_GROUPS = {
  Bebidas: [
    { id: 'agua', name: 'Agua (por persona)', price: 0.5 },
    { id: 'refresco', name: 'Refresco (por persona)', price: 1.0 },
    { id: 'cerveza', name: 'Cerveza (por persona)', price: 2.5 }
  ],
  Comida: [
    { id: 'aperitivos', name: 'Aperitivos (por persona)', price: 3.0 },
    { id: 'plato', name: 'Plato principal (por persona)', price: 7.5 },
    { id: 'postre', name: 'Postre (por persona)', price: 2.0 }
  ],
  Otros: [
    { id: 'mesas', name: 'Mesas (unidad)', price: 10.0 },
    { id: 'sillas', name: 'Sillas (unidad)', price: 2.0 },
    { id: 'decoracion', name: 'Decoración (fija)', price: 50.0 }
  ]
}

export default ITEM_GROUPS
