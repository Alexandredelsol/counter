type counterProps = {
    value: number,
}

const Counter = ({value}:counterProps) => {

    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
};

export default Counter;
