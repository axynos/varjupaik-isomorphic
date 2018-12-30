import Layout from '../components/layout/default'
import Link from 'next/link'

import contactData from '../data/contacts.json'

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
          height: 60vh;
          width: 100%;

          background-image: url('/static/images/varjupaik-18-large.jpg');
          background-size: cover;
          background-position: center;

          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 75%);

          display: grid;
          grid-template-columns: 0.25fr 1fr 0.25fr;
          grid-template-rows: 1fr;
          grid-template-areas: ". . .";
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
        <p>{`Pakume peavrjuta jäänud täiskasvanutele ajutist peavarju ning tagame nende turvalisuse.
          Lisaks osutame me ka tugiisikuteenust.`}</p>
        <p>Alustasime tegevust aastal XXXX ja oleme aidanud rohkem kui XXXX inimest.</p>

        <Link href='/teenused'>
          <a>Tutvu meie teenustega <span>arrow_forward</span></a>
        </Link>
      </section>

      <section className='map'>
        Map Display Section
      </section>

      <section className='contact'>
        <h1 className='title'>Kontakt</h1>
        <div>
          <div>
            <h2>Üldmeil</h2>
              <p>{contactData.email}</p>
            <h2>Juhataja</h2>
              <h3>Viktor Karhu</h3>
              <p>(+372) 736 1520</p>
            <h2>Sotsiaaltöötajad</h2>
              {contactData.phones.socialWorkers.map((item, index) =>
                (<p key={index}>{item}</p>))
              }
          </div>
        </div>

        <div>
          <h2>Tugiisikud</h2>
            {contactData.phones.supportPersons.map((item, index) =>
              (<p key={index}>{item}</p>))
            }
          <h2>Asukoht</h2>
            <p>{contactData.location}</p>
        </div>
      </section>

      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 0.25fr 1fr 0.25fr;
          grid-template-rows: 3fr;
          grid-template-areas: ". . .";
        }

        .jumbotron {
          grid-row: 1
        }

        .map {
          grid-row: 2;
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
