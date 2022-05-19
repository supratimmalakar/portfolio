import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { flip, setFront, setBack} from '../redux/cardSlice'
import CSSstyles from './Container.module.css'
import { useSpring, a } from 'react-spring'


const useStyles = makeStyles({
    itemGrid: {
        height: '100%',
    },
    arrowitemGridGrid : {
        height : '50px',
        position: '-webkit - sticky',
        position: 'sticky',
        top: 'calc(50% - 25px)',
        bottom: 'calc(50% - 25px)',
    }
})

function Container({ styles, children, itemProps = {}, nextTab = null, prevTab = null }) {

    const { flipped } = useSelector(state => state.card)
    const dispatch = useDispatch()

    const classes = useStyles()

    const [topRightBar, setTopRightBar] = useSpring(() => ({
        transform: `rotate(45deg)`
    }))

    const [bottomRightBar, setBottomRightBar] = useSpring(() => ({
        transform: `rotate(-45deg)`
    }))

    const [arrowRightText, setRightText] = useSpring(() => ({
        opacity: 0,
        x : 20
    }))

    const [topLeftBar, setTopLeftBar] = useSpring(() => ({
        transform: `rotate(45deg)`
    }))

    const [bottomLeftBar, setBottomLeftBar] = useSpring(() => ({
        transform: `rotate(-45deg)`
    }))

    const [arrowLeftText, setLeftText] = useSpring(() => ({
        opacity: 0,
        x : -20
    }))

    const [rightArrowBoxStyle, setRightArrowBoxStyle] = useSpring(()=> ({
        x : 400,

    }))

    const [leftArrowBoxStyle, setLeftArrowBoxStyle] = useSpring(() => ({
        x: -400,
    }))

    useEffect(() => {
            setRightArrowBoxStyle({
                x : 0
            })
            setLeftArrowBoxStyle({
                x: 0
            }) 
    },[])

    return (
        <Grid style={{ ...styles, height: '90vh', width: '95vw', padding: '0 10px', overflowY : 'auto', position : 'relative' }} container className={CSSstyles['container-grid']} direction='row' justifyContent='space-between' alignItems='center'>
            <Grid className={classes.arrowitemGridGrid} item container xs={1} alignItems='center' justifyContent='center'>
                {prevTab &&
                    <a.div
                        style={leftArrowBoxStyle}
                        onClick={() => {
                            flipped ? dispatch(setFront(prevTab)) : dispatch(setBack(prevTab))
                            setTimeout(() => dispatch(flip()), 300)
                        }}
                        onMouseEnter={() => {
                            setTopLeftBar({ transform: `rotate(65deg)` })
                            setBottomLeftBar({ transform: `rotate(-65deg)` })
                            setLeftText({
                                opacity: 1,
                                x: 0
                            })
                        }}
                        onMouseLeave={() => {
                            setTopLeftBar({ transform: `rotate(45deg)` })
                            setBottomLeftBar({ transform: `rotate(-45deg)` })
                            setLeftText({
                                opacity: 0,
                                x: -20
                            })
                        }}
                        className={CSSstyles['arrow-btn']}>
                        <div className={CSSstyles['left-arrow-icon']}>
                            <a.span style={{ transform: bottomLeftBar.transform }} className={CSSstyles["left-top-bar"]}></a.span>
                            <a.span style={{ transform: topLeftBar.transform }} className={CSSstyles["left-bottom-bar"]}></a.span>
                        </div>
                        <a.div style={{ ...arrowLeftText }} className={CSSstyles['tab-name']}>
                            {prevTab}
                        </a.div>
                    </a.div>}
            </Grid>
            <Grid className={classes.itemGrid} item xs={10} {...itemProps}>
                {children}
            </Grid>
            <Grid className={classes.arrowitemGridGrid} item container xs={1} alignItems='center' justifyContent='center'>
                {nextTab &&
                    <a.div
                        style={rightArrowBoxStyle}
                        onClick={() => {
                            flipped ? dispatch(setFront(nextTab)) : dispatch(setBack(nextTab))
                            setTimeout(() => dispatch(flip()), 300)
                        }}
                        onMouseEnter={() => {
                            setTopRightBar({ transform: `rotate(65deg)` })
                            setBottomRightBar({ transform: `rotate(-65deg)` })
                            setRightText({
                                opacity: 1,
                                x : 0
                            })
                        }}
                        onMouseLeave={() => {
                            setTopRightBar({ transform: `rotate(45deg)` })
                            setBottomRightBar({ transform: `rotate(-45deg)` })
                            setRightText({
                                opacity: 0,
                                x: 20
                            })
                        }}
                        className={CSSstyles['arrow-btn']}
                    >
                        <a.div style={{ ...arrowRightText }} className={CSSstyles['tab-name']}>
                            {nextTab}
                        </a.div>
                        <div className={CSSstyles['right-arrow-icon']}>
                            <a.span style={{ transform: topRightBar.transform }} className={CSSstyles["right-top-bar"]}></a.span>
                            <a.span style={{ transform: bottomRightBar.transform }} className={CSSstyles["right-bottom-bar"]}></a.span>
                        </div>
                    </a.div>}
            </Grid>
        </Grid>
    )
}

export default Container