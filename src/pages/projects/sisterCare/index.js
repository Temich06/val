import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import StartBlog from './components/StartBlog'
import SecondBlog from './components/SecondBlog'

import { Layout } from '../../../components'

const SisterCare = () => {
    return (
        <Layout>
            <StartBlog />
            <SecondBlog />
        </Layout>

    )
}

export default SisterCare