import { FaStar } from 'react-icons/fa';

function Star({ selected, onClick }) {

    return (
        <FaStar
            size={30}
            color={selected ? '#a7b526' : '#3d4b5c'}
            onClick={onClick}
        />
    );
}

export default Star;