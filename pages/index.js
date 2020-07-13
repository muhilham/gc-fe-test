import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Button'

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Link href="/contact">Go To Contact Page</Link>
      </Box>
    </Container>

  )
}

export default App
