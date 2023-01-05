import {Progress} from "antd";
import {colors} from "../../styles/colors";
import {HomeAway} from "../../types/Prediction";
import {ComparisonBarContainer, ComparisonBarTitle, PercentsContainer} from "./styled";

type Props = {
	data: HomeAway;
	label: string;
}

const ComparisonBar = ({data, label}: Props) => {
	const homePercentage = data.home.slice(0, -1)
	const awayPercentage = data.away.slice(0, -1)
	
	return (
		<ComparisonBarContainer>
				<PercentsContainer>
					<span>{homePercentage}%</span>
					<ComparisonBarTitle>{label}</ComparisonBarTitle>
					<span>{awayPercentage}%</span>
				</PercentsContainer>
				<Progress percent={Number(homePercentage)} showInfo={false} trailColor={colors.awayBox} strokeColor={colors.homeBox} />
		</ComparisonBarContainer>
	)
}

export default ComparisonBar;
