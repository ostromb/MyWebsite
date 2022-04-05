import react from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
function HomePage() {
    return (
        <div>
            <Toolbar variant="dense" >
                <a href="/"><Button >Home</Button></a>
                <a href="/Repositories"><Button>Repositories</Button></a>
                <a href="/About"><Button>About me</Button></a>
            </Toolbar>
            <a> HelloHello</a>
        </div>
    )
}
export default HomePage;