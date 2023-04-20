import Avaliacao from "../Avaliacao";

export default function GrupoAvaliacao() {
    return (
        <div style={{ display: 'flex', gap: 16 }}>
            <Avaliacao />
            <Avaliacao />
            <Avaliacao />
        </div>
    )
}