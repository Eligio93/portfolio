export default function SpecCard({ icon, title, description }) {
    return <div className="spec-card">
        <img src={icon} alt="front-end Icon" />
        <p>{title}</p>
        <p>{description}</p>
    </div>
}