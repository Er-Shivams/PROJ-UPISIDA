import React from 'react'
import{Container,Wrapper,Link} from './styles/about';

export default function About({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

About.Wrapper = function AboutWrapper({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

