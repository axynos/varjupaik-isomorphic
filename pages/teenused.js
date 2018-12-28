import Layout from '../components/layout/default'
import Table from '../components/teenused/table'
import Service from '../components/teenused/service'

export default () => (
  <Layout>
    <h1>Teenused</h1>
    <p>Siin on meie teenuste nimekiri, allpool on saadaval teenuste pikemad
      kirjeldused ning tingimused.
    </p>

    <Table />
    <Service />

  </Layout>
)
