import React from 'react'

import { snsLink } from '../../data/header'

const Sns = () => {
    return (
        <div className='header__sns'>
            <ul>
                {snsLink.map((snsLink, key) => (
                    <li key={key}>
                        <a href={snsLink.url} target='_blank' rel="noopener noreferrer" aria-label={snsLink.title}>
                            <span>{snsLink.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns