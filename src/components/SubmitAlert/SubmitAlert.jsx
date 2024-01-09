import {Alert, Stack, Fade} from '@mui/material'

const SubmitAlert = ({ error, errorText, alert }) => {

    const timeout = 1000

    return (

        <Stack sx={{ position: 'absolute', top: 145, left: 0, right: 0, zIndex: 2, margin: 'auto', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
            {error ?
                <Fade timeout={timeout} in={alert}><Alert variant="filled" severity="error">
                    {errorText || "An error has ocurred"}
                </Alert></Fade>
                :
                <Fade timeout={timeout} in={alert}><Alert variant="filled" severity="success">
                    Success!
                </Alert></Fade>}
        </Stack>
    )
}


export default SubmitAlert