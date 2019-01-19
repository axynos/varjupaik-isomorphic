import Layout from '../components/layout/default'
import Map from '../components/map'
import Link from 'next/link'
import Head from '../components/head/head'

import contactData from '../data/contacts.json'

const generalDescription = `
      Tartu Linna Asutus Varjupaik on Tartu Linnavalitsuse sotsiaal- ja
      tervishoiuosakonna haldusalas tegustev kohaliku omavalitsuse asutus.
      Varjupaik pakub ajutise peavarju teenust, sotsiaalmajutusteenust ja
      sotsiaaleluruumi teenust. Samas majas asub ka tugiisikute tööruum.
      `

export default () => (
  <Layout>
    <header>
      <div className='title'>
        <h2>Tartu Linna Asutus</h2>
        <h1>Varjupaik</h1>
      </div>
      <style jsx>{`
        header {
          min-height: 400px;
          height: 70vh;
          width: 100%;

          background-image: url('/static/images/large/varjupaik-18.jpg');
          background-size: cover;
          background-position: center;

          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 75%);

          display: grid;
          grid-template-columns: 1fr 2.5fr 1fr;
          grid-template-rows: 1fr;
          grid-template-areas: ". . .";
        }

        @media all and (max-width:31.25em) {
          header {
            grid-template-columns: 1fr 10fr 1fr;
          }
        }

        .title {
          grid-column: 2;
          grid-row: 1;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h1 {
          font-size: 5em;
          color: white;
          margin-top: 0;
        }

        h2 {
          font-size: 2em;
          font-weight: 500;
          font-style: italic;

          color: white;
          opacity: 0.6;
          margin-bottom: 0;
        }
        `}
      </style>
    </header>

    <main>
      <section className='jumbotron'>
        <h1>Üldinfo</h1>
        <p>{generalDescription}</p>

        <Link href='/teenused'>
          <a>Tutvu meie teenustega <span>arrow_forward</span></a>
        </Link>
      </section>

      <section className='map'>
        <Map
          lat={58.393301}
          lng={26.722904}
          zoom={18}
          showMarker
        />
      </section>

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
            {contactData.phones.monitor}
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
          padding-top: 3.5vh;
          padding-bottom: 3.5vh;

          display: grid;
          grid-template-columns: 1fr 2.5fr 1fr;
          grid-template-rows: 3fr;
          grid-template-areas: ". . ." "map map map" ". . .";
        }

        @media all and (max-width:31.25em) {
          main {
            grid-template-columns: 1fr 10fr 1fr;
          }
        }

        .jumbotron {
          grid-row: 1
        }

        .map {
          grid-area: map;
          grid-row: 2;
          height: 80vh;
          width: 100%;
        }

        .contact {
          grid-row: 3;

          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1auto 1fr;
          grid-template-areas: "title title" ". .";
          column-gap: 20px;
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

        section {
          padding-bottom: 7.5vh;
          grid-column: 2;
        }

        .jumbotron a {
          display: inline-block;
          margin-top: 0.5vh;
          background-color: #00ACFF;
          padding: 0.8em 1.25em;

          font-size: 1.15em;
          text-decoration: none;
          color: white;
          font-weight: bold;

          margin-bottom: 0.5vh;

          transition: all 0.15s ease-out 0s;
        }

        .jumbotron a:hover {
          background-color: #33BDFF;
          box-shadow: 2px 2px 20px 2px rgba(0,88,130,0.10);
        }

        .jumbotron span {
          font-family: 'Material Icons';
          position: relative;
          top: 2.5px;
          margin-left: 0.75em;
        }
        `}
      </style>
    </main>
  </Layout>
)
