import Accordion from "../Compontes/Home/Accordion"
import Banner from "../Compontes/Home/Banner"
import FeaturedProduts from "../Compontes/Home/FeaturedProduts"
import UserReview from "../Compontes/Home/UserReview"

const Home = () => {
  return (
    <div>
        <Banner></Banner>
  <div className="container mx-auto">
  <div className="my-24">
          <h1 className="mb-16 text-center text-2xl font-semibold">Featured Products</h1>
        <FeaturedProduts></FeaturedProduts>

        </div>
        <div className="my-24">
        <h1 className="mb-16 text-center text-2xl font-semibold">User Rivew</h1>

          <UserReview></UserReview>
        </div>
        <div className="my-24">
        <h1 className="mb-16 text-center text-2xl font-semibold">Frequently Asked Question</h1>

          <Accordion></Accordion>
        </div>
  </div>
    </div>
  )
}

export default Home
