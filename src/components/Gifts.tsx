import { GravuraPresente } from "./Illustrations";

export default function Gifts() {
  return (
    <section id="gifts" className="ij-section ij-section-warm">
      <div className="ij-center">
        <GravuraPresente size={90} />
        <div style={{ height: 28 }} />
        <div className="ij-section-header">
          <span className="ij-section-eyebrow">Presentes</span>
          <h2>Lista de presentes</h2>
        </div>
        <div className="ij-caixa" style={{ maxWidth: 520 }}>
          <p className="ij-prose" style={{ margin: 0 }}>
            A sua presença é o nosso maior presente. Caso deseje nos presentear,
            deixamos abaixo o link da nossa lista virtual.
          </p>
          <a
            href="https://noivos.casar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ij-gifts-cta"
          >
            Lista virtual
          </a>
        </div>
      </div>
    </section>
  );
}
