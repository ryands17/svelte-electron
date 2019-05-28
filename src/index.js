import * as crayon from 'crayon'
import * as svelte from 'crayon/svelte'
import './index.css'

const target = document.getElementById('root')

const app = crayon.create()

app.use(svelte.router(target))

app.path('/', async (req, res) => {
  // res.mount(Base, { req, nav: app })
  const { default: Home } = await import('./routes/Home.svelte')
  res.mount(Home)
})

app.path('/about', async (req, res) => {
  const { default: About } = await import('./routes/About.svelte')
  res.mount(About)
})

app.load()
