export default function Input({ id, className, name, type, onChange }) {
    return (
        <p>
            <label htmlFor={id}>{name}</label>
            <input type={type} name={name} id={id} className={className} onChange={onChange}/>
        </p>
    );
}