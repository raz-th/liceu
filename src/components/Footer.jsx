import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider-top" />
      <div className="footer-inner">
        <div className="footer-grid">

          <div className="footer-brand">
            <p className="footer-brand-name">Colegiul Național „Mihai Eminescu"</p>
            <p className="footer-brand-sub">București, fondat 1926</p>
            <p className="footer-brand-desc">
              Un secol de educație, valori și tradiție — în inima capitalei.
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Navigare</p>
            <ul className="footer-links">
              <li><a href="/">Acasă</a></li>
              <li><a href="/biografie">Biografie</a></li>
              <li><a href="/opere">Opere</a></li>
              <li><a href="/galerie">Galerie</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <ul className="footer-links">
              <li>Str. George Georgescu nr. 2</li>
              <li>Sector 4, București</li>
              <li><a href="mailto:colegiul_eminescu@yahoo.com">colegiul_eminescu@yahoo.com</a></li>
              <li><a href="tel:+40213304001">+40 213 304 001</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-divider" />
          <div className="footer-bottom-row">
            <p className="footer-copy">
              © {new Date().getFullYear()} Colegiul Național „Mihai Eminescu". Toate drepturile rezervate.
            </p>
            <p className="footer-made">
              Proiect educațional al elevilor liceului
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}