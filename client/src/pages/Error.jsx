import { Link} from 'react-router-dom';

function Error () {
    return (
        <div>
            <p>
                You're lost!
            </p>
            <Link to='/'>
                Home
            </Link>
        </div>
    );
}

export default Error;