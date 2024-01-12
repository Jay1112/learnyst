function Button({ classStyle, buttonCallBack, title, children }) {
    console.log(classStyle)

    function handleClick(){
        buttonCallBack();
    }

    return (
        <button
        onClick={handleClick}
        type="button"
        className={classStyle}
        >
          {children}
        </button>
    );
}

export default Button;
