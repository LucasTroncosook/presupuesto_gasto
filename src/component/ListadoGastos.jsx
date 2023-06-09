import Gasto from "./Gasto"

function ListadoGastos({
  gastos, 
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados
}) {
  return (
    <div className="listado-gastos contenedor">

        {
          
          filtro ?(
            <>
            
           <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta Categoria'}</h2>
           {gastosFiltrados.map( gasto => (
              <Gasto
              setGastoEditar = {setGastoEditar}
              key={gasto.id}
              gasto={gasto}
              eliminarGasto={eliminarGasto}
              />
            ))}           
            </>
          ):(
            <>
            <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
            {gastos.map( gasto =>(
              <Gasto
              setGastoEditar = {setGastoEditar}
              key={gasto.id}
              gasto={gasto}
              eliminarGasto={eliminarGasto}
              />
          ))} 
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos
