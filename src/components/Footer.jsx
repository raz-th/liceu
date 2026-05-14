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
              Proiect realizat de echipa „EmiVerse”, având ca scop valorificarea istoriei și identității Colegiului Național „Mihai Eminescu” din București printr-o pagină web interactivă, care îmbină informații, imagini și materiale multimedia într-o prezentare modernă și autentică a comunității liceului.

            </p>
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