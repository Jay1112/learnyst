function Button({ classStyle, buttonCallBack, children, disabled = false }) {
    function handleClick(){
        if(buttonCallBack){
            buttonCallBack();
        }
    }

    return (
        <button
            disabled={disabled}
            onClick={handleClick}
            type="button"
            className={classStyle}
        >
          {children}
        </button>
    );
}

export default Button;
