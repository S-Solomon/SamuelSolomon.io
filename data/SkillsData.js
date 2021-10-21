import Html from '../public/skills/HTML5.png'
import Css from '../public/skills/css.png'
import Javascript from '../public/skills/JavaScript.svg.png'
import React from '../public/skills/react_logo.png'
import Sass from '../public/skills/Sass.svg.png'
import Typescript from '../public/skills/typescript.png'
import Git from '../public/skills/Git.png'
import Github from '../public/skills/GitHub.png'
import Jest from '../public/skills/jest.svg'
import ReactTestingLibrary from '../public/skills/octopus.png'
import styledComponents from '../public/skills/styled-components.png'
import Figma from '../public/skills/Figma.png'

import { nanoid } from 'nanoid'


const SkillsData =  [
    {
        id: nanoid(),
        image: Html,
        title: 'HTML5',
        description: 'html logo'
    },
    {
        id: nanoid(),
        image: Css,
        title: 'CSS3',
        description: 'css logo'
    },
    {
        id: nanoid(),
        image: Javascript,
        title: 'Javascript(ES6)',
        description: 'javascript logo'
    },
    {
        id: 4,
        image: React,
        title: 'React',
        description: 'react logo'
    },
    {
        id: nanoid(),
        image: Sass,
        title: 'Scss',
        description: 'sass logo'
    },
    {
        id: nanoid(),
        image: Typescript,
        title: 'Typescript',
        description: 'Typescript logo'
    },
    {
        id: nanoid(),
        image: Git,
        title: 'Git',
        description: 'Git logo'
    },
    {
        id: nanoid(),
        image: Jest,
        title: 'Jest',
        description: 'Jest logo'
    },
    {
        id: nanoid(),
        image: Github,
        title: 'Github',
        description: 'Github logo'
    },
    {
        id: nanoid(),
        image: ReactTestingLibrary,
        title: 'Testing Library',
        description: 'ReactTestingLibrary'
    },
    {
        id: nanoid(),
        image: styledComponents,
        title: 'Styled Components',
        description: 'styled components'
    },
    {
        id: nanoid(),
        image: Figma,
        title: 'Figma',
        description: 'Figma'
    }
]





export default SkillsData