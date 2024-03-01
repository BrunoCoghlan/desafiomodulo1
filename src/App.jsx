import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header name='Adopta un perrito' />
        <div className="row gap-3 justify-content-center">
          <MyCard url='https://placedog.net/640/480?r' name='Guffy' description='Gufy es el perrito mas adorable' tagName='Adopta a Guffy' tagColor='primary' />
          <MyCard url='https://placedog.net/640/490?r' name='Saku' description='Saku es una cachorrita rescatada de incendios' tagName='Adopta a Saku' tagColor='danger' />
          <MyCard url='https://placedog.net/640/470?r' name='koffe' description='Koffe es un perro extramadamente amoroso, sufre de apego ansioso' tagName='Adopta a Koffy' tagColor='warning' />
          <MyCard url='https://placedog.net/640/460?r' name='Logan' description='Logan es el mejor perro guardian que podrias desear' tagName='Adopta a Logan' tagColor='success' />
        </div>
      <Footer description='Explora nuestra galería de adopción  de perro para encontrar a tu compañero perfecto. tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. cada imagen captura su esencia única. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre.' />
    </>
  )
}

export default App
