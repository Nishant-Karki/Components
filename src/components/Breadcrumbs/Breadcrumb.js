import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import React from 'react'

export default function Breadcrumb() {
  return (
    <div >
      <h1>Breadcrumbs by Rovan</h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/#" >
          Home
        </Link>
        <Link color="inherit" href="/#" >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Link color="inherit" href="/#" >
          Home
        </Link>
        <Link color="inherit" href="/#" >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link color="inherit" href="/#" >
          Home
        </Link>
        <Link color="inherit" href="/#" >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
  )
}
