import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { setBool} from '../redux/animateSlice'
import CSSstyles from './Container.module.css'
import { useSpring, a } from 'react-spring'
import { useNavigate } from "react-router-dom";
import AbsoluteWrapper from './AbsoluteWrapper'
import { projects } from './Portfolio'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
    itemGrid: {
        height: '100%',
    },
    arrowitemGridGrid: {
        height: '100%',
        position: '-webkit - sticky',
        position: 'sticky',
        top: '0',
        bottom: '0',
    }
})

function Container({ styles, children, itemProps = {}, nextTab = null, prevTab = null, projectBool, indexKey }) {
    let navigate = useNavigate();
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
        x: 20
    }))

    const [topLeftBar, setTopLeftBar] = useSpring(() => ({
        transform: `rotate(45deg)`
    }))

    const [bottomLeftBar, setBottomLeftBar] = useSpring(() => ({
        transform: `rotate(-45deg)`
    }))

    const [arrowLeftText, setLeftText] = useSpring(() => ({
        opacity: 0,
        x: -20
    }))

    const [rightArrowBoxStyle, setRightArrowBoxStyle] = useSpring(() => ({
        x: 400,

    }))

    const [leftArrowBoxStyle, setLeftArrowBoxStyle] = useSpring(() => ({
        x: -400,
    }))

    useEffect(() => {
        setRightArrowBoxStyle({
            x: 0
        })
        setLeftArrowBoxStyle({
            x: 0
        })
    }, [])

    return (
      <AbsoluteWrapper>
        <Grid
          style={{
            ...styles,
            height: "100vh",
            width: "100vw",
            padding: "0 10px",
            overflowY: "auto",
            position: "relative",
            overflowX: "hidden",
          }}
          container
          className={CSSstyles["container-grid"]}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            className={classes.arrowitemGridGrid}
            item
            container
            xs={1}
            alignItems="center"
            justifyContent="center"
          >
            {projectBool && (
              <div
                className={CSSstyles.back}
                onClick={() => {
                  dispatch(setBool(true));
                  navigate("/portfolio");
                }}
              >
                <ArrowBackIosIcon
                  fontSize="large"
                  style={{ color: "#8a8a8a" }}
                />
                <p>back</p>
              </div>
            )}
            {prevTab && (
              <a.div
                style={leftArrowBoxStyle}
                onClick={() => {
                  dispatch(setBool(true));
                  if (!projectBool) navigate(`/${prevTab}`);
                  else {
                    prevTab === "portfolio"
                      ? navigate(`/${prevTab}`)
                      : navigate(`/portfolio/${prevTab}`);
                  }
                }}
                onMouseEnter={() => {
                  setTopLeftBar({ transform: `rotate(65deg)` });
                  setBottomLeftBar({ transform: `rotate(-65deg)` });
                  setLeftText({
                    opacity: 1,
                    x: 0,
                  });
                }}
                onMouseLeave={() => {
                  setTopLeftBar({ transform: `rotate(45deg)` });
                  setBottomLeftBar({ transform: `rotate(-45deg)` });
                  setLeftText({
                    opacity: 0,
                    x: -20,
                  });
                }}
                className={CSSstyles["arrow-btn"]}
              >
                <div className={CSSstyles["left-arrow-icon"]}>
                  <a.span
                    style={{ transform: bottomLeftBar.transform }}
                    className={CSSstyles["left-top-bar"]}
                  ></a.span>
                  <a.span
                    style={{ transform: topLeftBar.transform }}
                    className={CSSstyles["left-bottom-bar"]}
                  ></a.span>
                </div>
                <a.div
                  style={{ ...arrowLeftText }}
                  className={CSSstyles["tab-name"]}
                >
                  {projectBool
                    ? indexKey === 0
                      ? null
                      : projects[indexKey - 1].title
                    : prevTab}
                  {/* {prevTab} */}
                </a.div>
              </a.div>
            )}
          </Grid>
          <Grid className={classes.itemGrid} item xs={10} {...itemProps}>
            {children}
          </Grid>
          <Grid
            className={classes.arrowitemGridGrid}
            item
            container
            xs={1}
            alignItems="center"
            justifyContent="center"
          >
            {nextTab && (
              <a.div
                style={rightArrowBoxStyle}
                onClick={() => {
                  dispatch(setBool(false));
                  if (!projectBool) navigate(`/${nextTab}`);
                  else {
                    nextTab === "portfolio"
                      ? navigate(`/${nextTab}`)
                      : navigate(`/portfolio/${nextTab}`);
                  }
                }}
                onMouseEnter={() => {
                  setTopRightBar({ transform: `rotate(65deg)` });
                  setBottomRightBar({ transform: `rotate(-65deg)` });
                  setRightText({
                    opacity: 1,
                    x: 0,
                  });
                }}
                onMouseLeave={() => {
                  setTopRightBar({ transform: `rotate(45deg)` });
                  setBottomRightBar({ transform: `rotate(-45deg)` });
                  setRightText({
                    opacity: 0,
                    x: 20,
                  });
                }}
                className={CSSstyles["arrow-btn"]}
              >
                <a.div
                  style={{ ...arrowRightText }}
                  className={CSSstyles["tab-name"]}
                >
                  {projectBool
                    ? indexKey === projects.length - 1
                      ? null
                      : projects[indexKey + 1].title
                    : nextTab}
                  {/* {nextTab} */}
                </a.div>
                <div className={CSSstyles["right-arrow-icon"]}>
                  <a.span
                    style={{ transform: topRightBar.transform }}
                    className={CSSstyles["right-top-bar"]}
                  ></a.span>
                  <a.span
                    style={{ transform: bottomRightBar.transform }}
                    className={CSSstyles["right-bottom-bar"]}
                  ></a.span>
                </div>
              </a.div>
            )}
          </Grid>
        </Grid>
      </AbsoluteWrapper>
    );
}

export default Container