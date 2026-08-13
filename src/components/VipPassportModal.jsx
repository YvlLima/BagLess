import React from 'react';
import { X, Crown, Zap, ShieldCheck, Sparkles, Gift, Hotel, CheckCircle2, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getVipDetails } from '../utils/vip';

export const VipPassportModal = ({ isOpen, onClose }) => {
  const { user, setCurrentScreen } = useApp();

  if (!isOpen) return null;

  const vipTier = user?.vipTier || 'global';
  const vipDetails = getVipDetails(vipTier);

  const vipPerks = [
    {
      icon: <Hotel size={22} color="var(--primary-terracotta)" />,
      title: `${vipDetails.deliverySpeed}`,
      desc: 'O teu kit de vestuário é entregue diretamente na receção ou no teu quarto de hotel antes de fazeres o check-in.'
    },
    {
      icon: <ShieldCheck size={22} color="var(--accent-olive)" />,
      title: vipDetails.careProtectionDiscountPercent >= 100 ? 'Proteção Total contra Danos (100% Grátis)' : `Proteção com ${vipDetails.careProtectionDiscountPercent}% Desconto`,
      desc: 'Seguro VIP zero preocupações: cobre manchas acidentais, rasgões ou desgaste em tecidos finos e peças de luxo.'
    },
    {
      icon: <Sparkles size={22} color="#D97706" />,
      title: `${vipDetails.rentalDiscountPercent}% Desconto em Todos os Alugueres`,
      desc: 'Todas as peças no teu Kit têm desconto imediato sobre a tarifa diária anunciada.'
    },
    {
      icon: <Gift size={22} color="var(--primary-terracotta)" />,
      title: `${vipDetails.purchaseDiscountPercent > 0 ? `${vipDetails.purchaseDiscountPercent}% Desconto na Opção de Compra` : 'Opção de Compra Especial Pós-Viagem'}`,
      desc: 'Ganha tarifas reduzidas no aluguer diário de longa duração e preços exclusivos de compra caso decidas ficar com a peça.'
    },
    {
      icon: <Zap size={22} color="#3B82F6" />,
      title: vipDetails.depositDiscountPercent >= 100 ? 'Isenção Total de Caução (€0)' : `Caução com ${vipDetails.depositDiscountPercent}% de Redução`,
      desc: 'Reservas sem necessidade de pré-autorizações burocráticas elevadas no teu cartão de crédito.'
    },
    {
      icon: <Crown size={22} color="#D97706" />,
      title: `Guardar até ${vipDetails.wishlistLimit === Infinity ? 'Ilimitados' : vipDetails.wishlistLimit} Favoritos na Wishlist`,
      desc: 'Guarda todos os teus looks favoritos para planear as tuas futuras viagens sem restrições.'
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-lg"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '32px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-terracotta-light)', color: 'var(--primary-terracotta)', fontWeight: 800, fontSize: '11px', padding: '4px 10px', borderRadius: 'var(--radius-full)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              <Crown size={14} /> Membro Bagless Passport VIP
            </div>
            <h2 className="heading-lg" style={{ fontSize: '22px', margin: 0 }}>
              Como Funciona o teu estatuto VIP
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-subtle)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Member Status Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-surface) 100%)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Titular do Passaporte
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
              {user?.name || 'Membro VIP'}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-olive)', fontWeight: 700, fontSize: '12px', background: 'var(--accent-olive-light)', padding: '6px 12px', borderRadius: 'var(--radius-full)' }}>
            <CheckCircle2 size={16} /> {vipDetails.name}
          </div>
        </div>

        {/* Perks List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px', maxHeight: '340px', overflowY: 'auto', paddingRight: '4px' }}>
          {vipPerks.map((perk, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                padding: '12px 14px',
                background: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {perk.icon}
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-main)' }}>
                  {perk.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.4 }}>
                  {perk.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => {
              onClose();
              if (setCurrentScreen) setCurrentScreen('vip-club');
            }}
            className="btn-primary"
            style={{ flex: 1, padding: '12px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            <Crown size={16} /> Ver & Gerir Planos VIP
          </button>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '12px 20px', fontSize: '13px' }}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
