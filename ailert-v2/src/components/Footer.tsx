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
                    modo camaleão: {isCamouflage ? 'ativo' : 'inativo'}
                </span>
            </div>
            <button className="footer-btn" onClick={onToggle}>
                {isCamouflage ? 'desativar' : 'ativar'}
            </button>
        </footer>
    )
}


export default Footer;