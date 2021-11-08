// componente visual (não setável).
function AptIVCF() {
  return (
    <div id="IVCF" className="menucontainer">
      <div id="título"
        className="title2">FRAGILIDADE CLINICO-FUNCIONAL
      </div>
      <div id="fundo"
        style={{
          position: 'relative',
          width: 0,
          height: 0,
          backgroundColor: 'yellow',
          borderRight: '80vw solid transparent',
          borderBottom: '30vw solid green',
        }}>
        <div id="marcadores da escala" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
          <button className="green-buttom" style={{ borderRadius: 50, top: '10%', right: '10%' }}>
            01
          </button>
          <button className="green-buttom" style={{ borderRadius: 50, top: '20%', right: '20%' }}>
            02
          </button>
          <button className="green-buttom" style={{ borderRadius: 50, top: '30%', right: '30%' }}>
            03
          </button>
          <button className="yellow-buttom" style={{ borderRadius: 50, top: '40%', right: '40%' }}>
            04
          </button>
          <button className="yellow-buttom" style={{ borderRadius: 50, top: '50%', right: '50%' }}>
            05
          </button>
          <button className="red-buttom" style={{ borderRadius: 50, top: '60%', right: '60%' }}>
            06
          </button>
          <button className="red-buttom" style={{ borderRadius: 50, top: '70%', right: '70%' }}>
            07
          </button>
          <button className="red-buttom" style={{ borderRadius: 50, top: '80%', right: '80%' }}>
            08
          </button>
          <button className="red-buttom" style={{ borderRadius: 50, top: '90%', right: '90%' }}>
            09
          </button>
          <button className="red-buttom" style={{ borderRadius: 50, top: '100%', right: '100%' }}>
            10
          </button>
        </div>
      </div>
      <div id="legenda"
        style={{
          width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
          height: 50, backgroundColor: 'linear-gradient(to right, green, yellow)',
        }}>
        <div className="title2">ENVELHECIMENTO FISIOLÓGICO (SENESCÊNCIA)</div>
        <div className="title2">ENVELHECIMENTO PATOLÓGICO (SENILIDADE)</div>
      </div>
      <div id="estratos"
        style={{
          width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center',
        }}>
        <button className="green-button">
          <div className="title3">IDOSO ROBUSTO</div>
          <div className="title3">AUSÊNCIA DE DECLÍNIO FUNCIONAL</div>
        </button>
        <button className="yellow-button">
          <div className="title3">IDOSO EM RISCO DE FRAGILIZAÇÃO</div>
          <div className="title3">DECLÍNIO FUNCIONAL IMINENTE</div>
        </button>
        <button className="red-button">
          <div className="title3">IDOSO FRÁGIL</div>
          <div className="title3">DECLÍNIO FUNCIONAL ESTABELECIDO</div>
        </button>
      </div>
    </div>
  )
}

export default AptIVCF;