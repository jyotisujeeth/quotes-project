import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import MianNavigation from './MianNavigation';
import {}
const Layout = (props) => {

    return(
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.childern}</main>
        </Fragment>
    )
}