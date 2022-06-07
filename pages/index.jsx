import { Header } from "../components/Header"
import { Slider } from '../components/Slider'
import { Infos } from "../components/Infos"
import { FeaturedProducts } from "../components/FeaturedProducts"

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Infos />
      <FeaturedProducts />
    </>

  )
}
