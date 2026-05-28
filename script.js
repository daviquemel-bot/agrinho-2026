<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte: O Motor do Futuro</title>
    <style>
        /* --- CONFIGURAÇÕES GERAIS --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            scroll-behavior: smooth;
        }

        :root {
            --bg-principal: #07090e;
            --bg-secundario: #0f131a;
            --bg-card: #141b24;
            --azul-claro: #00f2fe;
            --azul-escuro: #4facfe;
            --texto-principal: #ffffff;
            --texto-secundario: #a0aec0;
            --degrade-azul: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
        }

        body {
            background-color: var(--bg-principal);
            color: var(--texto-principal);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* --- BARRA DE DETALHE SUPERIOR --- */
        .linha-topo {
            height: 6px;
            background: var(--degrade-azul);
            width: 100%;
            position: fixed;
            top: 0;
            z-index: 1000;
        }

        /* --- MENU DE NAVEGAÇÃO --- */
        nav {
            background-color: rgba(7, 9, 14, 0.95);
            padding: 1.5rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 6px;
            width: 100%;
            z-index: 999;
            border-bottom: 1px solid rgba(79, 172, 254, 0.2);
            backdrop-filter: blur(10px);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .logo span {
            background: var(--degrade-azul);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--texto-secundario);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--azul-claro);
        }

        /* --- HERO SECTIONS (INTRODUÇÃO) --- */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 1rem;
            background: linear-gradient(180deg, rgba(7,9,14,0.5) 0%, rgba(7,9,14,1) 100%), 
                        url('https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
            margin-bottom: 4rem;
        }

        .hero-conteudo {
            max-width: 900px;
        }

        .hero h1 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .hero h1 span {
            background: var(--degrade-azul);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 1.3rem;
            color: var(--texto-secundario);
            margin-bottom: 2.5rem;
        }

        .btn-azul {
            background: var(--degrade-azul);
            color: #000;
            padding: 0.8rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4);
            transition: transform 0.3s, box-shadow 0.3s;
            display: inline-block;
        }

        .btn-azul:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 242, 254, 0.6);
        }

        /* --- LAYOUT PADRÃO DE SEÇÃO --- */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 5rem 2rem;
        }

        .titulo-secao {
            font-size: 2.5rem;
            margin-bottom: 3rem;
            position: relative;
            display: inline-block;
        }

        .titulo-secao::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 4px;
            background: var(--degrade-azul);
            border-radius: 2px;
        }

        /* --- SEÇÃO DOIS LADOS (TEXTO E IMAGEM) --- */
        .bloco-duplo {
            display: flex;
            align-items: center;
            gap: 4rem;
            margin-bottom: 6rem;
        }

        .bloco-duplo.reverso {
            flex-direction: row-reverse;
        }

        .bloco-texto {
            flex: 1;
        }

        .bloco-texto h3 {
            font-size: 1.8rem;
            color: var(--azul-claro);
            margin-bottom: 1rem;
        }

        .bloco-texto p {
            color: var(--texto-secundario);
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
        }

        .bloco-imagem {
            flex: 1;
            position: relative;
        }

        .borda-neon {
            border: 2px solid transparent;
            background-image: linear-gradient(var(--bg-principal), var(--bg-principal)), var(--degrade-azul);
            background-origin: border-box;
            background-clip: content-box, border-box;
            border-radius: 12px;
            padding: 8
