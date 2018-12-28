import Layout from '../components/layout/default'
import contactData from '../data/contacts.json'

export default () => (
  <Layout>
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

    <section>
      Map Section
    </section>
  </Layout>
)
