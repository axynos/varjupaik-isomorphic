import dynamic from 'next/dynamic'
import css from 'styled-jsx/css'

// const filenames = [
//   'sotsiaalmajutusteenus',
//   'sotsiaaleluasemeteenus',
//   'tugiisikuteenus'
// ]

import Smt from '../markdown/teenused/kirjeldused/sotsiaalmajutusteenus.md'
import Set from '../markdown/teenused/kirjeldused/sotsiaaleluasemeteenus.md'
import Tut from '../markdown/teenused/kirjeldused/tugiisikuteenus.md'

const components = [Smt, Set, Tut]

const { className, styles} = css.resolve`
  ul li {
    line-height: 1.5em;
    margin-bottom: 0.5vh;
    color: rgba(0, 0, 0, 0.75);
  }

  ul {
    padding-left: 0;
  }
`

const myUl = props => <ul style={{ paddingLeft: '0' }} {...props}/>
const myLi = props => <li style={{ lineHeight: '1.5em', marginBottom: '0.5vh', color: 'rgba(0, 0, 0, 0.75)'}} {...props} />

const mdxComponents = {
  ul: myUl,
  li: myLi
}


// This fails in production for some reason, but I can't debug it, so I'll just comment it out right now.
// const components = (
//   filenames.map((current,index) => {
//     const Component = dynamic(_ => import(`../markdown/teenused/kirjeldused/${current}.md`))
//     return (
//       <div key={index}>
//         <Component components={mdxComponents}/>
//       </div>
//     )
//   })
// )

const Services = (props) => {
  return (
    <div>
      <h1>Teenuste kirjeldused & tingimused</h1>
      <Smt />
      <Set />
      <Tut />
    </div>
  )
}

export default Services
