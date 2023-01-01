import {HomeAway} from "../../types/Prediction";

type Props = {
	data: HomeAway;
	label: string;
}

const ComparisonBar = ({data, label}: Props) => {
	return <p>{label}</p>
}

export default ComparisonBar;
