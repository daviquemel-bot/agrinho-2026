<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte, Futuro Sustentável</title>
    <style>
        /* Reset de Estilos Básicos */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #000000;
            color: #ffffff;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Detalhes de Linhas Brancas */
        hr {
            border: 0;
            height: 1px;
            background: #ffffff;
            margin: 40px 0;
            opacity: 0.2;
        }

        /* Cabeçalho / Menu */
        header {
            padding: 30px 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo {
            font-size: 1.2rem;
            font-weight: 900;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        nav a {
            color: #ffffff;
            text-decoration: none;
            margin-left: 30px;
            font-size: 0.9rem;
            letter-spacing: 1px;
            transition: opacity 0.3s;
        }

        nav a:hover {
            opacity: 0.6;
        }

        /* Seção Hero (Abertura) */
        .hero {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 10%;
        }

        .hero h1 {
            font-size: 5rem;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 30px;
            letter-spacing: -2px;
        }

        .hero p {
            font-size: 1.5rem;
            max-width: 800px;
            color: #a0a0a0;
            font-weight: 300;
        }

        /* Container Geral de Conteúdo */
        .container {
            padding: 0 10% 100px 10%;
        }

        /* Seções de Texto e Imagem Intercalados */
        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 120px 0;
            gap: 60px;
        }

        .row:nth-child(even) {
            flex-direction: row-reverse;
        }

        .text-block {
            flex: 1;
        }

        .text-block h2 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            letter-spacing: -1px;
        }

        .text-block p {
            font-size: 1.15rem;
            color: #cccccc;
            margin-bottom: 20px;
            text-align: justify;
        }

        .image-block {
            flex: 1;
            position: relative;
        }

        /* Moldura/Estilo das Imagens */
        .image-block img {
            width: 100%;
            height: auto;
            display: block;
            filter: grayscale(100%); /* Mantém o conceito minimalista P&B */
            transition: filter 0.5s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .image-block img:hover {
            filter: grayscale(0%); /* Revela a cor ao passar o mouse */
        }

        /* Destaque em Caixa com Detalhe Branco */
        .highlight-box {
            border-left: 4px solid #ffffff;
            padding: 40px;
            margin: 80px 0;
            background: #0a0a0a;
        }

        .highlight-box h3 {
            font-size: 2rem;
            margin-bottom: 15px;
        }

        /* Rodapé */
        footer {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 50px 10%;
            text-align: center;
            font-size: 0.85rem;
            color: #666666;
            letter-spacing: 1px;
        }

        /* Responsividade para Telas Menores */
        @media (max-width: 968px) {
            .hero h1 { font-size: 3rem; }
            .hero p { font-size: 1.2rem; }
            .row { flex-direction: column !important; margin: 60px 0; gap: 30px; }
            .text-block h2 { font-size: 2rem; }
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">AGRO.FORTE</div>
        <nav>
            <a href="#origem">A Força</a>
            <a href="#tecnologia">Inovação</a>
            <a href="#sustentabilidade">O Futuro</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>AGRO FORTE.<br>FUTURO SUSTENTÁVEL.</h1>
            <p>A união definitiva entre a potência produtiva do campo e o respeito absoluto aos limites do nosso planeta. Conheça a revolução verde que alimenta o mundo protegendo o amanhã.</p>
        </section>

        <div class="container">
            
            <hr>

            <section id="origem" class="row">
                <div class="text-block">
                    <h2>A Força que Alimenta e Move Nações</h2>
                    <p>O agronegócio moderno não é apenas um setor econômico; ele é a espinha dorsal da sobrevivência global. Diante do desafio de alimentar uma população em crescimento exponencial, a agricultura e a pecuária expandiram suas capacidades de forma inédita. Hoje, produzir em larga escala exige responsabilidade, planejamento e uma conexão intrínseca com os ciclos naturais.</p>
                    <p>Essa força bruta do campo agora se veste de consciência. Entendemos que a terra não é um recurso infinito, mas sim um organismo vivo que necessita de cuidado e manejo inteligente para continuar gerando riqueza e sustento pelas próximas gerações.</p>
                </div>
                <div class="image-block">
                    <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800" alt="Plantação vista de cima">
                </div>
            </section>

            <div class="highlight-box">
                <h3>Produtividade não anula preservação.</h3>
                <p>O grande marco do século é provar que o mesmo solo que bate recordes de safra pode — e deve — ser o solo que sequestra carbono e protege recursos hídricos.</p>
            </div>

            <section id="tecnologia" class="row">
                <div class="text-block">
                    <h2>Inovação Tecnológica a Serviço da Terra</h2>
                    <p>Drones que mapeiam a saúde da folhagem, sensores que calculam a umidade exata do solo em tempo real e inteligência artificial prevendo janelas ideais de plantio. A tecnologia transformou o agricultor em um cientista da terra. O uso de dados permite que cada gota de água e cada grama de insumo sejam aplicados com precisão cirúrgica.</p>
                    <p>O resultado dessa transformação digital é a drástica redução do desperdício e o aumento da eficiência por hectare, provando que a evolução tecnológica e o cuidado ecológico caminham lado a lado no novo cenário do agro.</p>
                </div>
                <div class="image-block">
                    <img src="https://images.unsplash.com/photo-1592982537447-7440771109df?q=80&w=800" alt="Tecnologia e maquinário agrícola moderno">
                </div>
            </section>

            <hr>

            <section id="sustentabilidade" class="row">
                <div class="text-block">
                    <h2>O Legado do Futuro Sustentável</h2>
                    <p>Práticas como o plantio direto, a rotação de culturas e a integração lavoura-pecuária-floresta (ILPF) deixaram de ser conceitos teóricos para se tornarem a realidade das propriedades mais valiosas do país. Sustentabilidade no agro significa regenerar o solo, proteger nascentes e criar um ecossistema onde a economia caminha em harmonia com a biodiversidade.</p>
                    <p>Ser um "Agro Forte" hoje significa ser um agro consciente. O futuro do setor pertence àqueles que entendem que o maior ativo de uma produção de sucesso é a garantia de um planeta saudável.</p>
                </div>
                <div class="image-block">
                    <img src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=800" alt="Brotos verdes crescendo saudáveis">
                </div>
            </section>

        </div>
    </main>

    <footer>
        <p>&copy; 2026 AGRO FORTE, FUTURO SUSTENTÁVEL. DESIGN MINIMALISTA CONCEITUAL.</p>
    </footer>

</body>
</html>
