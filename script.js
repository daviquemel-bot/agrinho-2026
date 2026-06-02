<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte, Futuro Sustentável</title>
    <style>
        /* Configurações Globais */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #0b0c10;
            color: #c5c6c7;
            line-height: 1.8;
        }

        /* Cores do Tema:
           Fundo Escuro: #0b0c10 e #1f2833
           Azul Destaque: #45f3ff
           Azul Detalhes: #1f2833 / #008cff
           Texto Claro: #ffffff e #c5c6c7
        */

        /* Cabeçalho / Navbar */
        header {
            background-color: #1f2833;
            border-bottom: 2px solid #45f3ff;
            padding: 20px 50px;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            color: #ffffff;
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .logo span {
            color: #45f3ff;
        }

        /* Seção Hero (Banner Principal) */
        .hero {
            position: relative;
            height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(11, 12, 16, 1)), 
                        url('https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=1920') no-repeat center center/cover;
            padding: 20px;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            color: #ffffff;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 0 0 10px rgba(69, 243, 255, 0.5);
        }

        .hero-content p {
            font-size: 1.2rem;
            color: #45f3ff;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Container de Conteúdo Principal */
        .main-content {
            max-width: 1000px;
            margin: 60px auto;
            padding: 0 20px;
        }

        /* Estilização dos Grandes Textos */
        .section-title {
            color: #ffffff;
            font-size: 2.2rem;
            margin-bottom: 25px;
            border-left: 5px solid #45f3ff;
            padding-left: 15px;
        }

        .text-block {
            margin-bottom: 60px;
        }

        .text-block p {
            font-size: 1.1rem;
            margin-bottom: 20px;
            text-align: justify;
        }

        /* Galeria e Imagens Intermediárias */
        .image-container {
            width: 100%;
            margin: 40px 0;
            border: 1px solid #45f3ff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 15px rgba(69, 243, 255, 0.2);
        }

        .image-container img {
            width: 100%;
            height: auto;
            display: block;
            filter: grayscale(20%) brightness(90%);
            transition: transform 0.5s, filter 0.5s;
        }

        .image-container img:hover {
            transform: scale(1.02);
            filter: grayscale(0%) brightness(100%);
        }

        .image-caption {
            background-color: #1f2833;
            color: #45f3ff;
            padding: 15px;
            font-size: 0.9rem;
            text-align: center;
            border-top: 1px solid #45f3ff;
        }

        /* Grid de Destaques */
        .agro-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .grid-item {
            background-color: #1f2833;
            padding: 30px;
            border-radius: 8px;
            border-bottom: 4px solid #45f3ff;
            transition: transform 0.3s;
        }

        .grid-item:hover {
            transform: translateY(-5px);
        }

        .grid-item h3 {
            color: #ffffff;
            margin-bottom: 15px;
            font-size: 1.4rem;
        }

        /* Rodapé */
        footer {
            background-color: #050608;
            border-top: 1px solid #1f2833;
            padding: 40px 20px;
            text-align: center;
            color: #666;
            font-size: 0.9rem;
        }

        footer p span {
            color: #45f3ff;
        }

        /* Responsividade */
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.2rem;
            }
            .section-title {
                font-size: 1.8rem;
            }
            header {
                padding: 20px;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="nav-container">
            <div class="logo">AGRO<span>FORTE</span></div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Agro Forte, Futuro Sustentável</h1>
            <p>A união da potência tecnológica no campo com a preservação dos nossos recursos naturais.</p>
        </div>
    </section>

    <main class="main-content">

        <article class="text-block">
            <h2 class="section-title">A Nova Era do Agronegócio</h2>
            <p>O agronegócio moderno enfrenta um dos maiores desafios da história da humanidade: alimentar uma população global em constante crescimento e, ao mesmo tempo, reduzir drasticamente a sua pegada ecológica. A resposta para essa equação não está no recuo da produção, mas sim no avanço exponencial da tecnologia e no manejo inteligente da terra. O conceito de um "Agro Forte" está intrinsecamente ligado à resiliência e à inovação contínua.</p>
            <p>Hoje, o campo não é mais definido apenas pelo trabalho braçal, mas por sistemas complexos de análise de dados, inteligência artificial e biotecnologia. A otimização do uso da água, a redução no uso de defensivos agrícolas por meio da aplicação localizada e o monitoramento via satélite de safras inteiras transformaram as propriedades rurais em indústrias de alta precisão. Produzir mais em menos espaço tornou-se a meta dourada da agricultura sustentável.</p>
        </article>

        <div class="image-container">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad451?auto=format&fit=crop&q=80&w=1200" alt="Tecnologia no campo sustentável">
            <div class="image-caption">Sistemas inteligentes monitoram o solo em tempo real, garantindo máxima eficiência com o mínimo de impacto ambiental.</div>
        </div>

        <article class="text-block">
            <h2 class="section-title">Sustentabilidade como Pilar de Produtividade</h2>
            <p>Engana-se quem pensa que a sustent
