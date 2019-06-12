<script>
  import { Router, Route, navigate } from 'svelte-routing'
  // import Loadable from 'svelte-loadable'

  import Nav from '../components/Nav.svelte'
  import Home from './Home.svelte'
  import About from './About.svelte'

  export let url = '/'

  const routes = {
    home: {
      path: '/',
      title: 'Home',
    },
    about: {
      path: '/about',
      title: 'About',
    },
  }

  const renderRoutes = Object.entries(routes)
</script>

<Router {url}>
  <Nav routes={renderRoutes} />
  <div>
    <Route path={routes.about.path} component={About}>
      <!-- <Loadable loader={() => import('./About.svelte')}>
        <div slot="success" let:component>
          <svelte:component this={component} />
        </div>
      </Loadable> -->
    </Route>
    <Route path={routes.home.path} component={Home}>
      <!-- <Loadable loader={() => import('./Home.svelte')}>
        <div slot="success" let:component>
          <svelte:component this={component} />
        </div>
      </Loadable> -->
    </Route>
  </div>
</Router>
