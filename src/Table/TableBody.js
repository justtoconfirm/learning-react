import React from 'react'

import Button from './../Button/Button'

const TableBody = props => {

    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <Button theme="primary" onClick={() => props.removeCharacter(index)}>Delete</Button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

export default TableBody