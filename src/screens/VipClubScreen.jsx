import React, { useState } from 'react';
import { Crown, Check, ShieldCheck, Zap, Sparkles, Hotel, Gift, ArrowRight, Star, Award, Compass, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/ToastNotification';

export const VipClubScreen = () => {
  const { user, setUser, setCurrentScreen } = useApp();
  const { showToast } = useToast();

  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const currentTier = user?.vipTier || 'global';

  const handleSubscribe = (tierKey, tierName) => {
    const updatedUser = {
      ...user,
      vipTier: tierKey,
      vipTierName: tierName
    };
    setUser(updatedUser);
    showToast(`🎉 Parabéns ${user?.name || ''}! Subscreveste com sucesso o plano ${tierName}!`, 'success');
  };

  const plans = [
    {
      id: 'explorer',
      name: 'VIP Explorer',
      badge: '🧭 Explorer',
      badgeClass: 'badge-gender-masculino',
      tagline: 'Ideal para escapadinhas frequentes de fim de semana',
      monthlyPrice: 19.99,
      annualPrice: 149.0,
      monthlyPricePerMonth: 19.99,
      annualPricePerMonth: 12.41,
      popular: false,
      color: '#2563EB',
      borderColor: 'var(--border-light)',
      perks: [
        'Entrega Grátis em Hotéis na Europa (em 24h)',
        '10% Desconto em todos os alugueres de vestuário',
        'Higienização Sanitária UV-C Standard',
        'Guardar até 30 Peças na Lista de Favoritos',
        'Apoio ao Cliente Prioritário por Chat'
      ]
    },
    {
      id: 'global',
      name: 'VIP Global Passport',
      badge: '👑 Global VIP',
      badgeClass: 'badge-gender-unissex',
      tagline: 'O plano mais popular para viajantes internacionais',
      monthlyPrice: 39.99,
      annualPrice: 299.0,
      monthlyPricePerMonth: 39.99,
      annualPricePerMonth: 24.91,
      popular: true,
      color: 'var(--primary-terracotta)',
      borderColor: 'var(--primary-terracotta)',
      perks: [
        'Entrega Prioritária em <2h no Hotel em Todo o Mundo',
        '25% Desconto em Alugueres e Opção de Compra Especial',
        'Proteção Total contra Danos Acidentais (Seguro de Peças)',
        'Higienização Hospitalar com Ozono + Luz UV-C',
        'AI Personal Stylist (Curadoria de Mala Inteligente por Clima)',
        'Devoluções Grátis sem agendamento na receção do Hotel'
      ]
    },
    {
      id: 'firstclass',
      name: 'First Class Elite',
      badge: '💎 First Class',
      badgeClass: 'badge-gender-feminino',
      tagline: 'Para executivos e férias de luxo sem limites',
      monthlyPrice: 89.99,
      annualPrice: 699.0,
      monthlyPricePerMonth: 89.99,
      annualPricePerMonth: 58.25,
      popular: false,
      color: '#7C3AED',
      borderColor: 'var(--border-medium)',
      perks: [
        'Alugueres Ilimitados: Até 10 peças no hotel por viagem sem taxas/dia',
        'Entrega VIP Express com Bagagista Privado na Suíte',
        'Acesso Exclusivo a Marcas de Alta-Costura (LOEWE, Gucci, Rolex, Zimmermann)',
        'Seguro Total + Peça Substituta Urgente em 1 hora',
        'Concierge Pessoal 24/7 via WhatsApp Dedicado',
        'Mala Rígida Rimowa Cortesia Incluída em cada viagem'
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '1040px', margin: '0 auto', paddingBottom: '50px' }}>
      {/* Hero Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-subtle) 100%)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '36px 32px',
          marginBottom: '32px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <span
          style={{
            background: 'var(--primary-terracotta-light)',
            color: 'var(--primary-terracotta)',
            fontWeight: 800,
            fontSize: '11px',
            padding: '5px 14px',
            borderRadius: 'var(--radius-full)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px'
          }}
        >
          <Crown size={14} /> Clube Bagless VIP Passport
        </span>

        <h1 className="heading-xl" style={{ fontSize: '32px', marginBottom: '10px' }}>
          Viaja Sem Bagagem com Benefícios Exclusivos
        </h1>

        <p className="subheading" style={{ fontSize: '15px', maxWidth: '640px', margin: '0 auto 24px auto' }}>
          Escolha o plano VIP perfeito para o teu estilo de viagem. Entregas no hotel, seguros contra danos e higiene hospitalar incluídos.
        </p>

        {/* Monthly / Annual Billing Toggle */}
        <div style={{ display: 'inline-flex', background: 'var(--bg-surface)', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-medium)' }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`chip-item ${billingCycle === 'monthly' ? 'selected' : ''}`}
            style={{ fontSize: '13px', padding: '8px 20px', borderRadius: 'var(--radius-full)' }}
          >
            Facturação Mensal
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`chip-item ${billingCycle === 'annual' ? 'selected' : ''}`}
            style={{ fontSize: '13px', padding: '8px 20px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            Facturação Anual <span style={{ background: '#22C55E', color: '#FFFFFF', fontSize: '10px', padding: '2px 6px', borderRadius: 'var(--radius-full)', fontWeight: 800 }}>Poupe 25%</span>
          </button>
        </div>
      </div>

      {/* 3 VIP Pricing Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        {plans.map((plan) => {
          const isCurrent = currentTier === plan.id;
          const displayPrice = billingCycle === 'annual' ? plan.annualPricePerMonth : plan.monthlyPricePerMonth;
          const totalPriceNote = billingCycle === 'annual' ? `${plan.annualPrice}€ cobrados anualmente` : `${plan.monthlyPrice}€ cobrados mensalmente`;

          return (
            <div
              key={plan.id}
              style={{
                background: 'var(--bg-surface)',
                border: isCurrent ? '2px solid var(--accent-olive)' : plan.popular ? '2px solid var(--primary-terracotta)' : `1px solid ${plan.borderColor}`,
                borderRadius: 'var(--radius-lg)',
                padding: '30px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: isCurrent ? 'var(--shadow-md)' : plan.popular ? 'var(--shadow-md)' : 'var(--shadow-sm)'
              }}
            >
              {isCurrent ? (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent-olive)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '11px',
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  ✓ Teu Plano Ativo
                </div>
              ) : plan.popular ? (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--primary-terracotta)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '11px',
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  ⭐ Mais Popular
                </div>
              ) : null}

              <div>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className={`badge-gender ${plan.badgeClass}`} style={{ fontSize: '12px' }}>
                    {plan.badge}
                  </span>
                  {isCurrent && (
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-olive)', background: 'var(--accent-olive-light)', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                      Ativo
                    </span>
                  )}
                </div>

                <h3 className="heading-md" style={{ fontSize: '22px', marginBottom: '6px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', minHeight: '36px', marginBottom: '16px' }}>
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)' }}>
                      {displayPrice.toFixed(2)}€
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/ mês</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>
                    {totalPriceNote}
                  </div>
                </div>

                {/* Perks Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {plan.perks.map((perk, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '13px' }}>
                      <Check size={16} color="var(--primary-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--text-main)', lineHeight: 1.35 }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSubscribe(plan.id, plan.name)}
                className={isCurrent ? 'btn-secondary' : 'btn-primary'}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  backgroundColor: isCurrent ? 'var(--bg-subtle)' : undefined,
                  borderColor: isCurrent ? 'var(--accent-olive)' : undefined,
                  color: isCurrent ? 'var(--accent-olive)' : undefined
                }}
              >
                {isCurrent ? '✓ Plano Ativo' : `Ativar ${plan.name}`}
              </button>
            </div>
          );
        })}
      </div>

      {/* Downgrade / Standard Option */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <button
          onClick={() => handleSubscribe('none', 'Membro Standard')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '13px',
            color: 'var(--text-muted)',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
        >
          {currentTier === 'none' ? '✓ Estás atualmente no plano Standard (Sem benefícios VIP)' : 'Prefiro usar o Bagless no plano Standard sem subscrição VIP'}
        </button>
      </div>

      {/* VIP Guarantees & FAQ */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <h2 className="heading-md" style={{ fontSize: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={20} color="var(--primary-terracotta)" /> Perguntas Frequentes sobre o Bagless VIP
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>Posso cancelar a minha subscrição a qualquer momento?</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              Sim, sem qualquer fidelização ou custos adicionais. Podes cancelar ou alterar o teu plano VIP diretamente no teu perfil a qualquer momento.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>Como funciona a entrega prioritária no hotel?</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              A nossa equipa de logística coordena diretamente com a receção do teu hotel. Quando chegas ao quarto, o teu kit de roupa limpo e engomado já está à tua espera.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>O seguro cobre manchas ou danos nas roupas?</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              Sim! Os planos Global VIP e First Class incluem Proteção Total contra Danos. Podes desfrutar das tuas férias sem receio de nódoas de vinho ou pequenos rasgões.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>Como é feito a devolução no final da viagem?</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              Basta guardar as peças no saco higiénico reutilizável Bagless e deixá-lo na receção do hotel ao fazer o check-out. Nós recolhemos automaticamente!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
