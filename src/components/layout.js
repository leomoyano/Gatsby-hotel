import React from 'react'
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import Header from './header';

export const Layout = (props) => {
    return (
        <>
            <Global
                styles={css`
                body {
                    background-color: blue;
                    }
                `}
            />
            <Helmet>
                <title>Leo Moyano Dev</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            <div>{props.children}</div>
        </>
    )
}

export default Layout;