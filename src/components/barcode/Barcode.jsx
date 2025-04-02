import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

function Barcode({ transactionId }) {
    const barcodeRef = useRef(null);

    useEffect(() => {
        if (transactionId) {
            JsBarcode(barcodeRef.current, transactionId, {
                format: "CODE128",
                fontSize: 15,
                width: "4vw",
                background:"rgb(209, 214, 220)",
            });
        }
    }, [transactionId]);

    return (
        <div className="flex flex-col items-center">
            <svg ref={barcodeRef} ></svg>
        </div>
    );
}

export default Barcode;
