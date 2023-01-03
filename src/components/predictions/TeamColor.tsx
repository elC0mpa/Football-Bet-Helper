import {H2HTeam} from "../../types/Fixture";
import {TeamColorBox, TeamColorContainer} from "./styled";

type Props = {
	team: H2HTeam;
	isAway?: boolean;
}

const TeamColor = ({team, isAway}: Props) => {
	return (
		<TeamColorContainer>
			<TeamColorBox className={isAway ? 'is-away' : ''} />
			<span>{team.name}</span>
		</TeamColorContainer>
	)
}


export default TeamColor;
