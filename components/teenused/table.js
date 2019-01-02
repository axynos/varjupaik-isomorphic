export default () => (
  <div className='table-container'>
    <table>
      <tbody>
        <tr key={1}>
          <th key={1}>Teenus</th>
          <th key={2}>Lühikirjeldus</th>
          <th key={3}>Hind</th>
        </tr>
        <tr key={2}>
          <td key={1}>Tugiisikuteenus</td>
          <td key={2}>Siin on tugiisikuteenuse lühikirjeldus. Siin on natuke lisaks suvalist teksti.</td>
          <td key={3}>264 / tund</td>
        </tr>
        <tr key={3}>
          <td key={1}>Mingi teine teenus</td>
          <td key={2}>Siin on teise teenuse lühikirjeldus.</td>
          <td key={3}>417€ / tund</td>
        </tr>
        <tr key={4}>
          <td key={1}>Kolmas teenus</td>
          <td key={2}>Midagi kolmanda teenuse kohta.</td>
          <td key={3}>15€ / tund</td>
        </tr>
        <tr key={5}>
          <td key={1}>Neljanda teenuse nimetus</td>
          <td key={2}>Täitev tekst hüpoteetilise neljanda teenuse kohta.</td>
          <td key={3}>38€ / tund</td>
        </tr>
        <tr key={6}>
          <td key={1}>Viimane teenus nimekirjas</td>
          <td key={2}>Siin on midagi viimase teenuse kohta.</td>
          <td key={3}>61€ / tund</td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      tr th:first-of-type, tr td:first-of-type {
         padding-left: 1vw;
      }

      tr th:last-of-type, tr td:last-of-type {
         padding-right: 1vw;
      }

      tr th:nth-of-type(2), tr td:nth-of-type(2) {
         width: auto;
      }

      tr th:nth-of-type(3), tr td:nth-of-type(3) {
         min-width: 80px;
      }

      tr:nth-child(even) {
         background-color: #e8e8e8;
      }

      th {
        text-align: left;
        padding-bottom: 1vh;
      }

      td {
        vertical-align: top;
      }

      th, td {
        padding-right: 40px;
        padding-top: 0.75vh;
        padding-bottom: 1.5vh;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        overflow-x: scroll;
      }

      .table-container {
        width: 100%;
        margin-top: 3vh;
        margin-bottom: 6vh;
      }
    `}</style>
  </div>
)
