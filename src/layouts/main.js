import Meta from '../components/meta';
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';
import PageContent from '../components/page-content/page-content.component';
import './standart-layout-style.styl';

export default ({ children }) => (
  <div className="page-container">
    <Meta />
    <Header />
    <PageContent>{children}</PageContent> */}
    <Footer />
  </div>
);
