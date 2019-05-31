<script>
  import { Router, Route, navigate } from 'svelte-routing'

  import Nav from '../components/Nav.svelte'
  import Home from './Home.svelte'
  import About from './About.svelte'

  export let url = ''

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
    <Route path={routes.about.path} component={About} />
    <Route path={routes.home.path}>
      <Home />
    </Route>
  </div>
</Router>
