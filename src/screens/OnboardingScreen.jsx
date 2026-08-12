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
    <div className="max-w-2xl mx-auto py-6">
      {step === 1 ? (
        <div className="text-center">
          {/* App Icon & Branding */}
          <div className="flex justify-center mb-5">
            <AppIcon size={80} />
          </div>

          <span className="slogan-tag">Bagless • Freedom in Travel</span>

          <h1 className="heading-xl mb-3">
            Viaja leve. Vive com estilo.
          </h1>
          <p className="subheading text-base max-w-lg mx-auto mb-7">
            A app que elimina a mala de viagem. Escolhe o teu destino, aluga um guarda-roupa completo de marcas de topo e recebe tudo pronto a usar no teu hotel.
          </p>

          <div className="bg-surface border border-light rounded-lg p-8 text-left shadow-md mb-6">
            <h3 className="heading-md mb-4 text-center">
              Entrar ou Criar Conta
            </h3>

            {/* Social Logins */}
            <div className="flex gap-3 mb-5">
              <button className="btn-secondary flex-1 text-xs py-2.5">
                <span className="text-base">🌐</span> Google
              </button>
              <button className="btn-secondary flex-1 text-xs py-2.5">
                <span className="text-base"></span> Apple ID
              </button>
            </div>

            <div className="text-center text-xs text-light mb-4">
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
              className="btn-primary btn-full-width py-3.5 mt-2"
              onClick={() => setStep(2)}
            >
              Continuar para Perfil de Tamanhos <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-6 text-xs text-muted">
            <span>✓ Devolução grátis</span>
            <span>✓ Peças 100% higienizadas</span>
            <span>✓ Opção de compra com desconto</span>
          </div>
        </div>
      ) : (
        /* Step 2: Sizes & Style Preferences */
        <div className="bg-surface border border-light rounded-lg p-9 shadow-md">
          <div className="text-center mb-7">
            <span className="badge-weather mb-2">
              <Sparkles size={14} /> Passo 2 de 2
            </span>
            <h2 className="heading-lg">As Tuas Medidas & Estilo</h2>
            <p className="subheading text-xs">
              Garantimos que todas as peças alugadas têm o caimento perfeito no teu corpo.
            </p>
          </div>

          {/* Size inputs */}
          <div className="grid grid-cols-3 gap-4 mb-7">
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
          <div className="form-group mb-7">
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
                    {isSel && <Check size={14} className="inline mr-1" />}
                    {st}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSaveProfile}
            className="btn-primary btn-full-width py-3.5"
          >
            Guardar Perfil e Planear Primeira Viagem <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
