import QRCode from "react-qr-code";
function Qrtransaction({transactionInfo}) {
  const qrData = JSON.stringify(transactionInfo);
    return(
      <div>
        <div className="p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">Mã QR Giao Dịch</h2>
          <QRCode 
            value={qrData} 
            size={100} 
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
          />
      </div>  
    </div>
  )
}
export default Qrtransaction