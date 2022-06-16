<<<<<<< HEAD
import config from '~/config';
=======
import routesConfig from '~/config/routes';
>>>>>>> df225818c207301daf3c55efed6fd3490643f1dc

//Layouts
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

//Public Routes
const publicRoutes = [
<<<<<<< HEAD
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
=======
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
>>>>>>> df225818c207301daf3c55efed6fd3490643f1dc
];

//Private Routes
const privateRoutes = [{ path: '/profile', component: Profile }];
export { publicRoutes, privateRoutes };
