import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from 'next/head';
import wrapper from "../store/configureStore";

// 모든 페이지에 공통인것들은 _app.js에 넣으면된다.

const NodeBird = ({ Component }) => { //Component에 뭐가들어가냐면 index에 return부분이들어간다. 즉 index.js에 부모인격이다. 
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
                <Component />
        </div>
    );
};

NodeBird.prototype = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);