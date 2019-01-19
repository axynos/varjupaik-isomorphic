import Layout from '../components/layout/default'
import Heading from '../components/markdown/teenused/teenused.md'
import Table from '../components/teenused/table'
import ServiceList from '../components/teenused/services'
import Info from '../components/markdown/teenused/lisainfo.md'

const head = {
  subpage: 'Teenused',
  description: `Varjupaik pakub palju teenuseid tugiisikutest peavarjuni.
               Rohkem informatsiooni ja teenuste tingimused leiad veebilehelt.`
}

const Services = () => (
  <Layout head={head}>
    <main>
      <section key={1}>
        <Heading />
        <Table />
      </section>
      <section key={2}>
        <ServiceList />
        <Info />
      </section>
      <style jsx>{`
        main {
          padding-top: 5vh;
          padding-bottom: 7vh;

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
