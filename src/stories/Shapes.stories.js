import React from 'react';

export default {
    title: 'Shapes'
} //storybook 문법

export const Rectangle = ({width = '160px' , height = '140px' , backgroundColor = '#000000' }) => {
    return (
        <div style = {{
            width: width, 
            height: height, 
            backgroundColor: backgroundColor
        }}></div>
    )
}

export const Rectangleviolet = () => Rectangle({ backgroundColor: '#BE52F2', width: '80px'})
