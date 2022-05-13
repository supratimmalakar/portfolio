import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    itemGrid : {
        height : '100%'
    }
})

function Container({styles, children, set, itemProps={}, nextTab = null, prevTab = null, setFrontTab, setBackTab, flipped}) {
    const classes = useStyles()
    return (
        <Grid style={{...styles, height : '90vh', width : '90vw'}} container className={classes.containerGrid} direction='row' justifyContent='space-between' alignItems='center'>
            <Grid className={classes.itemGrid} item container xs={1} alignItems='center' justifyContent='center'>
                {prevTab && 
                <button 
                    onClick={() => {
                        flipped ? setFrontTab(prevTab) : setBackTab(prevTab)                       
                        setTimeout(() => set(state => !state), 1300)
                    }}>
                    {prevTab}
                </button>}
            </Grid>
            <Grid className={classes.itemGrid} item xs={10} {...itemProps}>
                {children}
            </Grid>
            <Grid className={classes.itemGrid} item container xs={1} alignItems='center' justifyContent='center'>
                {nextTab && 
                <button 
                    onClick={() => {
                        flipped ? setFrontTab(nextTab) : setBackTab(nextTab)  
                        setTimeout(() => set(state => !state), 1300)
                    }}>
                    {nextTab}
                </button>}
            </Grid>
        </Grid>
    )
}

export default Container