import { Slider } from "../components/Slider"
import { Infos } from "../components/Infos"
import { FeaturedProducts } from "../components/FeaturedProducts"
import { Blog } from "../components/Blog"
import { Newsletter } from "../components/Newsletter"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <>
      <Slider />
      <Infos />
      <FeaturedProducts />
      <Blog />
      <Newsletter />

    </>

  )
}
