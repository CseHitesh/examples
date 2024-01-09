
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { custom } from "../redux/slices/counterSlice";

function Count() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.value);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            dispatch(custom(10));

          }}
        >
          count is  {count}
        </button>

      </div>

    </>
  );
}

export default Count;
