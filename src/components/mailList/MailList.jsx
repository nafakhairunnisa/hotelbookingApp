import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Daftar dan kami akan tawarkan harga terbaik untukmu</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Berlangganan</button>
      </div>
    </div>
  )
}

export default MailList