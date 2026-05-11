import Image from "next/image";

export default function Footer() {
  return (
    <footer className="ij-footer">
      <Image
        src="/assets/monogram-olive.png"
        alt="I&J"
        width={64}
        height={64}
        className="ij-footer-mono"
      />
      <div className="date-marker" style={{ fontSize: 14 }}>
        01 . 07 . 2027
      </div>
      <div className="ij-footer-place">
        Convent de Blanes · Costa Brava, Espanha
      </div>
      <div className="ij-footer-love">
        com amor, Isabele <span className="amp">&</span> João
      </div>
    </footer>
  );
}
