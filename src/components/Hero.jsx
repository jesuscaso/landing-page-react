import { FaReact } from 'react-icons/fa';
function Hero() {
    return (
        <section style={{
            padding: "4rem",
            background: "#f0f0f0",
            textAlign: "center"
        }}>
            <h1>Bienvenido a Nuestra Landing</h1>
            <p>Mejor con React<span
                style={{
                    color: "#1399C4",
                    fontSize: "2rem"
                }}
            ><FaReact /></span>.</p>
        </section>
    );
}

export default Hero;