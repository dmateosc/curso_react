import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function Weather({temperature}) {
  return (
    <>
    <Typography variant="h2">{temperature}</Typography>
    
    </>
  )
}

Weather.propTypes = {
  temperature : PropTypes.string.isRequired
}

export default Weather

