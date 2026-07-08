import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="ij-footer">
      <div className="ij-footer-inner">
        <div className="ij-footer-mono">
          <Logo size={120} color="#F3EFE7" />
        </div>
        <p className="ij-footer-date">01 . 07 . 2027</p>
        <p className="ij-footer-place">Convent de Blanes · Costa Brava, Espanha</p>
        <div className="ij-footer-divider" />
        <p className="ij-footer-love">
          com amor, Isabele <em className="amp">&amp;</em> João
        </p>
      </div>
      <div className="ij-footer-word">Isabele &amp; João</div>
      <div className="ij-footer-bar">
        <span>Costa Brava · 2027</span>
        <span>Feito com carinho</span>
      </div>
    </footer>
  );
}
