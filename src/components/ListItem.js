

export default function ListComponent({props}) {
    return(
        <div className="listComponent">
            <li>{props.login}: {props.description? props.description: '-'}</li>
        </div>
    );
}