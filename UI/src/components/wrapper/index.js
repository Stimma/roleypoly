import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import Logotype from '../logotype'
import styles from './styles'

class Wrapper extends Component {
  render () {
    return <div style={styles.root}>
      <div style={styles.background} />
      <div style={styles.container}>
        <nav uk-navbar='' style={styles.nav} className='uk-navbar-transparent'>
          <div className='uk-navbar-left'>
            <Logotype style={{ height: '2rem' }} />
          </div>
          <div class='uk-navbar-right'>
            <ul class='uk-navbar-nav'>
              <li><Link to='/start'>Get Started</Link></li>
              <li><a href='https://discord.gg/PWQUVsd'>Support Discord</a></li>
            </ul>
          </div>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    </div>
  }
}

export default Radium(Wrapper)