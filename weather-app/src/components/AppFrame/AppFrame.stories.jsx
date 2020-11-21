import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from './AppFrame'
import {BrowserRouter as Router} from 'react-router-dom'



export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (<Router><AppFrame>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ratione impedit ea iusto natus minus assumenda dolorem laudantium, pariatur non eligendi aspernatur soluta, doloremque unde! Illum illo qui non odio.</AppFrame></Router>)