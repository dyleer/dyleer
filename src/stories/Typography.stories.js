import React from 'react';

export default {
    title: 'Typography'
} //storybook 문법

export const Text = ({text = 'Lorem ipsum' , fontSize = '17px' }) => {
    return (
        <p style={{
            fontSize: fontSize
        }}>
            {text}
        </p>
    )
}

export const TextLarge = () => Text({ fontSize: '25px' })

export const Suyeoul = () => Text({ text: 'Suyeoul' , fontSize: '40px'})