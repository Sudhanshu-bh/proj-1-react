import React from 'react'

function MyIcon({type}) {
  if(type === "success") {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
      </>
    )
  }
  else if(type === "danger") {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
        </svg>
      </>
    )
  }
  else {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </svg>
      </>
    )
  }
}

function Toast({ toast, settoast }) {

  function closeToast() {
    settoast({text: "", type: "primary"});
  }

  let toastBackground;
  if(toast.type === "success") {
    toastBackground = "bg-success"
  } else if (toast.type === "danger") {
    toastBackground = "bg-danger"
  } else {
    toastBackground = "bg-primary"
  }

  return (

    <div className={`position-fixed bottom-0 end-0 p-3 `} style={{ zIndex: 5, cursor: "default" }}>
      <div className={`toast text-white ${toast.text ? "show" : "hide"} ${toastBackground}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">

          <div className="toast-body d-flex align-items-center fs-6">
            &nbsp;
            <div className="col-1">
              <MyIcon type={toast.type} />
            </div>
            &nbsp; &nbsp;
            <strong className="col-11 pe-3">{toast.text}</strong>
          </div>

          <button type="button" className="btn-close btn-close-white me-3 m-auto"
            onClick={closeToast}
            data-bs-dismiss="toast" aria-label="Close">
          </button>

        </div>
      </div>
    </div>

  )
}

export default Toast
