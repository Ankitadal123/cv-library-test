import Header from '../components/Header';
//import LocationAutocomplete from '../components/LocationAutocomplete.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Home() {
  return (
    <>
      <Header />
     
      
      {/* Other sections like location autocomplete, tab content */}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}