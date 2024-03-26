import { InfinitySpin } from "react-loader-spinner";
import { globalColor } from "../../styles/root";

export default function Loader() {
  return (
    <>
      <InfinitySpin
        visible={true}
        width='200'
        marginLeft='auto'
        marginRight='auto'
        color={globalColor.colorRed}
        ariaLabel='infinity-spin-loading'
      />
    </>
  );
}
