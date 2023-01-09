function Container(props) {
    return (
        <div id="container">
            <main className={props.mainclass}>
                <div className={props.rowgroup1class}>
                    <h2>Rowgroup1 class name is .rowgroup1</h2>
                </div>
            </main>
        </div>
    );
}

export default Container;
