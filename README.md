# 🧳 Bagless — Viaja leve. Vive com estilo. (Travel Light. Dress Right.)

**Bagless** é uma aplicação web e mobile inovadora que revoluciona a forma como viajamos. Ao eliminar a necessidade de carregar malas pesadas de viagem, o Bagless permite aos utilizadores alugar um guarda-roupa completo e personalizado de marcas premium (e.g., Jacquemus, Zimmermann, LOEWE, Rolex, Uniqlo) entregue diretamente na receção do seu hotel de destino, limpo e higienizado segundo o padrão hospitalar.

---

## 🌟 Principais Funcionalidades

1. **📱 Arquitetura Partilhada Web & Mobile Frame:**
   - Alternância fluida entre o modo Web Desktop e a moldura interativa de App Mobile (iPhone frame com barra de estado e navegação inferior).

2. **✈️ Planeamento Inteligente de Viagem (`CreateTripScreen`):**
   - **Pesquisa Global de Destinos:** Integração em tempo real com a API **OpenStreetMap (Nominatim)** para autocompletar qualquer cidade ou localidade do mundo.
   - **Previsão Meteorológica em Tempo Real:** Conexão com a API **Open-Meteo** para obter temperatura real e clima, gerando recomendações inteligentes de tecidos e vestuário (ex.: linho para clima tropical, lã merino/puffer para o frio).

3. **🛍️ Catálogo de Marcas & Curadoria Automática por IA (`CatalogScreen`):**
   - Mais de 25 marcas organizadas por escalões de valor (*Económico*, *Médio*, *Luxo*).
   - Filtros dinâmicos por categoria, subcategoria, nível de marca, género e cores.
   - **Curadoria Automática por IA:** Geração instantânea de um kit recomendado com base no destino e temperatura.

4. **✨ Assistente de Medidas AI Bagless Fit (`SizeFitGuideModal`):**
   - Algoritmo que calcula com elevada precisão o tamanho ideal de roupa/calçado a partir da altura, peso e preferência de caimento (Slim, Regular, Oversized).

5. **🧼 Padrão de Higienização Certificado (`HygieneCertificateModal`):**
   - Processo de 5 etapas: Germicida UV-C, Vaporização Ecológica a 100°C, Câmara de Ozono, Lavagem Hipoalergénica e Selo de Proteção Hospitalar.

6. **♻️ Relatório de Impacto Ecológico (`EcoImpactCard`):**
   - Cálculo da poupança de emissões de CO₂ em voo, consumo de água e peso de bagagem evitado ao utilizar o serviço Bagless.

7. **💳 Opção "Keep & Own" (Comprar após Alugar):**
   - Possibilidade de comprar definitivamente qualquer peça alugada durante a viagem, pagando apenas a diferença entre o valor do aluguer já efetuado e o preço de loja.

8. **📦 Agendamento de Devolução Sem Custos (`ScheduleReturnModal`):**
   - Agendamento da recolha da mala no hotel no dia de check-out com emissão de selo digital de devolução verde.

9. **🚫 Cancelamento de Viagem (`cancelTrip`):**
   - Botão para cancelar a viagem ativa diretamente no ecrã da viagem, com modal de confirmação de segurança, limpeza das peças alugadas e redirecionamento para o planeamento de novo destino.

10. **🗑️ Remoção / Devolução Individual de Peças (`removeFromActiveRentals`):**
   - Cada card do kit no hotel inclui agora um ícone de lixo no canto superior direito da imagem e um botão "Devolver / Remover esta peça" para retirar artigos específicos do kit ativo.

---

## 📂 Estrutura do Projeto

```text
Projeto/
├── dist/                      # Bundle otimizado para produção (gerado pelo Vite)
├── public/                    # Assets estáticos
├── src/
│   ├── components/            # Componentes reutilizáveis do sistema de design
│   │   ├── index.js           # Barrel central de exportação dos componentes
│   │   ├── AppIcon.jsx        # Ícone do aplicativo Bagless
│   │   ├── BrandLogo.jsx      # Logótipo vetorial SVG com slogan
│   │   ├── BuyItemModal.jsx   # Modal de compra definitiva (Keep & Own)
│   │   ├── EcoImpactCard.jsx  # Card de métricas de sustentabilidade
│   │   ├── HygieneCertificateModal.jsx # Modal do processo de limpeza UV-C
│   │   ├── Navbar.jsx         # Cabeçalho com seletores de moeda e modo de ecrã
│   │   ├── OrderReceiptModal.jsx # Modal com QR Code e passe digital de receção
│   │   ├── ProductCard.jsx    # Card individual de produto
│   │   ├── ProductModal.jsx   # Modal detalhado do produto com seleção de tamanho
│   │   ├── ScheduleReturnModal.jsx # Modal de agendamento de recolha no hotel
│   │   ├── SizeFitGuideModal.jsx   # Calculadora inteligente de tamanhos
│   │   ├── StyleQuizModal.jsx # Quiz de personalização do DNA de Estilo
│   │   ├── ToastNotification.jsx  # Sistema global de notificações Toast
│   │   └── WeatherBadge.jsx   # Badge de recomendação meteorológica
│   ├── context/               # Gestão de Estado Global (React Context)
│   │   ├── AppContext.jsx     # Estado de viagem, kit, rentals, perfil e carrinho
│   │   └── CurrencyContext.jsx# Conversor multi-moedas (EUR, USD, GBP, JPY)
│   ├── mockData/              # Dados e motores de simulação
│   │   ├── brands.js          # Diretório das 25+ marcas parceiras
│   │   ├── catalogGenerator.js# Gerador dinâmico de catálogo fashion
│   │   ├── destinations.js    # Serviços de Geocodificação e Meteorologia Live API
│   │   └── products.js        # Catálogo unificado de produtos
│   ├── screens/               # Ecrãs principais da aplicação
│   │   ├── index.js           # Barrel de exportação de ecrãs
│   │   ├── ActiveTripScreen.jsx # Ecrã da viagem a decorrer no hotel
│   │   ├── BrandsScreen.jsx   # Diretório de marcas oficiais
│   │   ├── CartScreen.jsx     # Checkout do Kit de Viagem & resumo de custos
│   │   ├── CatalogScreen.jsx  # Exploração do catálogo com filtros avançados
│   │   ├── CreateTripScreen.jsx # Criação/planeamento de novas viagens
│   │   ├── OnboardingScreen.jsx # Registo de medidas e preferências
│   │   └── ProfileHistoryScreen.jsx # Perfil, favoritos e histórico de viagens
│   ├── services/              # Camada de serviços e adaptadores API
│   │   └── ProductFeedProvider.js # Adaptadores para Zalando, ASOS e Rakuten APIs
│   ├── App.jsx                # Componente raiz com gestão de rotas e layout
│   ├── index.css              # Sistema de design (Design Tokens, HSL colors, estilos)
│   └── main.jsx               # Ponto de entrada do React
├── index.html                 # Documento HTML5 de suporte
├── package.json               # Dependências do projeto
└── vite.config.js             # Configuração do bundler Vite
```

---

## 🛠️ Tecnologias Utilizadas

- **Core:** React 18, JSX, JavaScript (ES Modules).
- **Bundler & Dev Server:** Vite 5.
- **Ícones:** Lucide React (`lucide-react`).
- **Styling:** Vanilla CSS com tokens HSL personalizados (`index.css`), suporte para Dark Mode e suporte responsivo glassmorphism.
- **APIs Externas:**
  - OpenStreetMap Nominatim (Geocoding mundial gratuito)
  - Open-Meteo API (Meteorologia e temperatura em tempo real)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Ter o **Node.js** (versão 18 ou superior) instalado no sistema.

### 1. Instalar as Dependências
No terminal, dentro do diretório do projeto, executa:
```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
O projeto ficará disponível em `http://localhost:5173`.

### 3. Criar a Build de Produção
Para validar e compilar o pacote de produção:
```bash
npm run build
```

---

## 📝 Licença

Projeto desenvolvido para demonstrar o conceito de viagens sem bagagem com catálogo legal de marcas e integração com redes de afiliados.
