import Layout from '../components/layout/default'
import Heading from '../components/markdown/teenused/teenused.md'
import Table from '../components/teenused/table'
import ServiceList from '../components/teenused/services'

const Services = () => (
  <Layout>
    <main>
      <section key={1}>
        <Heading />
        <Table />
      </section>
      <section key={2}>
        <ServiceList />
      </section>
      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr 2.5fr 1fr;
          grid-template-rows: 1fr;
          grid-template-areas: ". . .";
        }

        section {
          grid-column: 2;
        }

        @media all and (max-width:60em) {
          main {
            grid-template-columns: 1fr 10fr 1fr;
          }
        }
      `}</style>
    </main>
  </Layout>
)

export default Services
