import React from 'react'
import styles from './Bio.module.css'
import {getGravatarURL} from '../utils/getGravatarURL'

interface BioProps {
    className?: string
}

function Bio(props: BioProps) {
    const photoURL = getGravatarURL({
        email: "steindfletcher@gmail.com",
        size: 56,
    })

    return (
        <div
            className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
            <img src={photoURL} alt="Me"/>
            <p>
                I'm{' '}
                <a href="https://github.com/steinfletcher">Stein Fletcher</a>,
                a London based Software Engineer.<br/> This is my blog.
            </p>
        </div>
    )
}

export default Bio
