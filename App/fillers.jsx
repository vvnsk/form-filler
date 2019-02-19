function Fillers() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="container-fluid">
            <h2>Fillers</h2>
            {a.map(i => {
                return <p class="p-4">Some example text. Some example text. Some example text. Some example text.
                    Some example
                    text</p>
            })}
        </div>
    )
}