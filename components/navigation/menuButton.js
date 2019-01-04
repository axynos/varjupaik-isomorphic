import css from 'styled-jsx/css'
import React from 'react';

const style = css`
  div {
    grid-area: right;
    display: flex;
    justify-content: flex-end;
  }

  a {
    display: none;
    font-family: 'Material Icons';
    font-size: 2em;
    color: white;

    padding: 0.75vh 0;

    cursor: pointer;
  }

  .button {
    grid-area: button;

    font-size: 1.25em;
    padding: 2vh 0px;
  }

  @media all and (max-width:50em) {
    a {
      display: inline-block;
    }
  }
`

const MenuButton = (props) => {
  const icon = props.active ? 'close' : 'menu'

  return (
    <div className={props.mobile ? 'button' : ''}>
      <a onClick={() => props.clickHandler()}>
        {icon}
      </a>
      <style jsx>{style}</style>
    </div>
  )
}

export default MenuButton
