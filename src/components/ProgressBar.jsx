import ProgressBar from "react-bootstrap/ProgressBar";
import { MAX_WORDLIST, MAX_PROGRESSBAR} from "../Constants";

export const CurrentProgress = ({curCount, contErr}) =>
{
    const progStatusOpt = [
        "success",
        "info",
        "warning",
        "danger"
      ];

    let constInc = MAX_PROGRESSBAR / MAX_WORDLIST; 
    console.log(progStatusOpt[contErr]);
    return (
        <ProgressBar className="mb-2" variant = {progStatusOpt[contErr]} animated now={curCount*constInc} />
    );
}