import ContactInformation from '../../components/About/ContactInformation';
import OurSpace from '../../components/About/OurSpace';
import Booking from '../../components/Form/booking';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const BookingPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website"
        />
      }
    >
      <div className="pt-24 sm:pt-28 md:pt-36 pb-20">
        <ContactInformation />
        <div>
          <OurSpace />
        </div>
        <div className="pt-8">
          <Booking />
        </div>
      </div>
    </Main>
  );
};
export default BookingPage;
