<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte, Futuro Sustentável</title>
    <style>
        /* Configurações Gerais - Fundo Branco */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #ffffff;
            color: #333333;
            line-height: 1.6;
        }

        /* Detalhes em Vermelho (#cc0000) */
        header {
            border-bottom: 4px solid #cc0000;
            padding: 20px 0;
        }

        .container {
            width: 85%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo h1 {
            font-size: 24px;
            color: #333333;
        }

        .logo span {
            color: #cc0000; /* Detalhe em vermelho */
        }

        nav a {
            text-decoration: none;
            color: #333333;
            margin-left: 20px;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #cc0000;
        }

        /* Seção Hero (Destaque Principal) */
        .hero {
            padding: 60px 0;
            text-align: center;
            background-color: #fcfcfc;
        }

        .hero h2 {
            font-size: 42px;
            margin-bottom: 20px;
            color: #111111;
        }

        .hero p {
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto 30px auto;
            color: #666666;
        }

        .btn-principal {
            display: inline-block;
            background-color: #cc0000; /* Botão Vermelho */
            color: #ffffff;
            padding: 12px 30px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .btn-principal:hover {
            background-color: #a00000;
        }

        /* Seção de Conteúdo e Imagens */
        .conteudo {
            padding: 60px 0;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .card {
            border: 1px solid #eeeeee;
            border-top: 5px solid #cc0000; /* Detalhe em vermelho no topo do card */
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0,05);
            background: #ffffff;
        }

        /* Imagens Responsivas com placeholders */
        .card-img {
            width: 100%;
            height: 200px;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #888888;
            font-weight: bold;
            object-fit: cover;
        }

        .card-body {
            padding: 20px;
        }

        .card-body h3 {
            margin-bottom: 10px;
            color: #111111;
        }

        /* Rodapé */
        footer {
            background-color: #111111;
            color: #ffffff;
            padding: 30px 0;
            text-align: center;
            margin-top: 60px;
            border-top: 5px solid #cc0000;
        }

        footer p span {
            color: #cc0000;
        }
    </style>
</head>
<body>

    <header>
        <div class="container nav-container">
            <div class="logo">
                <h1>Agro<span>Forte</span></h1>
            </div>
            <nav>
                <a href="#inicio">Início</a>
                <a href="#pilares">Pilares</a>
                <a href="#sobre">Sobre Nós</a>
            </nav>
        </div>
    </header>

    <section class="hero" id="inicio">
        <div class="container">
            <h2>Agro Forte, Futuro Sustentável</h2>
            <p>Unindo a potência da produção agrícola com o respeito ao meio ambiente. Descubra como a tecnologia e a sustentabilidade transformam o campo e garantem o amanhã.</p>
            <a href="#pilares" class="btn-principal">Conheça Nossas Práticas</a>
        </div>
    </section>

    <section class="conteudo" id="pilares">
        <div class="container">
            <h2 style="text-align: center; font-size: 32px;">Inovação no Campo</h2>
            <p style="text-align: center; color: #666; max-width: 600px; margin: 10px auto 0 auto;">Produzir mais, preservando os recursos naturais para as próximas gerações.</p>
            
            <div class="grid">
                <div class="card">
                    <img class="card-img" src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=500&auto=format&fit=crop&q=60" alt="Tecnologia no Campo">
                    <div class="card-body">
                        <h3>Tecnologia de Ponta</h3>
                        <p>Uso de inteligência artificial e monitoramento via satélite para otimizar o plantio e reduzir o desperdício de água e insumos.</p>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60" alt="Preservação Ambiental">
                    <div class="card-body">
                        <h3>Manejo Sustentável</h3>
                        <p>Práticas de rotação de culturas e plantio direto que protegem o solo contra a erosão e mantêm os nutrientes naturais da terra.</p>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60" alt="Energia Limpa">
                    <div class="card-body">
                        <h3>Energia Renovável</h3>
                        <p>Integração de matrizes solares e biomassa nas propriedades rurais, tornando a produção de alimentos autossuficiente em energia limpa.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2026 Agro<span>Forte</span> - Todos os direitos reservados. Cultivando um amanhã melhor.</p>
        </div>
    </footer>

</body>
</html>
