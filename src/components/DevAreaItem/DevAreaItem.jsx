import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";

function DevAreaItem({ item }) {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate(item.link);
  }

  return (
    <div className="border-2 border-[var(--color-fg)] hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] rounded-lg my-2 mx-2 flex items-center justify-center flex-col p-4 hover:scale-105 transition-scale duration-200" key={item.id}>
        <p className="w-full font-semibold ff-poppins text-2xl ">{item.title}</p>
        <p className="w-full text-[var(--mac)] ff-roboto text-sm text-justify my-2">
            {item.description}
        </p>
        <Button classStyle={"w-full my-3 py-2 rounded-md bg-indigo-600"}    buttonCallBack={handleGetStarted}>
            <p className="tracking-wide text-lg font-semibold text-white">{item.buttonText}</p>
        </Button>
    </div>
  );

}

export default DevAreaItem;
