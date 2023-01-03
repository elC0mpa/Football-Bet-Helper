import {Progress} from "antd";
import {colors} from "../../styles/colors";
import {HomeAway} from "../../types/Prediction";
import {ComparisonBarContainer, ComparisonBarTitle, ProgressContainers} from "./styled";

type Props = {
	data: HomeAway;
	label: string;
}

const ComparisonBar = ({data, label}: Props) => {
	const homePercentage = data.home.slice(0, -1)
	
	return (
		<ComparisonBarContainer>
			<ComparisonBarTitle>{label}</ComparisonBarTitle>
			<ProgressContainers>
				<Progress percent={Number(homePercentage)} showInfo={false} trailColor={colors.awayBox} strokeColor={colors.homeBox} />
			</ProgressContainers>
		</ComparisonBarContainer>
	)
}

export default ComparisonBar;
