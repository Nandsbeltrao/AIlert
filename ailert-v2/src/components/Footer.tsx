interface Props {
    isCamouflage: boolean
    onToggle: () => void
}


function Footer({ isCamouflage, onToggle }: Props) {
    return (
         <footer>
            <div className="footer-left">
                <div className="footer-dot"></div>
                <span className="footer-text">
                    Modo Camaleão: {isCamouflage ? 'Ativo' : 'Inativo'}
                </span>
            </div>
            <button className="footer-btn" onClick={onToggle}>
                {isCamouflage ? 'Desativar' : 'Ativar'}
            </button>
        </footer>
    )
}


export default Footer;