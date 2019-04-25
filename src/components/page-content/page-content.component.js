import NavigationPanel from '../navigation-panel/navigation-panel.component';
import './page-content.style.styl';

export default ({ children }) => (
  <main className="page-container">
    <NavigationPanel />
    <div className={'page-content'}>
      <div className="page-content--separator" />
      {children}
    </div>
  </main>
);
