function Modal() {
  return (
    <>
      <div class='modal hidden'>
        <button class='btn--close-modal'>&times;</button>
        <h2 class='modal__header'>
          Open your bank account <br />
          in just <span class='highlight'>5 minutes</span>
        </h2>
        <form class='modal__form'>
          <label>First Name</label>
          <input type='text' />
          <label>Last Name</label>
          <input type='text' />
          <label>Email Address</label>
          <input type='email' />
          <button class='btn'>Next step &rarr;</button>
        </form>
      </div>
      <div class='overlay hidden' />
    </>
  );
}

export default Modal;
