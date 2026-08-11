import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIcon } from '../components';

export const OnboardingScreen = () => {
  const { setCurrentScreen, user, setUser } = useApp();
  const [step, setStep] = useState(1); // 1: Intro/Auth, 2: Sizes & Style Preferences

  const [topSize, setTopSize] = useState(user.sizes.top);
  const [bottomSize, setBottomSize] = useState(user.sizes.bottom);
  const [shoeSize, setShoeSize] = useState(user.sizes.shoes);

  const styleOptions = [
    'Resort Casual',
    'Praia Minimalista',
    'Conforto Urbano',
    'Elegância Formal',
    'Outdoors & Aventura'
  ];
  const [selectedStyles, setSelectedStyles] = useState(user.stylePreferences);

  const toggleStyle = (st) => {
    setSelectedStyles((prev) =>
      prev.includes(st) ? prev.filter((item) => item !== st) : [...prev, st]
    );
  };

  const handleSaveProfile = () => {
    setUser((prev) => ({
      ...prev,
      sizes: { top: topSize, bottom: bottomSize, shoes: shoeSize },
      stylePreferences: selectedStyles
    }));
    setCurrentScreen('create-trip');
  };

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '24px 0' }}>
      {step === 1 ? (
        <div style={{ textAlign: 'center' }}>
          {/* App Icon & Branding */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <AppIcon size={80} />
          </div>

          <span className="slogan-tag">Bagless • Freedom in Travel</span>

          <h1 className="heading-xl" style={{ marginBottom: '12px' }}>
            Viaja leve. Vive com estilo.
          </h1>
          <p className="subheading" style={{ fontSize: '16px', maxWidth: '520px', margin: '0 auto 28px auto' }}>
            A app que elimina a mala de viagem. Escolhe o teu destino, aluga um guarda-roupa completo de marcas de topo e recebe tudo pronto a usar no teu hotel.
          </p>

          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              textAlign: 'left',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '24px'
            }}
          >
            <h3 className="heading-md" style={{ marginBottom: '16px', textAlign: 'center' }}>
              Entrar ou Criar Conta
            </h3>

            {/* Social Logins */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <button className="btn-secondary" style={{ flex: 1, fontSize: '13px', padding: '10px' }}>
                <span style={{ fontSize: '16px' }}>🌐</span> Google
              </button>
              <button className="btn-secondary" style={{ flex: 1, fontSize: '13px', padding: '10px' }}>
                <span style={{ fontSize: '16px' }}></span> Apple ID
              </button>
            </div>

            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-light)', marginBottom: '16px' }}>
              ou continua com email
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" defaultValue={user.email} placeholder="teu.email@exemplo.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Palavra-passe</label>
              <input type="password" className="form-input" defaultValue="••••••••••••" placeholder="********" />
            </div>

            <button
              className="btn-primary"
              onClick={() => setStep(2)}
              style={{ width: '100%', padding: '14px', marginTop: '8px' }}
            >
              Continuar para Perfil de Tamanhos <ArrowRight size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '12px', color: 'var(--text-muted)' }}>
            <span>✓ Devolução grátis</span>
            <span>✓ Peças 100% higienizadas</span>
            <span>✓ Opção de compra com desconto</span>
          </div>
        </div>
      ) : (
        /* Step 2: Sizes & Style Preferences */
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span className="badge-weather" style={{ marginBottom: '8px' }}>
              <Sparkles size={14} /> Passo 2 de 2
            </span>
            <h2 className="heading-lg">As Tuas Medidas & Estilo</h2>
            <p className="subheading" style={{ fontSize: '14px' }}>
              Garantimos que todas as peças alugadas têm o caimento perfeito no teu corpo.
            </p>
          </div>

          {/* Size inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
            <div className="form-group">
              <label className="form-label">Roupa Superior</label>
              <select className="form-select" value={topSize} onChange={(e) => setTopSize(e.target.value)}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Calças / Saias</label>
              <select className="form-select" value={bottomSize} onChange={(e) => setBottomSize(e.target.value)}>
                <option value="34">34</option>
                <option value="36">36</option>
                <option value="38">38</option>
                <option value="40">40</option>
                <option value="42">42</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Calçado</label>
              <select className="form-select" value={shoeSize} onChange={(e) => setShoeSize(e.target.value)}>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
              </select>
            </div>
          </div>

          {/* Style Chips */}
          <div className="form-group" style={{ marginBottom: '28px' }}>
            <label className="form-label">Preferências de Estilo para Viagens</label>
            <div className="chip-group">
              {styleOptions.map((st) => {
                const isSel = selectedStyles.includes(st);
                return (
                  <div
                    key={st}
                    className={`chip-item ${isSel ? 'selected' : ''}`}
                    onClick={() => toggleStyle(st)}
                  >
                    {isSel && <Check size={14} style={{ display: 'inline', marginRight: '4px' }} />}
                    {st}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSaveProfile}
            className="btn-primary"
            style={{ width: '100%', padding: '14px' }}
          >
            Guardar Perfil e Planear Primeira Viagem <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
