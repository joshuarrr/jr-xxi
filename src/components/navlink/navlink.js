import React from 'react'
import { Link } from '@reach/router'


export default function navlink(props) {
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent
          ? `${props.className} current`
          : `${props.className}`
      }
    }}
  />
}