import { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {

    const [showDialog, setShowDialog] = useState(true);

    return (
        <main>

            {showDialog && (
                <div className="dialog-box">

                    <StarRating />

                    <Dialog
                        closeDialog={() => setShowDialog(false)}
                    />

                </div>
            )}

            {!showDialog && (
                <button
                    className="open-btn"
                    onClick={() => setShowDialog(true)}
                >
                    OPEN DIALOG
                </button>
            )}

        </main>
    );
}

export default App;