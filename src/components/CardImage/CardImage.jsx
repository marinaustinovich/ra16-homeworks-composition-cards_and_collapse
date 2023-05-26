import React from 'react'
import PropTypes from 'prop-types'

function CardImage({children}) {
    const { url, nameImg } = children;
    return (
        <img src={url} className="card-img-top" alt={nameImg} />
    )
}

CardImage.propTypes = {
    children: PropTypes.shape({
        url: PropTypes.string.isRequired,
        nameImg: PropTypes.string.isRequired,
    }).isRequired
}

export default CardImage
