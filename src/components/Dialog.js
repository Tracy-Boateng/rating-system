function Dialog({ closeDialog }) {

    return (
        <button
            className="close-btn"
            onClick={closeDialog}
        >
            CLOSE DIALOG
        </button>
    );
}

export default Dialog;