<script>
  import * as crayon from 'crayon'
  import * as svelte from 'crayon/svelte'

  const target = document.getElementById('root')
  const app = crayon.create()

  app.use(svelte.router(target))

  app.path('/', async (req, res) => {
    // res.mount(Base, { req, nav: app })
    const { default: Home } = await import('./Home.svelte')
    res.mount(Home)
  })

  app.path('/about', async (req, res) => {
    const { default: About } = await import('./About.svelte')
    res.mount(About)
  })

  app.load()
</script>
