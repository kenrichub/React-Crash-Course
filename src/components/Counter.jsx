function Counter ({count}) {
    return (
    <div>
        <button>-</button>
        {count}
        <button onClick={()=>{count++}}>+</button>
    </div>
    );
}

export default Counter;
