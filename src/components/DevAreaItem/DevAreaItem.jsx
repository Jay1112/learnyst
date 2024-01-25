import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";

function DevAreaItem({ item }) {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate(item.link);
  }

  return (
    <div className="border-2 hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] rounded-lg my-2 mx-3 flex items-center justify-center flex-col px-4 hover:scale-105 transition-scale duration-200" key={item.id}>
        <p className="w-full font-semibold ff-poppins text-xl d-flex-ten py-2 text-center md:text-left">{item.title}</p>
        <div className="w-full flex items-stretch justify-center d-flex-fifty">
          <img src={item.image} width={'100%'} height={'auto'} alt="section logo" className="rounded-md" />
        </div>
        <p className="w-full text-[var(--mac)] ff-roboto text-sm text-justify my-2 d-flex-thirty">
            {item.description}
        </p>
        <Button classStyle={"w-full my-3 py-2 rounded-md bg-indigo-600 d-flex-ten flex items-center justify-center"}    buttonCallBack={handleGetStarted}>
            <p className="tracking-wide text-lg font-semibold text-white">{item.buttonText}</p>
        </Button>
    </div>
  );

}

export default DevAreaItem;
