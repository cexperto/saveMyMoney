import Menu from '../templates/Menu';
import Error404 from '../templates/Error404'
import Dashboard from '../pages/Dashboard';
import NewExpense from '../pages/NewExpense';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/' : Dashboard,
    '/expense': NewExpense
}

const router = async() => {
    const menu = null || document.getElementById('side-menu');
    const content = null || document.getElementById('content');

    menu.innerHTML = await Menu();

    let hash = getHash();
    console.log(hash);
    let route = await resolveRoutes(hash);
    console.log(route);
    let render = routes[route] ? routes[route] : Error404;
    console.log(render);

    content.innerHTML = await render();
}

export default router;