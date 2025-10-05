import React from "react"
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer"
import images from "../constants/images"

// Estilos para PDF
const styles = StyleSheet.create({
  page: { padding: 20 },
  header: { fontSize: 10, marginBottom: 10, textAlign: "center", marginTop: 20 },
  table: { display: "table", width: "auto", borderStyle: "solid", borderWidth: 1, marginTop: 10, fontSize: 10 },
  tableRow: { flexDirection: "row", fontSize: 10 },
  tableColHeader: { width: "25%", borderStyle: "solid", borderWidth: 1, backgroundColor: "#eee", padding: 4, fontWeight: "bold" },
  tableCol: { width: "25%", borderStyle: "solid", borderWidth: 1, padding: 4 },
  logo: { width: 200 },
})

export const BudgetPDF = ({ people = 0, allItems = [], total = 0 }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {images.logo && <Image style={styles.logo} src={images.logo} />}
      <Text style={styles.header}>Presupuesto para {people || 0} personas</Text>

      <View style={styles.table}>
        {/* Header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Cantidad</Text>
          <Text style={styles.tableColHeader}>Item</Text>
          <Text style={styles.tableColHeader}>Precio Unitario</Text>
          <Text style={styles.tableColHeader}>Total</Text>
        </View>

        {/* Items */}
        {allItems.map(it => {
          const factor = it.perPersonFactor || 1
          const qty = Math.ceil((people || 0) * factor)
          const price = it.price || 0
          const lineTotal = price * qty

          return (
            <View style={styles.tableRow} key={`${it.group || "g"}:${it.id || Math.random()}`}>
              <Text style={styles.tableCol}>{qty}</Text>
              <Text style={styles.tableCol}>{it.name || "Item"}</Text>
              <Text style={styles.tableCol}>$ {price.toFixed(2)}</Text>
              <Text style={styles.tableCol}>$ {lineTotal.toFixed(2)}</Text>
            </View>
          )
        })}

        {/* IVA / Servicios */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}></Text>
          <Text style={[styles.tableCol, { fontWeight: "bold" }]}>Servicios</Text>
          <Text style={styles.tableCol}></Text>
          <Text style={styles.tableCol}>$ {(total * 0.10).toFixed(2)}</Text>
        </View>

        {/* Total */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}></Text>
          <Text style={[styles.tableCol, { fontWeight: "bold" }]}>Total</Text>
          <Text style={styles.tableCol}></Text>
          <Text style={styles.tableCol}>$ {(total * 1.1).toFixed(2)}</Text>
        </View>
      </View>

      <Text style={styles.header}>Este presupuesto no incluye mesoneros, mesas, sillas, utensilios, decoracion(flores y tul - las trae el cliente)</Text>
      <Text style={styles.header}>No incluye IVA, Precios en Dolares Americanos, Reserva con el 20%</Text>
    </Page>
  </Document>
)
