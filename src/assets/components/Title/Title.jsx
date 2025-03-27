import './Title.css'

function Title(props) {
    return(
        <header className="title">
            <h2>{props.title}</h2>
        </header>
    );
}
export default Title;
