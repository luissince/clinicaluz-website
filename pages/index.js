import styles from "../constants/style";
// compoenents
import Navbar from '../components/navbar';
import Slider from '../components/slider';
import Stats from '../components/stats';
import Business from '../components/business';
import Billing from '../components/billing';
import CardDeal from '../components/card_deal';
import Testimonials from '../components/testimonials';
import Clients from '../components/clients';
import Cta from '../components/cta';
import Footer from '../components/footer';

import Format from '../layout/format';

export default function Home() {
  return (
    <Format>
      <Navbar />
      <Slider />
      <Business />
      <Billing />
      <CardDeal />
    </Format>
  )
}
