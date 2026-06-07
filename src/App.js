import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {

    const [showDialog, setShowDialog] = useState(true);

    return (
        <main>

            {showDialog && (
                <div className="dialog">
                    <StarRating />
                </div>
            )}

            <Dialog
                closeDialog={() => setShowDialog(false)}
            />

        </main>
    );
}

export default App;