import { FaStar } from "react-icons/fa";

function Star({ selected, onClick }) {
    return (
        <FaStar
            onClick={onClick}
            color={selected ? "#a7b526" : "#37475a"}
            size={28}
        />
    );
}

export default Star;