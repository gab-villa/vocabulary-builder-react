import ProgressBar from "react-bootstrap/ProgressBar";
import { MAX_WORDLIST, MAX_PROGRESSBAR} from "../Constants";

export const CurrentProgress = ({curCount}) =>
{
    let constInc = MAX_PROGRESSBAR / MAX_WORDLIST; 
    return (
        <ProgressBar variant = "info" animated now={curCount*constInc} />
    );
}