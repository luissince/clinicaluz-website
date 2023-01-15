import styles from "../constants/style";
// compoenents
import Navbar from '../components/navbar';
import Hero from '../components/hero';
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
      <div className="bg-primary w-full overflow-hidden">
        <div className="xl:container mx-auto">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary  ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary`}>
            <div className={`${styles.boxWidth} `}>
              {/* <Stats /> */}
              <Business />
              {/* <Billing /> */}
              {/* <CardDeal /> */}
              {/* <Testimonials /> */}
              {/* <Clients /> */}
              {/* <Cta /> */}
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </Format>
  )
}
