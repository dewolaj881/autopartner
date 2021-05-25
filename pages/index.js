import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
export default function Home() {
  return (
    <body className="bg-gray-900">
      <header>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
        <div>
          <Nav></Nav>
          <Showcase></Showcase>
        </div>
      </header>
    </body>
  )
}
