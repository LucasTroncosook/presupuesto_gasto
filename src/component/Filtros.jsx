import { useState, useEffect } from "react"

export default function Filtros({filtro, setFiltro}) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
            <label htmlFor="">Filtrar Gasto</label>
            <select value={filtro} onChange={(e)=> setFiltro(e.target.value)}> 
            <option value="">-- Todos las Categorias --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gasto">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}
