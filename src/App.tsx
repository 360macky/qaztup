import React from 'react'
import logo from './logo.svg'
import links from './links.json'
import { Link } from 'react-router-dom'
import './App.css'

const getDays = (): number => {
  const start = new Date('07/30/2015')
  const now = new Date()
  const difference: number = now.getTime() - start.getTime()
  return Math.ceil(difference / (1000 * 3600 * 24))
}

interface ILinkProps {
  refLink: string;
  title: string;
  description: string;
}

function QLink (props: ILinkProps) {
  return (
    <p className="Interesting-item">
      <a
        className="App-link Interesting-link"
        href={props.refLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>{' '}
      - {props.description}
    </p>
  )
}

function App () {
  return (
    <div className="App">
      <div className="App-container">
        <section className="App-home-screen">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <b>Qaztup</b> fue la primera aplicación desarrollada por{' '}
            <b>
              <a
                className="App-link"
                href="https://marceloarias.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @360macky
              </a>
            </b>
            .
          </p>
          <p>2015 - 2022</p>
        </section>
        <p>
          <Link to="/search" className="App-button">
            Buscador
          </Link>
        </p>
        <b className="Emojis">✨🚀🦄</b>
        <h2 className="Section-title">🔗 Enlaces interesantes ⚡️</h2>
        <p className="Section-description">
          Lista de {links.length} enlaces de los últimos {getDays()} días.
        </p>
        {links.map((link, index) => (
          <QLink
            key={index}
            refLink={link.refLink}
            title={link.title}
            description={link.description}
          />
        ))}

        <h2 className="Section-title">📨 Q-Mail 📬</h2>
        <p className="Section-description">
          Envía enlaces interesantes a nuestro correo electrónico.
        </p>
        <p className="Section-description">
          <a className="App-link" href="mailto:team@qaztup.org">
            team@qaztup.org
          </a>
        </p>
        <h2 className="Section-title">🛰 Propósito 🔭</h2>
        <p className="Section-description">
          Aprendí a programar para crear cosas.
        </p>
      </div>
    </div>
  )
}

export default App
