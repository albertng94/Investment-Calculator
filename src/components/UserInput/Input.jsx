export default function Input({ id, name, type }) {
    return (
        <p>
            <label htmlFor={id}>{name}</label>
            <input type={type} name={name} id={id}/>
        </p>
    );
}