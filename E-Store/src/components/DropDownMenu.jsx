import React from 'react'

export const DropDownMenu = ({sortingOrder,setSortingOrder}) => {
  return (
    <form>
        <select value={sortingOrder} onChange={()=>{setSortingOrder(event.target.value)}}>
            <option value={'Lowest'}>Lowest</option>
            <option value={'Highest'}>Highest</option>
            <option value={'AtoZ'}>AtoZ</option>
            <option value={'ZtoA'}>ZtoA</option>
        </select>
    </form>
    )
}
//ref -> element.current.styles.opacity = 0