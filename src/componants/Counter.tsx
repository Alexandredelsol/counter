type counterProps = {
    value: number,
    color: string
}

const Counter = ({value,color}: counterProps) => {

    return (
        <div>
            <h1 style={{color: color}}>{value}</h1>
        </div>
    );
};

export default Counter;
