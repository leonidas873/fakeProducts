import Drawer from '@material-ui/core/Drawer';
import {useSelector,useDispatch} from 'react-redux';
import {toggleDrawerMainNav} from '../../redux/actions/styleActions';

const DrawerMainNav = () => {
    const showSidebar = useSelector(state=>state.styleStates.toggleDrawerMainNav);
    const dispatch = useDispatch();

    return(
        <div className="sidebar" >
              <Drawer anchor="right" open={showSidebar} onClose={()=>{dispatch(toggleDrawerMainNav(false))}}>
                <ul>
                  <li>123123</li>
                  <li>14</li>
                  <li>13</li>
                  <li>12</li>
                </ul>
              </Drawer>
          </div>
    )
}


export default DrawerMainNav;