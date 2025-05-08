import router from '@adonisjs/core/services/router'
import { Request } from '@adonisjs/core/http';



router.get('/inicio', async (req, res) => {
  return {
    mensaje: 'Bienvenido a la API de productos!'
  }
})

router.post('/productos', async ({request, response}) => {
  
  const datos = request.body()
  return response.json({
    mensaje: 'Producto creado: ', datos: datos
  })
})


router.put ('/productos/:id', async ({params,request, response}) => {
  const datos = request.body()
  return response.json({
    mensaje: 'Producto actualizado: ', datos: datos
  })
})

router.delete ('/productos/:id', async ({params,request, response}) => {
  return response.json({
    mensaje: 'Producto eliminado'
  })
})
