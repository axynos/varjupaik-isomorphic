import Layout from '../components/layout/default'
import contactData from '../data/contacts.json'
import Map from '../components/map'

const head = {
  subpage: 'Kontakt',
  description: `Siit leiad nii Varjupaiga üldmeili kui ka juhataja,
                tugiisikute kui ka sotsiaaltöötajate kontaktid.`
}

export default () => (
  <Layout head={head}>
    <main>
      <section className='contact'>
        <h1 className='title'>Kontakt</h1>
        <div className='col-1'>
          <div>
          <h2>Üldmeil</h2>
            <p>{contactData.email}</p>
          <h2>Juhataja</h2>
            <h3>Viktor Karhu</h3>
              <p>{contactData.phones.director}</p>
          <h2>Sotsiaaltöötajad</h2>
            {contactData.phones.socialWorkers.map((item, index) =>
              (<p key={index}>{item}</p>))
            }
          </div>
        </div>

        <div className='col-2'>
          <h2>Tugiisikud</h2>
            {contactData.phones.supportPersons.map((item, index) =>
              (<p key={index}>{item}</p>))
            }
          <h2>Korrapidaja (24h)</h2>
            {contactData.phones.monitor.map((item, index) =>
              (<p key={index}>{item}</p>))
            }
          <h2>Asukoht</h2>
            <p>
              <a href={contactData.locationURL}>
                {contactData.location}
              </a>
            </p>
        </div>
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

        @media all and (max-width:31.25em) {
          main {
            grid-template-columns: 1fr 10fr 1fr;
          }
        }

        .contact {
          grid-column: 2;

          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1auto 1fr;
          grid-template-areas: "title title" ". .";
          column-gap: 20px;

          padding-bottom: 7vh;
        }

        .contact .title {
          grid-area: title;
        }

        .contact p {
          text-align: left;
        }

        @media all and (max-width:31.25em) {
          .col-2 {
            grid-column: 1;
          }
        }
      `}</style>
    </main>

    <section className='map'>
      <Map
        lat={58.393301}
        lng={26.722904}
        zoom={18}
        showMarker
      />

      <style jsx>{`
        .map {
          grid-area: map;
          grid-row: 2;
          height: 80vh;
          width: 100%;
        }
        `}
      </style>
    </section>
  </Layout>
)
