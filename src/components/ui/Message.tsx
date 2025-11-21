
function Message() {
  return (
    <a href="tel:1234567890" className="flex items-center justify-center w-[60px] h-[60px] rounded-full fixed bottom-[20px] right-[20px] shadow-icon-shadow bg-iconbgLight dark:bg-iconbgDark focus:hover:scale-110 hover:scale-110 transition-all z-10">
      <img src="/assets/icons/whatsapp.svg" alt="whatsapp icon" />
    </a>
  )
}

export default Message