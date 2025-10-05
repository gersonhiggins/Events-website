import React from "react"
import { PDFViewer } from "@react-pdf/renderer"
import { BudgetPDF } from "./BudgetPDF"

export default function BudgetPDFPage({ people, allItems, total }) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <PDFViewer width="100%" height="100%">
        <BudgetPDF people={people} allItems={allItems} total={total} />
      </PDFViewer>
    </div>
  )
}