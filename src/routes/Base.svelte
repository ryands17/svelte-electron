<script>
  import * as crayon from 'crayon'
  import * as svelte from 'crayon/svelte'

  const target = document.getElementById('root')
  const app = crayon.create()

  app.use(svelte.router(target))

  app.path('/', async (req, res) => {
    // res.mount(Base, { req, nav: app })
    const Home = (await import('./Home.svelte')).default
    res.mount(Home)
  })

  app.path('/about', async (req, res) => {
    const About = (await import('./About.svelte')).default
    res.mount(About)
  })

  app.load()
</script>
