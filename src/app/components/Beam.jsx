const Beam = ({ bg }) => {
    return (
        <div style={{
            background:bg
        }} className={`h-5 w-5   rounded-full relative `}>
            <div style={{
                background:bg
            }} className={`absolute rounded-full top-0 left-0  h-full w-full animate-ping  opacity-75`}></div>
        </div>
    )
}

export default Beam