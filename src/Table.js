import React, { Component } from 'react'

import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component {
    render() {

        const { characterData } = this.props

        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}

export default Table