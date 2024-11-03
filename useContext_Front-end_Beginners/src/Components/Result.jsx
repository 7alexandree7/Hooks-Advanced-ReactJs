import React from 'react'
import { useState } from 'react'

function Result() {
    const [name, setName] = useState('Front-end Beginners')
    return (
        <Box>
            <Typography variant='h3' sx={{ margin: '20px' }}>
                {name}
            </Typography>
        </Box>
    )
}


export default Result