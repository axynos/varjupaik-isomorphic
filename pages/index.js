import Layout from '../components/layout/default'
import Link from 'next/link'

import contactData from '../data/contacts.json'

export default () => (
  <Layout>
    <header>
      <h2>Tartu Linna Asutus</h2>
      <h1>Varjupaik</h1>
    </header>

    <main>
      <section>
        <h2>Üldinfo</h2>
        <p>{`Pakume peavarjuta jäänud täiskasvanutele ajutist peavarju ning tagame nende turvalisuse.
          Lisaks osutame me ka tugiisikuteenust.`}</p>
        <p>Alustasime tegevust aastal XXXX ja oleme aidanud rohkem kui XXXX inimest.</p>

        <Link href='/teenused'>
          <a>Tutvu meie teenustega</a>
        </Link>
      </section>

      <section>
        Map Display Section
      </section>

      <section>
        <div>
          <h1>Kontakt</h1>
          <div>
            <h2>Üldmeil</h2>
              <p>{contactData.email}</p>
            <h2>Juhataja <span>Viktor Karhu</span></h2>
              <p>(+372) 736 1520</p>
            <h2>Sotsiaaltöötajad</h2>
              {contactData.phones.socialWorkers.map((item, index) =>
                (<p key={index}>{item}</p>))
              }
            <h2>Tugiisikud</h2>
              {contactData.phones.supportPersons.map((item, index) =>
                (<p key={index}>{item}</p>))
              }
          </div>
        </div>

        <div>
          <h2>Asukoht</h2>
          <p>{contactData.location}</p>
        </div>
      </section>
    </main>
  </Layout>
)
