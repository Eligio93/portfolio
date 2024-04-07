export default function SpecCard({icon,title}){
    return <div className="spec-card">
            <img src={icon} alt="front-end Icon" />
            <p>{title}</p>
            <p>La descrizione del prodotto espressa gia da qui</p>
    </div>
}