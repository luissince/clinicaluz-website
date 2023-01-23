import Business from '../components/business';
import Billing from '../components/billing';
import CardDeal from '../components/card_deal';
import Clients from '../components/clients';
import Format from '../layout/format';
import Pilares from '../components/pilares';

function Home() {
  return (
    <Format>
      <Business/>
      <Pilares/>
      <CardDeal/>
      <Clients/>
      <Billing/>
    </Format>
  )
}

export default Home;
