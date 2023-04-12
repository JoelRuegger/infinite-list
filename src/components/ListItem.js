

export default function ListComponent({props}) {
    return(
        <div className="listComponent">
            <li>{props.login}</li>
            <li>{props.description}</li>
        </div>
    );
}