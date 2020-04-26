import React from 'react'
import { Grid, CssBaseline } from '@material-ui/core'
import MedicineCatalog from './MedicineCatalog'
import InventoryList from './InventoryList'

class PharmacistDashboard extends React.Component {
  render() {
    return (
      <>
       <CssBaseline />
        <Grid
          container
          direction='row'
          spacing={5}
          justify='center'
          style={{
            marginTop: 30
          }}
        >
          <Grid
            item
          >
            <MedicineCatalog />
          </Grid>
          <Grid
            item
          >
            <InventoryList />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default PharmacistDashboard
