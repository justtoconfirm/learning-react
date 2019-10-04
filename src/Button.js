import React from 'react'

const Button = ({ type = 'button', url = '', children }) => {

	const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

    const renderAnchor = () =>
        <a href={url}>{children}</a>

    const renderButton = () => 
        <button type={type}>{children}</button>

    return (
        isAnchor ? renderAnchor() : renderButton()
    )
}

export default Button