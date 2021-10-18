import React from 'react'
import { Image } from 'semantic-ui-react'

const Logo = props => <Image {...props} src='src\assets\images\logo.jpg' />

Logo.propTypes = Image.propTypes

export default Logo